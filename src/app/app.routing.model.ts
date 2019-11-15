import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicWorldComponent } from './basic-world/basic-world.component';
import { BasicSpriteComponent } from './basic-sprite/basic-sprite.component';
import { BasicFixedSizeComponent } from './basic-fixed-size/basic-fixed-size.component';


const routes: Routes = [
    { path: '', redirectTo: 'BasicWorld', pathMatch: 'full' },
    { path: 'BasicWorld', component: BasicWorldComponent },
    { path: 'BasicSprite', component: BasicSpriteComponent },
    { path: 'BasicFixedSize', component: BasicFixedSizeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
