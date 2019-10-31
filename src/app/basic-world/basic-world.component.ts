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
    );
  }
}

interface GameInstance extends Phaser.Types.Core.GameConfig {
  instance: Phaser.Game;
}

@Component({
  selector: 'app-basic-world',
  templateUrl: './basic-world.component.html',
  styleUrls: ['./basic-world.component.css']
})
export class BasicWorldComponent implements OnInit {
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
    console.log('game', this.game)
  }

}
