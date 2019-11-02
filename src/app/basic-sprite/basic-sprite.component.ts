import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { BootScene } from './scenes/BootScene';

interface GameInstance extends Phaser.Types.Core.GameConfig {
  instance: Phaser.Game;
}

@Component({
  selector: 'app-basic-sprite',
  templateUrl: './basic-sprite.component.html',
  styleUrls: ['./basic-sprite.component.css']
})
export class BasicSpriteComponent implements OnInit {
  reason = '';

  title = 'ion-angular';
  initialize = false;
  game: GameInstance = {
    width: '100%',
    height: '100%',
    type: Phaser.AUTO,
    scene: BootScene,
    instance: null
  };

  constructor() { }

  ngOnInit() {
    console.log('game', this.game);
  }

}
