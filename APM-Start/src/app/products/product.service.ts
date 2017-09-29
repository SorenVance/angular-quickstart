
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {IProduct} from "./product";
import "rxjs/add/operator/catch";

@Injectable()
export class ProductService {
    private _productUrl: string = './api/products/products.json'
    constructor(private _http: HttpClient) {

    }
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
            .catch(ProductService.handleError)
    }

    private static handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}