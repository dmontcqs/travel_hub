import { Component } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  resultado!: string;

  // Se inyecta al constructor un objeto de la clase FormBuilder:
  constructor(private fb: FormBuilder){ }

  // llamamos al método group de la clase FormBuilder

    formularioContacto = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(10)]],
      mail: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mensaje: ['', [Validators.required, Validators.maxLength(300)]]
    }); 

    submit() {
      if (this.formularioContacto.valid)
        this.resultado = "Todos los datos son válidos";
      else
        this.resultado = "Hay datos inválidos en el formulario";
    }
  
}

