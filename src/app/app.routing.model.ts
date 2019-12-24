import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicWorldComponent } from './basic/basic-world/basic-world.component';
import { BasicSpriteComponent } from './basic/basic-sprite/basic-sprite.component';
import { BasicFixedSizeComponent } from './basic/basic-fixed-size/basic-fixed-size.component';
import { AlphaAdjustComponent } from './example/alpha-adjust/alpha-adjust.component';
import { CoinChaserComponent } from './example/coin-chaser/coin-chaser.component';
import { FlappyBirdComponent } from './example/flappy-bird/flappy-bird.component';

const routes: Routes = [
    { path: '', redirectTo: 'FlappyBird', pathMatch: 'full' },
    { path: 'BasicWorld', component: BasicWorldComponent },
    { path: 'BasicSprite', component: BasicSpriteComponent },
    { path: 'BasicFixedSize', component: BasicFixedSizeComponent },
    { path: 'AlphaAdjust', component: AlphaAdjustComponent },
    { path: 'CoinChaser', component: CoinChaserComponent },
    { path: 'FlappyBird', component: FlappyBirdComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
