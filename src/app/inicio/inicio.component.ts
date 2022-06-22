import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    window.scroll({
      top:0,
      left: 0
    })
  }

  scroll(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

}
