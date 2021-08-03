import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-list-init',
  templateUrl: './list-init.component.html',
  styles: ['*{font-size: 1.1em;}']
})
export class ListInitComponent implements OnInit {

  listPerson: any = []

  constructor(private service: PersonService,
              private router: Router) { }

  ngOnInit(): void {
    this.service.read()
              .subscribe(data => this.listPerson = data)
  }

  detail(id: number){
    this.service.readOne(id)
  }

  //Edit Form
  edit(id: number) {
    //this.service.update(person)
    this.router.navigate(['edit/',id])
  }

  delete(id: number) {
    this.service.delete(id)
  }

}
