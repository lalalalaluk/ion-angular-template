
export class BootScene extends Phaser.Scene {
    helloWorld: Phaser.GameObjects.Text;
    img1: Phaser.GameObjects.Image;
    sprite1: Phaser.GameObjects.Sprite;

    preload() {
        this.load.image('img1', 'assets/boy/Idle (1).png');

        this.load.image('dead0', '/assets/boy/Dead (1).png');
        this.load.image('dead1', '/assets/boy/Dead (2).png');
        this.load.image('dead2', '/assets/boy/Dead (3).png');
        this.load.image('dead3', '/assets/boy/Dead (4).png');
        this.load.image('dead4', '/assets/boy/Dead (5).png');
        this.load.image('dead5', '/assets/boy/Dead (6).png');
        this.load.image('dead6', '/assets/boy/Dead (7).png');
        this.load.image('dead7', '/assets/boy/Dead (8).png');
        this.load.image('dead8', '/assets/boy/Dead (9).png');
        this.load.image('dead9', '/assets/boy/Dead (10).png');
        this.load.image('dead10', '/assets/boy/Dead (11).png');
        this.load.image('dead11', '/assets/boy/Dead (12).png');
        this.load.image('dead12', '/assets/boy/Dead (13).png');
        this.load.image('dead13', '/assets/boy/Dead (14).png');
        this.load.image('dead14', '/assets/boy/Dead (15).png');

        this.load.spritesheet('jump_sheet', 'assets/boy/jump_spritesheet.png', { frameWidth: 616, frameHeight: 566, endFrame: 14 });
    }

    create() {
        // image 跟 sprite 最大的差別就是 sprite 可以sprite sheet

        this.img1 = this.add.image(300, 300, 'img1');
        this.sprite1 = this.add.sprite(600, 300, 'img1');

        // sprite animation by imgs
        this.anims.create({
            key: 'dead',
            frames: [
                { key: 'dead0', frame: 0 },
                { key: 'dead1', frame: 1 },
                { key: 'dead2', frame: 2 },
                { key: 'dead3', frame: 3 },
                { key: 'dead4', frame: 4 },
                { key: 'dead5', frame: 5 },
                { key: 'dead6', frame: 6 },
                { key: 'dead7', frame: 7 },
                { key: 'dead8', frame: 8 },
                { key: 'dead9', frame: 9 },
                { key: 'dead10', frame: 10 },
                { key: 'dead11', frame: 11 },
                { key: 'dead12', frame: 12 },
                { key: 'dead13', frame: 13 },
                { key: 'dead14', frame: 14 },
            ],
            frameRate: 12,
            repeat: -1
        });
        this.add.sprite(900, 300, 'dead0').play('dead');

        const config = {
            key: 'jump',
            frames: this.anims.generateFrameNumbers('jump_sheet', { start: 0, end: 14, first: 0 }),
            frameRate: 12,
            repeat: -1
        };
        this.anims.create(config);
        const jump = this.add.sprite(1500, 300, 'jump_sheet');
        jump.anims.play('jump', false);

    }
}
