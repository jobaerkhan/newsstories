import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend  } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { User } from '../models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';



@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  private http: HttpClient;

  constructor (
    private apiService: ApiService,
    //private http: HttpClient,
    handler: HttpBackend,
    private tokenService: TokenService
  ) 
  {
    this.http = new HttpClient(handler);
  }

  registerUser(user: User) {
    const body: User = {
      username: user.username,
      password: user.password,
      email: user.email,
      fullname: user.fullname,
      token: ''
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(`${environment.api_url}`+ '/User/Register', body ,{headers : reqHeader});
  }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(`${environment.token_url}` + '/token', data, { headers: reqHeader });
  }

  getUserClaims(){
     this.apiService.get('/GetUserClaims').subscribe((data: any) => {
      //this.userClaims = data;
      this.setAuth(data);
    });
   }

  populate() {
    // If token detected, attempt to get & store user's info
    //this.purgeAuth();
    if (this.tokenService.getToken()) {
      this.apiService.get('/GetUserClaims')
      .subscribe((data: any) => {
        //this.userClaims = data;
        this.setAuth(data);
      });
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save token sent from server in localstorage
    //this.tokenService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove token from localstorage
    this.tokenService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type, credentials): Observable<any> {
    
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .pipe(map(
      data => {
        this.setAuth(data.user);
        return data;
      }
    ));
    // //const route = (type === 'login') ? '/login' : '';
    // return this.http.post('http://localhost:57915/login', 'username=jobaer&password=hello&grant_type=password');
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
    .put('/user', { user })
    .pipe(map(data => {
      this.currentUserSubject.next(data.user);
      return data.user;
    }));
  }

}
