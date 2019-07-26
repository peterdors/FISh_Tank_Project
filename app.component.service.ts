import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MainComponent, UserInfo } from './app.component';

Injectable();
export class MainComponentService {

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {}

}
