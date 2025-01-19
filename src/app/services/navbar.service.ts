import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  afficherToggle() {
  let active = document.querySelector(".active")
  let navBar = document.querySelector("nav")
  navBar?.classList.toggle("navChange")
  active?.classList.toggle("activeChange")
  
}
}
