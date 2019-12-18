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
    width: '100vw',
    height: '100vw',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: BootScene,
  };

  constructor() {
    document.addEventListener('keyup', () => {
      alert('keys pressed');
    });
  }

  ngOnInit() {
    console.log('game', this.game);
  }
}
