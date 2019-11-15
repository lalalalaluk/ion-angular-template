import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  helloWorld: Phaser.GameObjects.Text;

  create() {
    this.helloWorld = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      'Hello World', {
      font: '40px Arial',
      fill: '#ffffff'
    }
    ).setInteractive();
    this.helloWorld.on('pointerup', () => {
      this.scale.startFullscreen();
    }, this);
  }

}


@Component({
  selector: 'app-basic-fixed-size',
  templateUrl: './basic-fixed-size.component.html',
  styleUrls: ['./basic-fixed-size.component.css']
})
export class BasicFixedSizeComponent implements OnInit {

  game: Phaser.Types.Core.GameConfig = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    scene: BootScene,
  };

  constructor() { }

  ngOnInit() {
    console.log('game', this.game);
  }

}
