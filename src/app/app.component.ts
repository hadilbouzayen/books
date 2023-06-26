import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book2';
  addedBooks: { title: string, desc: string , id: number } [] = 
  [
    { title: "Book 1", desc: "Description of Book 1", id: 1 },
    { title: "Book 2", desc: "Description of Book 2", id: 2 }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        if (this.isBookDetailsRoute()) {
          
          const bookId = this.getBookIdFromRoute(); // Get the bookId from the route parameters
          this.router.navigate(['book', bookId], { state: { addedBooks: this.addedBooks } });
        
      
        }
      }
    });
  }



  pushBooks(book: { title: string, desc: string }) {
    const newBook = { title: book.title, desc: book.desc, id: this.addedBooks.length + 1 };
    
    this.addedBooks.push(newBook);
  }

  isBookDetailsRoute(): boolean {
    return this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'book/:id';
  }
  private getBookIdFromRoute(): number {
    const bookIdParam = this.activatedRoute.snapshot.firstChild?.params['id'];
    return parseInt(bookIdParam, 10);
  }



}
