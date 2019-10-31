import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicWorldComponent } from './basic-world/basic-world.component';
import { BasicSpriteComponent } from './basic-sprite/basic-sprite.component';


const routes: Routes = [
    { path: '', redirectTo: 'BasicWorld', pathMatch: 'full' },
    { path: 'BasicWorld', component: BasicWorldComponent },
    { path: 'BasicSprite', component: BasicSpriteComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
