import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  api_url: string = 'https://app-bk.herokuapp.com/person'

  constructor(private http: HttpClient) { }

  //Read All
  read (){
    return this.http.get(this.api_url)
  }
  create(){}

  update(){}

  delete(){}
}
