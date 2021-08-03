import { PersonService } from './../../person.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {
  title: string = 'Update Person'

  id!: number;
  formulario!: FormGroup;
  submitted: any = false;
  obj: any = {
    name: '',
    email: '',
    }
    constructor(private service: PersonService,
                private route: ActivatedRoute,
                private router: Router,
                private builder: FormBuilder) {
                  //FormGroup init
                  this.formulario = this.builder.group({
                    name: [this.obj.name],
                    email: [this.obj.email],
                    telefone: [''],
                    cpf: [''],
                    user: this.builder.group({
                      name: [this.obj.name],
                      username: [this.obj.email],
                      password: [''] })
                      })
                }


  ngOnInit() {
    this.formulario;
    this.id = this.route.snapshot.params['id']
    this.service.readOne(this.id)

  }
  update(){
    this.goToList()
  }
  onSubmit(){

  }
  goToList(){
    this.router.navigate(['/list'])
  }

}
