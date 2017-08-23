import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component( {
    selector: 'app-product-sell',
    templateUrl: './product-sell.component.html',
    styleUrls: ['./product-sell.component.css']
} )
export class ProductSellComponent implements OnInit {

    public sellId: number;

    constructor( private routerInfo: ActivatedRoute ) {
    }

    ngOnInit() {
        this.sellId = this.routerInfo.snapshot.params["id"];
    }

}
