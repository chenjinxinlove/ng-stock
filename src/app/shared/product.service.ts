import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    new Product(1, 'ss1', 1.99, 3.5, 'ssssss', ['ddd', 'sss']),
    new Product(2, 'ss2', 1.99, 2.5, 'ssssss', ['ddd', 'sss']),
    new Product(3, 'ss3', 1.99, 4.5, 'ssssss', ['ddd', 'sss']),
    new Product(4, 'ss4', 1.99, 1.5, 'ssssss', ['ddd', 'sss']),
    new Product(5, 'ss5', 1.99, 2.5, 'ssssss', ['ddd', 'sss']),
    new Product(6, 'ss6', 1.99, 3.5, 'ssssss', ['ddd', 'sss']),
  ]

  private comments: Comment[] = [
    new Comment(1, 1, '2019-9-10', 4, 'dddd'),
    new Comment(2, 1, '2019-9-10', 4, 'dddd'),
    new Comment(3, 1, '2019-9-10', 4, 'dddd'),
    new Comment(4, 2, '2019-9-10', 4, 'dddd'),
    new Comment(5, 3, '2019-9-10', 4, 'dddd'),
  ]
  constructor(private http: Http) {}
  getProducts(): Observable<Product[]> {
    return this.http.get('/api/priducts').pipe(map(res => res.json()));
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get(`/api/priducts/${id}`).pipe(map(res => res.json()));
  }

  getCommentsForProductIds(id: number): Observable<Comment>[] {
    return this.http.get(`/api/comment/${id}`).pipe(map(res => res.json()));
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categoties: string[]
  ) { }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public rating: number,
    public content: string
  ) { }
}
