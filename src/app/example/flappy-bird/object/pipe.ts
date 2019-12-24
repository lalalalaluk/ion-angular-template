

export class Pipe extends Phaser.GameObjects.Image {
    public body!: Phaser.Physics.Arcade.Body;

    constructor(params) {
        super(params.scene, params.x, params.y, params.key, params.frame);

        // image
        this.setScale(3);
        this.setOrigin(0, 0);

        // physics
        this.scene.physics.world.enable(this);
        this.body.allowGravity = false;
        this.body.setVelocityX(-200);
        this.body.setSize(20, 20);

        this.scene.add.existing(this);
    }
}
