import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';

import { Dog } from '../../../models/dog.interface';

@Injectable({
    providedIn: 'root'
})
export class DogService {

    private apiUrl = 'http://localhost:3000/api/dogs';

    constructor(
        private http: HttpClient,
    ) {}

    public getAllDogs(): Observable<Partial<Dog>[]> {
        return this.http.get<Partial<Dog>[]>(`${this.apiUrl}`);
    }

    public getDogDetails(breedKey: string): Observable<Dog> {
        return this.http.get<Dog>(`${this.apiUrl}/${breedKey}`);
    }
}
