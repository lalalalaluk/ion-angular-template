import { Coin } from '../object/coin';
import { Player } from '../object/Player';



export class GameScene extends Phaser.Scene {
    private background: Phaser.GameObjects.Image;
    private arrowUp: Phaser.GameObjects.Image;
    private arrowDown: Phaser.GameObjects.Image;
    private arrowLeft: Phaser.GameObjects.Image;
    private arrowRight: Phaser.GameObjects.Image;
    private coin: Coin;
    private coinsCollectedText: Phaser.GameObjects.Text;
    private collectedCoins: number;
    private player: Player;

    private text: any;
    private pointer: any;

    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload(): void {
        this.load.image('background', './assets/coin-chaser/background.png');
        this.load.image('player', './assets/coin-chaser/player.png');
        this.load.image('coin', './assets/coin-chaser/coin.png');

        this.load.image('arrowUp', './assets/gameicons/PNG/Black/1x/arrowUp.png');
        this.load.image('arrowDown', './assets/gameicons/PNG/Black/1x/arrowDown.png');
        this.load.image('arrowLeft', './assets/gameicons/PNG/Black/1x/arrowLeft.png');
        this.load.image('arrowRight', './assets/gameicons/PNG/Black/1x/arrowRight.png');

    }

    init(): void {
        this.collectedCoins = 0;
    }

    create(): void {
        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);

        this.coin = new Coin({
            scene: this,
            x: Phaser.Math.Between(100, 700),
            y: Phaser.Math.Between(100, 500),
            key: 'coin',
        });

        this.player = new Player({
            scene: this,
            x: this.sys.canvas.width / 2,
            y: this.sys.canvas.height / 2,
            key: 'player',
        });

        this.arrowUp = this.add.image(640, 430, 'arrowUp').setInteractive();
        this.arrowDown = this.add.image(640, 530, 'arrowDown').setInteractive();
        this.arrowLeft = this.add.image(580, 480, 'arrowLeft').setInteractive();
        this.arrowRight = this.add.image(700, 480, 'arrowRight').setInteractive();
        this.arrowUp.on('pointerdown', () => {
            this.player.way = 'up';
        });
        this.arrowUp.on('pointerup', () => {
            this.player.way = 'stop';
        });
        this.arrowDown.on('pointerdown', () => {
            this.player.way = 'down';
        });
        this.arrowDown.on('pointerup', () => {
            this.player.way = 'stop';
        });
        this.arrowLeft.on('pointerdown', () => {
            this.player.way = 'left';
        });
        this.arrowLeft.on('pointerup', () => {
            this.player.way = 'stop';
        });
        this.arrowRight.on('pointerdown', () => {
            this.player.way = 'right';
        });
        this.arrowRight.on('pointerup', () => {
            this.player.way = 'stop';
        });

        // create texts
        this.coinsCollectedText = this.add.text(
            this.sys.canvas.width / 2,
            this.sys.canvas.height - 50,
            this.collectedCoins + '',
            {
                fontFamily: 'Connection',
                fontSize: 38,
                stroke: '#fff',
                strokeThickness: 6,
                fill: '#000000'
            }
        );

        this.pointer = this.input.activePointer;
        this.text = this.add.text(10, 10, 'Move the mouse', { font: '16px Courier', fill: '#00ff00' });

    }

    update(): void {
        this.player.update();
        this.coin.update();

        // do the collision check
        if (
            Phaser.Geom.Intersects.RectangleToRectangle(
                this.player.getBounds(),
                this.coin.getBounds()
            )
        ) {
            this.updateCoinStatus();
        }

        this.text.setText([
            'x: ' + this.pointer.x,
            'y: ' + this.pointer.y,
            'mid x: ' + this.pointer.midPoint.x,
            'mid y: ' + this.pointer.midPoint.y,
            'velocity x: ' + this.pointer.velocity.x,
            'velocity y: ' + this.pointer.velocity.y,
            'movementX: ' + this.pointer.movementX,
            'movementY: ' + this.pointer.movementY
        ]);
    }

    private updateCoinStatus(): void {
        this.collectedCoins++;
        this.coinsCollectedText.setText(this.collectedCoins + '');
        this.coin.changePosition();
    }
}
