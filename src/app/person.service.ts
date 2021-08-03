import { Person } from './model/person';
import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  //api_url: string = 'http://localhost:8080/person'

  headers: any = new Headers({'Content-Type' : 'application/json; charset=utf-8'});
  options: any = { headers: this.headers}

  api_url_test: string = 'https://httpbin.org/post'
  api_url: string = 'https://app-bk.herokuapp.com/person'


  constructor(private http: HttpClient) { }

  //GET ALL
  read (){
    return this.http.get(this.api_url)
  }
  //GET ID
  readOne (id: number): Observable<Person>{
    return this.http.get<Person>(`${this.api_url}/${id}`)

  }
  //POST
  create(person: Person){
    return this.http.post(this.api_url, person, this.options)
                    .subscribe(data => console.log(data))
  }
  //Fake POST
  post_test(person: Person){
     return this.http.post(`${this.api_url}`, person, this.options)
                     .subscribe(data => console.log(data));
  }
  //PUT
  update(id: number, person: any){
    //console.log(person)
    return this.http.put(`${this.api_url}/${id}`, person)
  }
  //DELETE
  delete(id: number){
    return this.http.delete(`${this.api_url}/${id}`)
                    .subscribe(data => console.log('Deleted', data))
  }
}
