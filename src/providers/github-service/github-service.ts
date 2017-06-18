import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubService {

    constructor(/*public http: Http*/) {
        console.log('Hello GithubServiceProvider Provider');
    }

    mockGetUserInformation(username: string): Observable<User> {
        return Observable.of(USER_LIST.filter(user => user.name == username)[0]);
    }
}
