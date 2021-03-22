import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Output()
  currentPage = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
  pageChanged(event: any) {
    this.currentPage.emit(event);
  }
}
