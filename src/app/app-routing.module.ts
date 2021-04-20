import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpregadosAddComponent } from './empregados/components/empregados-add/empregados-add.component';
import { EmpregadosListComponent } from './empregados/components/empregados-list/empregados-list.component';

const routes: Routes = [
  {path: 'empregados', component: EmpregadosListComponent},
  {path: 'empregados-add', component: EmpregadosAddComponent},
  {path: '', redirectTo: 'empregados', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
