import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpregadosListComponent } from './components/empregados-list/empregados-list.component';
import { EmpregadosService } from './services/empregados.service';
import { EmpregadosAddComponent } from './components/empregados-add/empregados-add.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    EmpregadosListComponent,
    EmpregadosAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    EmpregadosListComponent
  ],
  providers: [
    EmpregadosService
  ]
})
export class EmpregadosModule { }
