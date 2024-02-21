import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { AboutComponentComponent } from './MyComponent/about-component/about-component.component';

export const routes: Routes = [
    { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponentComponent},
];
