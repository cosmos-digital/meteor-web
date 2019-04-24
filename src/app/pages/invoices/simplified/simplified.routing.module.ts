import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimplifiedComponent } from './simplified.component';
import { SimplifiedCreateComponent } from './simplified-create.component';

const routes: Routes = [{
    path: '',
    component: SimplifiedComponent,
},
{
    path: 'create',
    component: SimplifiedCreateComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SimplifiedRoutingModule { }