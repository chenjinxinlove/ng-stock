import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, 'ss1', 1.99, 3.5, 'ssssss', ['ddd', 'sss']),
      new Product(2, 'ss2', 1.99, 2.5, 'ssssss', ['ddd', 'sss']),
      new Product(3, 'ss3', 1.99, 4.5, 'ssssss', ['ddd', 'sss']),
      new Product(4, 'ss4', 1.99, 1.5, 'ssssss', ['ddd', 'sss']),
      new Product(5, 'ss5', 1.99, 2.5, 'ssssss', ['ddd', 'sss']),
      new Product(6, 'ss6', 1.99, 3.5, 'ssssss', ['ddd', 'sss']),
    ];
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
