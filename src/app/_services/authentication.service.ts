import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentUserSubject: BehaviorSubject<User|null>;
    public currentUser: Observable<User|null>;

    constructor(private http: HttpClient, private router: Router) {
        let currentUserLS = localStorage.getItem('currentUser');
        let userDetails = currentUserLS ? JSON.parse(currentUserLS) : null;
        this.currentUserSubject = new BehaviorSubject<User|null>(userDetails);
        //this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User|null {
        return this.currentUserSubject.value;
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    login(email:string|null|undefined, password:string|null|undefined) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { email, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
    }
}