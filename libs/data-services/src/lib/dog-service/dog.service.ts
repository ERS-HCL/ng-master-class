import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface BreedParams {
  breed: string;
  subBreed: string;
}

@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor(private http: HttpClient) {}
  BASE_URL = 'https://dog.ceo/api';

  public getBreeds() {
    return this.http.get(this.BASE_URL + '/breeds/list/all');
  }

  public getBreedImagesByType(type: string) {
    return this.http.get(this.BASE_URL + '/breed/' + type + '/images');
  }

  public getSubBreedImagesByType(params: BreedParams) {
    return this.http.get(
      this.BASE_URL +
        '/breed/' +
        params.breed +
        '/' +
        params.subBreed +
        '/images'
    );
  }
}
