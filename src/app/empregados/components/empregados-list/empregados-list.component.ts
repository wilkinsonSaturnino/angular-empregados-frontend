import { Component, OnInit } from '@angular/core';
import { Empregados } from '../../empregados';
import { EmpregadosService } from '../../services/empregados.service';

@Component({
  selector: 'app-empregados-list',
  templateUrl: './empregados-list.component.html',
  styleUrls: ['./empregados-list.component.css']
})
export class EmpregadosListComponent implements OnInit {

  empregados: Empregados[] = new Array;

  constructor(private empregadosService: EmpregadosService) { }

  ngOnInit(): void {
    this.listarEmpregados();
  }

  private listarEmpregados() {
    this.empregadosService.getEmpregadosList().subscribe(emp => {
      this.empregados = emp;
    });
  }

}
