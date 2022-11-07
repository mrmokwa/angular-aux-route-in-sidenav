import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
})
export class MainToolbarComponent implements OnInit {
  @Output() buttonClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.buttonClick.emit();
  }
}
