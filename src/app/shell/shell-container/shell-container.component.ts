import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-container',
  templateUrl: './shell-container.component.html',
  styleUrls: ['./shell-container.component.scss'],
  host: { class: 'flex-container' },
})
export class ShellContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
