import * as Phaser from 'phaser';

export class Player extends Phaser.GameObjects.Image {
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private walkingSpeed: number;
    public way: string;

    constructor(params) {
        super(params.scene, params.x, params.y, params.key);
        this.initVariables();
        this.initImage();
        this.initInput();
        this.scene.add.existing(this);
    }
    private initVariables(): void {
        this.walkingSpeed = 5;
    }
    private initImage(): void {
        this.setOrigin(0.5, 0.5);
    }
    private initInput(): void {
        this.cursors = this.scene.input.keyboard.createCursorKeys();
    }
    update(): void {
        this.handleInput();

    }
    private handleInput(): void {
        if (this.cursors.right.isDown || this.way === 'right') {
            this.x += this.walkingSpeed;
            this.setFlipX(false);
        } else if (this.cursors.left.isDown || this.way === 'left') {
            this.x -= this.walkingSpeed;
            this.setFlipX(true);
        } else if (this.cursors.up.isDown || this.way === 'up') {
            this.y -= this.walkingSpeed;
        } else if (this.cursors.down.isDown || this.way === 'down') {
            this.y += this.walkingSpeed;
        }
    }
}
