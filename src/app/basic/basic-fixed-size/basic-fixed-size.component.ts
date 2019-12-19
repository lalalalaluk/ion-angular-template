import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  helloWorld: Phaser.GameObjects.Text;



  create() {

    this.helloWorld = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      'Hello World', {
      fontFamily: 'Connection',
      fontSize: 50,
      stroke: '#000000',
      strokeThickness: 8,
      fill: '#ffffff'
    }
    ).setInteractive();
    this.helloWorld.setOrigin(0.5, 0.5);
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
