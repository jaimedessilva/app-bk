import { Person } from './../../model/person';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-list-init',
  templateUrl: './list-init.component.html',
  styles: ['*{font-size: 1.1em; }']
})
export class ListInitComponent implements OnInit {

  listPerson: any = []

  constructor(private service: PersonService, private router: Router) { }

  edit(person: Person) {
    this.service.update(person)
  }

  delete(id: number) {
    this.service.delete(id)
  }

  ngOnInit(): void {
    this.service.read()
              .subscribe(data => this.listPerson = data)
  }
}
