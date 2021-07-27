import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-list-init',
  templateUrl: './list-init.component.html',
  styleUrls: ['./list-init.component.css']
})
export class ListInitComponent implements OnInit {

  listPerson: any = []
  /* lista: any = [
        {name: "teste", email: "123"},
        {name: "teste", email: "123"},
        {name: "teste", email: "123"},
        {name: "teste", email: "123"},
        {name: "teste", email: "123"},
        {name: "teste", email: "123"}
  ] */


  constructor(private service: PersonService, private router: Router) { }
/*
  edit(item: any) {}

  delete(id: number) {} */

  ngOnInit(): void {
    //GetAll
    this.service.read()
              .subscribe(data => this.listPerson = data)
  }

}
