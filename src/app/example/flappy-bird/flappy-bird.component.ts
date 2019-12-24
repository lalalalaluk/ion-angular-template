import { Component, OnInit } from '@angular/core';
import { BootScene } from './scene/boot-scene';
import { MainMenuScene } from './scene/main-menu-scene';
import * as Phaser from 'phaser';

@Component({
  selector: 'app-flappy-bird',
  templateUrl: './flappy-bird.component.html',
  styleUrls: ['./flappy-bird.component.css']
})
export class FlappyBirdComponent implements OnInit {

  game: Phaser.Types.Core.GameConfig = {
    width: 390,
    height: 600,
    type: Phaser.AUTO,
    scene: [BootScene],
    render: { pixelArt: true, antialias: false },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    input: {
      keyboard: true
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 }
      }
    },
    backgroundColor: '#98d687',
  };

  constructor() { }

  ngOnInit() {
  }

}
