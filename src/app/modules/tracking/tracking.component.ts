import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'app/core/services/local-storage.service'
import { MapCoords, DefaultMapPos } from 'app/core/interfaces/map-coords';
import { DataMapService } from 'app/core/services/data-map.service';
import { first } from 'rxjs/operators';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {
  coords: MapCoords[];
  public currentPos: DefaultMapPos = {
    lat: 49.843151,
    lng: 24.026744
  };
  public zoom: number = 13;
  public icon: string = "assets/pictures/marker.png";
  public lat: number;
  public lng: number;
  public currentIndex: number;
  public deliveryPlaceLat: number;
  public deliveryPlaceLng: number;
  constructor(
    private ls: LocalStorageService,
    private dataMap: DataMapService,
    private user: AuthService
  ) { }
  public coordsUrl: string;
  public polyline: any[];
  public startWay(coordsUrl) {
    console.log('hello')
    this.dataMap.getPoints(coordsUrl)
      .subscribe((data) => {
        this.polyline = data
        console.log(this.polyline[this.polyline.length - 1].lat)
        this.deliveryPlaceLat = this.polyline[this.polyline.length - 1].lat;
        this.deliveryPlaceLng = this.polyline[this.polyline.length - 1].lng;
      })
    this.dataMap.getCurrentPoint(1000, coordsUrl)
      .subscribe((data) => {
        console.log(data)
        this.lat = data.lat
        this.lng = data.lng
      })
  }
  public ngOnInit() {
    this.checkUserUidForTracking()
  }
  isLoggedIn() {
    return this.user.authState.pipe(first()).toPromise();
  }
  async checkUserUidForTracking() {
    const user = await this.isLoggedIn()
    if (user && this.ls.get(this.user.afAuth.auth.currentUser.uid)) {
      this.currentIndex = this.ls.get('currentIndex');
      this.coordsUrl = this.ls.get(this.user.afAuth.auth.currentUser.uid);
      if (this.currentIndex) {
        this.startWay(this.coordsUrl)
      }
    }
  }
}