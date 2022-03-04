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
    const interval = setInterval(() => this.start(), 3000)
    setTimeout(() => clearInterval(interval), 30000)
  }

  start() {
    const randNumber = this.getRandomNumber();
    this.convertFromDecToBin(randNumber);
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
    console.log(this.circles)

    return this.circles 
}


// Ponovo sam koristio funkciju koju smo prepravljali jer ova ne vraca 8-bitni broj
// Verovatno sam totalno promasio pristup, jer ne mogu da inicijalizujem pocetnu zutu boju semafora

//  convertFromDecToBin(number){
//   var binaryNumber = [];
  

//   for (let i = number; i > 0; i--) {
//     binaryNumber.push(number % 2);
//     number = Math.floor(number / 2)
//   }

//   if (binaryNumber.length < this.circles.length) {
//     for (let i = this.circles.length - binaryNumber.length; i < this.circles.length; i++) {
//       binaryNumber.push(0);
//   }
// }
//   this.circles = binaryNumber;
// console.log(this.circles);
//   return this.circles
// }
 
}




