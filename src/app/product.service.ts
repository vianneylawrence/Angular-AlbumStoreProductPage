import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";
  // public get albumUrl() {
  //   return this._albumUrl;
  // }
  // public set albumUrl(value) {
  //   this._albumUrl = value;
  // }

  constructor(private _http: Http) {

  }
  getAlbum(id: number) {
    return this._http.get(this._albumUrl)
      .map(response => response.json());

  }

}
