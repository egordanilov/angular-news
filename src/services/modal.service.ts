import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  modalIsOpen = true;
  openModal() {
    this.modalIsOpen = true;
    console.log('clicked to open');
    console.log(this.modalIsOpen);
    return true;
  }
  closeModal() {
    this.modalIsOpen = false;
    return false;

  }
}
