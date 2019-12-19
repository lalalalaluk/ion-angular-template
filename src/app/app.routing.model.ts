import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicWorldComponent } from './basic/basic-world/basic-world.component';
import { BasicSpriteComponent } from './basic/basic-sprite/basic-sprite.component';
import { BasicFixedSizeComponent } from './basic/basic-fixed-size/basic-fixed-size.component';
import { AlphaAdjustComponent } from './example/alpha-adjust/alpha-adjust.component';

const routes: Routes = [
    { path: '', redirectTo: 'AlphaAdjust', pathMatch: 'full' },
    { path: 'BasicWorld', component: BasicWorldComponent },
    { path: 'BasicSprite', component: BasicSpriteComponent },
    { path: 'BasicFixedSize', component: BasicFixedSizeComponent },
    { path: 'AlphaAdjust', component: AlphaAdjustComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
