import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
declare var $: any;
export class AppComponent  {
  name = 'Angular';


// $('#carousel').forEach(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));
  
//   for (var i=0;i<2;i++) {
//     next=next.next();
//     if (!next.length) {
//     	next = $(this).siblings(':first');
//   	}
    
//     next.children(':first-child').clone().appendTo($(this));
//   }
// });
}
