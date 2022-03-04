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
  
  constructor() {}

  ngOnInit() {
    this.yellow();
    const interval = setInterval(() => this.start(), 3000)
    setTimeout(() => clearInterval(interval), 10000)
  }

  start() {
    const randNumber = this.getRandomNumber();
    this.convertFromDecToBin(randNumber);
  }
  
  getRandomNumber() {
     this.randomNumber = Math.floor(Math.random() * 256) + 1;
      return this.randomNumber;
  }

// Znao sam da ovo nece da radi ali hajde da komitujem bilo sta
  yellow(){
    this.circles.forEach(circle => {
    return circle === 'yellow';
    })
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

// convertFromDecToBin(number){
  //     var binaryNumber = [];
    
  //     for (let i = number; i > 0; i--) {
  //       binaryNumber.push(number % 2);
  //       number = Math.floor(number / 2)
  //     }
  //   if (binaryNumber.length < this.circles.length) {
  //     for (let i = this.circles.length - binaryNumber.length; i < this.circles.length; i++) {
  //       binaryNumber.push(0);
  //     }
  //   }
  
     
  
  //     return binaryNumber;
  // }
}




