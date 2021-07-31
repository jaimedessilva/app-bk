import { Person } from './model/person';
import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  //api_url: string = 'https://app-bk.herokuapp.com/person'
  api_url: string = 'http://localhost:8080/person'
  api_url_test: string = 'https://httpbin.org/post'
  headers: any = new Headers({'Content-Type' : 'application/json; charset=utf-8'});
  options: any = { headers: this.headers}

  constructor(
    private http: HttpClient) { }

  //GET ALL
  read (){
    return this.http.get(this.api_url)
  }
  //POST
  create(person: Person){
    return this.http.post(this.api_url, person, this.options)
                    .subscribe(data => console.log(data))
  }
  //HttpBin
  post_test(person: Person){
     return this.http.post(this.api_url_test, person, this.options)
                     .subscribe(data => console.log(data));
  }
  //PUT
  update(person: Person){
    console.log(person)
    //return this.http.put(this.api_url, person)
  }
  //DELETE
  delete(id: number){
    return this.http.delete(this.api_url)
  }
}
