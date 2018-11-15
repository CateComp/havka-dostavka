import { Component, OnInit, Input } from '@angular/core';
import { DishHome } from 'app/core/interfaces/dish-home';
import { FirebaseService } from 'app/core/services/firebase.service';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { filterProp } from 'app/core/interfaces/fiter-properties';
import { PROPERTIES } from 'app/core/app-config';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  providers: [ NgbModal, NgbActiveModal]
})
export class MenuItemComponent implements OnInit {
  @Input() dish: DishHome;
  public filterProp: filterProp[] = PROPERTIES;
  private newImage: boolean;

  mouseHovering() {
  this.dish.isHovered = true;
  }

  mouseLeaving() {
    this.dish.isHovered = false;
  }

  constructor(private _fbs: FirebaseService,
      private modalService: NgbModal,
      public activeModal: NgbActiveModal) {
        // customize default values of modals used by this component tree
        // We will delete this after all works done
  }

  open(content) {
    this.modalService.open(content);
    this.submitValidation();
    console.log('This is ', this);
  }

  addImage(event) {
    this.newImage = true;
    this.dish.img = event.target.files[0];
    console.log('dish', this.dish.img);
  }

  close(content) {
    console.log('this', this);
    this.activeModal.close(content);
  }

  deleteDish(): void {
    this._fbs.deleteDish(this.dish);
  }

  saveEditDish() {
    console.log('Edited', this.dish);
    if (this.newImage) {
      this._fbs.uploadImage(this.dish);
      this._fbs.downloadImage(this.dish);
    }
    this._fbs.editDish(this.dish);
  }

  submitValidation() {
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      const validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
}

ngOnInit() {
}


}
