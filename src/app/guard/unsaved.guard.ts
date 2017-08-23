/**
 *
 * Created by PhpStorm.
 * @author lait <lait233@foxmail.com>
 * Date: 2017-08-23
 * Time: 19:30
 */
import { ProductComponent } from "../product/product.component";
import { CanDeactivate } from "@angular/router";

export class UnsavedGuard implements CanDeactivate<ProductComponent> {

    canDeactivate( component: ProductComponent ) {
        return window.confirm( "你还没有保存确定离开吗?" );
    }
}