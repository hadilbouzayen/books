import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent {
  bookId: number = 0;
  bookName: string='';
  bookDescription: string='';
  addedBooks: ({ title: string, desc: string, id: number } | null)[] = [];

  constructor(private ActivatedRoute: ActivatedRoute , private router: Router) {}
    

  ngOnInit() {
  
    console.log(history.state)

    this.ActivatedRoute.params.subscribe(params => {
      this.bookId = +params['id']; // Get the bookId from the route parameters
      this.loadBookDetails();
    });


  }
  loadBookDetails() {

    this.bookName = history.state.name; 
    this.bookDescription = history.state.desc; 
  }
}


    // const navigation = this.router.getCurrentNavigation();
    //   if (navigation?.extras?.state?.['addedBooks']) {
    //     this.addedBooks = navigation.extras.state['addedBooks'];
    //   } else {
    //     this.addedBooks = [];
    //     console.log("wooooooooooooooooohh 3liya woooh")
    //   }


