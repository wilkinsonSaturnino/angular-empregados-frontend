import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empregados } from '../../empregados';
import { EmpregadosService } from '../../services/empregados.service';

@Component({
  selector: 'app-empregados-add',
  templateUrl: './empregados-add.component.html',
  styleUrls: ['./empregados-add.component.css']
})
export class EmpregadosAddComponent implements OnInit {

  empregado: Empregados = new Empregados();

  constructor(private empregadosService: EmpregadosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.salvarEmpregado();
  }

  salvarEmpregado() {
    this.empregadosService.addEmpregado(this.empregado).subscribe(emp => {
      console.log(emp);
      this.router.navigate(['/empregados']);
    },
    error => console.log(error));
  }

}
