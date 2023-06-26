import { Component,Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  bookTitle :string='';
  bookDesc :string='';
  bookId:number=0;

  @Output() bookadded = new EventEmitter<{title:string,desc:string,id:number}>();


  submitBook(){
    
    const book ={title:this.bookTitle,desc:this.bookDesc,id:this.bookId}
    this.bookadded.emit(book);

    this.bookTitle="";
    this.bookDesc="";
  }


}
