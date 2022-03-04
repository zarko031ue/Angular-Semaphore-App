import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaphore',
  templateUrl: './semaphore.component.html',
  styleUrls: ['./semaphore.component.css'],
})

export class SemaphoreComponent implements OnInit {
  randomNumber: number;
  circles = [];
  circlesCount = 8; 
  status = false;

  constructor() {}

  ngOnInit() {
    const interval = setInterval(() => this.start(), 2000)
    setInterval(() => this.status = false, 4000)
    setTimeout(() => clearInterval(interval), 20000)
  }

  start() {
    const randNumber = this.getRandomNumber();
    this.convertFromDecToBin(randNumber);
    this.status = true;
  }
   
  getRandomNumber() {
     this.randomNumber = Math.floor(Math.random() * 256) + 1;
     return this.randomNumber;
  }

  convertFromDecToBin(number){
    let binaryNumber = [];
    let carry;

    let binaryPosition = 0;

    while(number > 0){
        carry = number % 2;
        number = Math.floor(number / 2)
        
        binaryNumber[binaryPosition++] = carry;
    }
      
    while (binaryPosition < this.circlesCount){
        binaryNumber[binaryPosition++] = 0;
    }
    
    this.circles = binaryNumber
   
    return this.circles 
}


}




