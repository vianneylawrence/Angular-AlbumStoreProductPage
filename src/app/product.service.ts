import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';


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
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      .map(response => response.json()<Album>);
  }

}
