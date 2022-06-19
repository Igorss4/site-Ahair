import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(){

    window.scroll(0,0)
  }


  scrollServicos(){
    window.scroll({
      left: 0,
      top: 740,
    behavior: 'smooth'});
  }
  scrollSobre(){
    window.scroll({
      left: 0,
      top: 1400,
    behavior: 'smooth'});
  }
  scrollContato(){
    window.scroll({
      left: 0,
      top: 3000,
    behavior: 'smooth'});
  }

}
