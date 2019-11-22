import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getList().subscribe(next => {
      this.books = next;
    });
  }

  addBook(formBook) {
    this.bookService.add(formBook.value).subscribe(() => {
      console.log('Thêm thành công!');
    }, error1 => {
      console.log('Thêm thất bại! ' + error1);
    });
    this.ngOnInit();
  }
}
