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
    window.scroll(0,740)
  }
  scrollSobre(){
    window.scroll(0,1400)
  }
  scrollContato(){
    window.scroll(0,3000)
  }

}
