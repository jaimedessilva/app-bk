import { PersonService } from './../../person.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';


@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styles: ['*{ font-size: 1.1em; } h1{font-size: 2em; padding-bottom: 30px;}']
})
export class FormCreateComponent implements OnInit {

  title: string = 'Create Person';

  url: string = 'https://httpbin.org/post'

  formulario!: FormGroup;

  p: any = {
   name: '',
   email: '',
   password: '',
   cpf: '000000000',
   telefone:'99-90000-0000'
  }

  constructor(
             private builder: FormBuilder,
             private service: PersonService,
             private router: Router) {}

  ngOnInit(): void {
    this.formulario = this.builder.group({
      name: [this.p.name],
      email: [this.p.email],
      telefone: [this.p.telefone],
      cpf: [this.p.cpf],
      user: this.builder.group({
        name: [this.p.name],
        username: [this.p.email],
        password: [null]
      })
    })
  }
  onSubmit(){
    let person = this.formulario.value
    this.save(person)
    this.router.navigate(['/list'])
  }
  save (person: Person){
    this.service.post_test(person)
  }
}
