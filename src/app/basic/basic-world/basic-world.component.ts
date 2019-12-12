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
  selector: 'app-basic-world',
  templateUrl: './basic-world.component.html',
  styleUrls: ['./basic-world.component.css']
})
export class BasicWorldComponent implements OnInit {

  game: Phaser.Types.Core.GameConfig = {
    width: '99vw',
    height: '99vw',

    type: Phaser.AUTO,
    scene: BootScene,
  };

  constructor() { }

  ngOnInit() {
    console.log('game', this.game);
  }
}
