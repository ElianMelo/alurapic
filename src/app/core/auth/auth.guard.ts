import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../user/user.service";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router) {
    }

    canActivate(
        router: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(!this.userService.isLogged()) {
            this.router.navigate([''], {
                queryParams: {
                    fromUrl: state.url
                }
            });
            return false;
        }
        return true;
    }
}