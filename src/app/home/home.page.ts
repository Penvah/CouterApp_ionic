import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  TA=6;
  TB=3;
  num:number;
  constructor(private router:Router) {}
  
  press1() {
    console.log(this.TA -= 3)
   }
  
  press2() {
   console.log(this.TA += 3)
  }
  press3() {
    console.log(this.TA -= 2)
   }
  
  press4() {
   console.log(this.TA += 2)
  }
  press5() {
    console.log(this.TA -= 1)
   }
  
  press6() {
   console.log(this.TA += 1)
  }
  press7() {
    console.log(this.TA -= 3)
   }
  
  press8() {
   console.log(this.TB += 3)
  }
  press9() {
    console.log(this.TB -= 2)
   }
  
  press10() {
   console.log(this.TB += 2)
  }
  press11() {
    console.log(this.TB -= 1)
   }
  
  press12() {
   console.log(this.TB += 1)
  }
  
  reset() {
    console.log(this.TA =0)
    console.log(this.TB =0)
    this.router.navigateByUrl('/home')
  }
  }