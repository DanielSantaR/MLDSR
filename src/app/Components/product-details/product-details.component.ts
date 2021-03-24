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
  constructor(private router: ActivatedRoute, private mlService: MLApiService, private navrouter: Router) {
    this.mlService
      .getItemById(this.router.snapshot.paramMap.get('id'))
      .subscribe((data) => {
        this.item = data[0]['body'];
        console.log(this.item);
        this.flag = true;
      });
  }

  ngOnInit(): void {}
  search(event: any) {
    if (event !== '') {
      this.navrouter.navigate(['/search'], {queryParams: {search: event }});
    }
  }
}
