/**
 *
 * Created by PhpStorm.
 * @author lait <lait233@foxmail.com>
 * Date: 2017-08-23
 * Time: 18:37
 */
import { CanActivate } from "@angular/router";

export class LoginGuard implements CanActivate {
    canActivate() {
        let logedIn: boolean = Math.random() < 0.5;
        if ( !logedIn ) {
            console.log('用户未登录');
        }
        return logedIn;
    }

}