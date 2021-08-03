import { PersonService } from 'src/app/person.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-update1',
  templateUrl: './update1.component.html',
  styleUrls: ['./update1.component.css']
})
export class Update1Component implements OnInit {


  id!: number;
  name!: string;
  email: string = ''
  obj: Person = new Person();


  constructor(private service: PersonService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    this.service.readOne(this.id)
                .subscribe(data =>{
                  console.log('veio', data)
                  this.obj = data
                }, error => console.error(error))
  }
  update(id: number, person: Person){
    console.log(person)
  }
  onSubmit(){
    this.update(this.id, this.obj)
  }
  goToList(){
    this.router.navigate(['/list'])
  }

}
