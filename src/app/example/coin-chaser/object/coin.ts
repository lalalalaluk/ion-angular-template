import * as Phaser from 'phaser';

export class Coin extends Phaser.GameObjects.Image {
    private centerOfScreen: number;
    private changePositionTimer: Phaser.Time.TimerEvent;
    private lastPosition: string;

    constructor(params) {
        super(params.scene, params.x, params.y, params.key);

        this.initVariables();
        this.initImage();
        this.initEvents();

        this.scene.add.existing(this);
    }

    private initVariables(): void {
        this.centerOfScreen = this.scene.sys.canvas.width / 2;
        this.changePositionTimer = null;
        this.setFieldSide();
    }

    private initImage(): void {
        this.setOrigin(0.5, 0.5);
    }

    private initEvents(): void {
        this.changePositionTimer = this.scene.time.addEvent({
            delay: 2000,
            callback: this.changePosition,
            callbackScope: this,
            loop: true
        });
    }

    public changePosition(): void {
        this.setNewPosition();
        this.setFieldSide();

        this.changePositionTimer.reset({
            delay: 2000,
            callback: this.changePosition,
            callbackScope: this,
            loop: true
        });
    }

    private setNewPosition(): void {
        if (this.lastPosition === 'right') {
            this.x = Phaser.Math.Between(100, this.centerOfScreen);
        } else {
            this.x = Phaser.Math.Between(385, 700);
        }
        this.y = Phaser.Math.Between(100, 500);
    }


    private setFieldSide(): void {
        if (this.x <= this.centerOfScreen) {
            this.lastPosition = 'left';
        } else {
            this.lastPosition = 'right';
        }
    }
}
