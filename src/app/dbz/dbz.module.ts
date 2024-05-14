import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule,FormsModule],
  exports: [MainPageComponent],
  declarations: [MainPageComponent,ListComponent,FormComponent],
})
export class DbzModule { }
