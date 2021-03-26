import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MLApiService } from 'src/app/Services/mlapi.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  item: any;
  flag: boolean = false;
  seller: any;
  shipping: boolean[] = [];
  discount: number;
  description: string = '';
  constructor(
    private router: ActivatedRoute,
    private mlService: MLApiService,
    private navrouter: Router
  ) {
    this.mlService
      .getItemById(this.router.snapshot.paramMap.get('id'))
      .subscribe((data) => {
        this.item = data[0]['body'];
        let prod = (this.item.price * 100) / this.item.original_price;
        if (this.item.original_price) {
          this.discount = Math.round(Math.abs(prod - 100));
        }
        this.getSeller();
        this.getDetails();
      });
  }

  ngOnInit(): void {}
  search(event: any) {
    if (event !== '') {
      this.navrouter.navigate(['/search'], { queryParams: { search: event } });
    }
  }
  getSeller() {
    this.shipping.push(this.item['shipping']['free_shipping']);
    const element = this.item['seller_id'];
    this.mlService.getSeller(element).subscribe((data) => {
      this.seller = data;
      this.flag = true;
    });
  }
  getDetails() {
    this.mlService.getDescription(this.item['id']).subscribe((data) => {
      this.description = data.plain_text;
    });
  }
}
