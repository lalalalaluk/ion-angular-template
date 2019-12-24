import * as Phaser from 'phaser';

export class MainMenuScene extends Phaser.Scene {
    private startKey: Phaser.Input.Keyboard.Key;
    private titleBitmapText: Phaser.GameObjects.BitmapText;
    private playBitmapText: Phaser.GameObjects.BitmapText;
    private background: Phaser.GameObjects.TileSprite;

    constructor() {
        super({
            key: 'mainMenuScene',
        });
    }

    init(): void {
        this.input.on(
            'pointerdown',
            (pointer) => {
                this.scene.start('GameScene');
            },
            this
        );
    }

    create(): void {
        this.background = this.add
            .tileSprite(0, 0, 390, 600, 'background')
            .setOrigin(0, 0);

        const title = this.add.text(
            this.sys.canvas.width / 2,
            this.sys.canvas.height / 2 - 100,
            'FLAPPY BIRD',
            {
                fontFamily: 'Connection',
                fontSize: 50,
                stroke: '#000000',
                strokeThickness: 8,
                fill: '#ffffff'
            }
        );
        title.setOrigin(0.5);

        const content = this.add.text(
            this.sys.canvas.width / 2,
            this.sys.canvas.height / 2,
            'Press To PLAY',
            {
                fontFamily: 'Connection',
                fontSize: 20,
                stroke: '#000000',
                strokeThickness: 5,
                fill: '#ffffff'
            }
        );
        content.setOrigin(0.5);
    }

    update(): void {
        this.background.tilePositionX += 1;
    }


}
