import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminButtonDirectiveDirective } from './directives/admin-button-directive.directive';
import { AdminLoadingStyleDirectiveDirective } from './directives/admin-loading-style-directive.directive';
import { AdminPhotoStyleDirectiveDirective } from './directives/admin-photo-style-directive.directive';
import { AdminPromoImageDirective } from './directives/admin-promo-image.directive';
import { DeleteElementDivDirective } from './directives/delete-element-div.directive';
import { ShowDataDiveDirectiveDirective } from './directives/show-data-dive-directive.directive';


@NgModule({
  declarations: [
    AdminComponent,
    AdminButtonDirectiveDirective,
    AdminLoadingStyleDirectiveDirective,
    AdminPhotoStyleDirectiveDirective,
    AdminPromoImageDirective,
    DeleteElementDivDirective,
    ShowDataDiveDirectiveDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
