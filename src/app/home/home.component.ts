import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('burger', { static: true }) burger: ElementRef
  @ViewChild('menu', { static: true }) menu: ElementRef
  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.render.listen(this.burger.nativeElement, 'click', () => {
      (this.menu.nativeElement.classList.contains('hidden')) ? this.menu.nativeElement.classList.remove('hidden') : this.menu.nativeElement.classList.add('hidden')
    })
  }

}
