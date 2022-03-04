import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SemaphoreService {

  constructor(private http: HttpClient) {}

  getRandomNumber(){
   return this.http.get('https://www.random.org/integers/?num=1&min=0&max=255&col=1&base=10&format=plain&rnd=new')
  }
  
}


