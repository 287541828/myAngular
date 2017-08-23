import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component( {
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
} )
export class ProductComponent implements OnInit {

    public productId: number;

    constructor( private rooterInfo: ActivatedRoute ) { }

    ngOnInit() {
        this.rooterInfo.params.subscribe( ( params: Params ) => this.productId = params["id"] );
        // this.productId = this.rooterInfo.snapshot.params["id"];
    }

}
