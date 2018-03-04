import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import {MenuComponent} from './menu/menu.component';
import {FormComponent} from './form/form.component';


const APP_ROUTES:Routes = [
    { 
      path: '', 
      component: MenuComponent,
      children: [
        {
          path: '', 
          component: FormComponent
        }
      ] 
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {}