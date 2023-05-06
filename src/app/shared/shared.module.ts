import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

import { ScrollspyDirective } from './scrollspy.directive';
import { FeatherModule } from 'angular-feather';

import { ClientsLogoComponent } from './clients-logo/clients-logo.component';
import { FeaturesComponent } from './features/features.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    ScrollspyDirective,
    ClientsLogoComponent,
    FeaturesComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FeatherModule,
    RouterModule
  ],
  exports: [ 
    ScrollspyDirective,
    ClientsLogoComponent, 
    FeaturesComponent, 
    BlogComponent, 
  ]
})

export class SharedModule { }
