import * as Phaser from 'phaser';

export class Bird extends Phaser.GameObjects.Image {
    private pressDown = false;
    private isDead: boolean;
    private isFlapping: boolean;
    public body!: Phaser.Physics.Arcade.Body;

    public getDead(): boolean {
        return this.isDead;
    }

    public setDead(dead: boolean): void {
        this.isDead = dead;
    }

    constructor(params) {
        super(params.scene, params.x, params.y, params.key);

        // image
        this.setScale(3);
        this.setOrigin(0, 0);

        // variables
        this.isDead = false;
        this.isFlapping = false;

        // physics
        this.scene.physics.world.enable(this);
        this.body.setGravityY(1000);
        this.body.setSize(17, 12);

        params.scene.input.on(
            'pointerdown',
            (pointer) => {
                this.pressDown = true;
            },
            this
        );

        params.scene.input.on(
            'pointerup',
            (pointer) => {
                this.pressDown = false;
            },
            this
        );

        this.scene.add.existing(this);
    }

    update(): void {
        if (this.pressDown && !this.isFlapping) {
            this.isFlapping = false;
            this.body.setVelocityY(-350);
            this.scene.tweens.add({
                targets: this,
                props: { angle: -20 },
                duration: 150,
                ease: 'Power0'
            });
        } else if (!this.pressDown && this.isFlapping) {
            this.isFlapping = false;
        }

        // check if off the screen
        if (this.y + this.height > this.scene.sys.canvas.height) {
            this.isDead = true;
        }
    }
}
