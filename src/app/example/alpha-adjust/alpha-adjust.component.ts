import { Component, OnInit } from '@angular/core';
import { GameScene } from './scene/GameScene';

@Component({
  selector: 'app-alpha-adjust',
  templateUrl: './alpha-adjust.component.html',
  styleUrls: ['./alpha-adjust.component.css']
})
export class AlphaAdjustComponent implements OnInit {

  game: Phaser.Types.Core.GameConfig = {
    width: 800,
    height: 600,
    version: '1.0',
    type: Phaser.AUTO,
    scene: GameScene,
    render: { pixelArt: true, antialias: false },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
  };

  constructor() { }

  ngOnInit() {
    console.log('game', this.game);
  }
}
