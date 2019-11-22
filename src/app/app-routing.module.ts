import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListBookComponent} from './component/list-book/list-book.component';
import {ReadBookComponent} from './component/read-book/read-book.component';


const routes: Routes = [
  {
    path: 'list-book',
    component: ListBookComponent
  },
  {
    path: 'list-book/:id',
    component: ListBookComponent
  },
  {
    path: 'list-read-book',
    component: ReadBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
