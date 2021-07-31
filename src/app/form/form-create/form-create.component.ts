import { PersonService } from './../../person.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styles: ['*{ font-size: 1.1em; } h1{font-size: 2em; padding-bottom: 30px;}']
})
export class FormCreateComponent implements OnInit {

  title: string = 'Create Person';

  url: string = 'https://httpbin.org/post'
  formulario!: FormGroup;

  person: any;
  name: string = '';
  email: string = '';
  password!: string;
  cpf: string = '000000000';
  telefone: string = '99-90000-0000';

  constructor(
             private builder: FormBuilder,
             private service: PersonService) {
             }

  onLoad(): any { console.log('loading...')}
  ngOnInit(): void {
    this.formulario = this.builder.group({
      name: [this.name],
      email: [this.email],
      telefone: [this.telefone],
      cpf: [this.cpf],
      user: this.builder.group({
        name: [this.name],
        username: [this.email],
        password: [null]
      })
    })
  }
  onSubmit(){
    this.person = this.formulario.value
    this.service.create(this.person)

  }
}
