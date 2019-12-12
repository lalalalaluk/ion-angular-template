import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { BootScene } from './scenes/BootScene';


@Component({
  selector: 'app-basic-sprite',
  templateUrl: './basic-sprite.component.html',
  styleUrls: ['./basic-sprite.component.css']
})
export class BasicSpriteComponent implements OnInit {

  game: Phaser.Types.Core.GameConfig = {
    width: '99%',
    height: '99%',
    type: Phaser.AUTO,
    scene: BootScene,
  };

  constructor() { }

  ngOnInit() {
    console.log('game', this.game);
  }

}
