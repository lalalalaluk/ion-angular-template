import { Component, OnInit } from '@angular/core';
import { GameScene } from './scene/game-scene';

@Component({
  selector: 'app-coin-chaser',
  templateUrl: './coin-chaser.component.html',
  styleUrls: ['./coin-chaser.component.css']
})
export class CoinChaserComponent implements OnInit {
  game: Phaser.Types.Core.GameConfig = {
    width: 768,
    height: 576,
    type: Phaser.AUTO,
    scene: GameScene,
    render: { pixelArt: true, antialias: false },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    input: {
      keyboard: true
    },
    backgroundColor: '#3A99D9',

  };

  constructor() { }

  ngOnInit() {
  }

}
