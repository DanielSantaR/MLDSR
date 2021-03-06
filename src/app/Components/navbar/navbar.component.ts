import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output()
  word = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  search(word: string) {
    this.word.emit(word);
  }
}
