import * as Phaser from 'phaser';
import { animationConfig } from '../animation/animation';


export class BootScene extends Phaser.Scene {
    helloWorld: Phaser.GameObjects.Text;
    img1: Phaser.GameObjects.Image;
    sprite1: Phaser.GameObjects.Sprite;


    constructor() {
        super({
            key: 'BootScene'
        });
        // document.addEventListener('resize', () => {
        //     alert('iiiiiii')
        //     this.resize();
        // }, false);

        // window.focus();
        // this.resize();
        // window.addEventListener('resize', this.resize, false);
    }

    // resize() {
    //     alert('ini')
    //     const canvas = document.querySelector('canvas');
    //     const windowWidth = window.innerWidth;
    //     const windowHeight = window.innerHeight;
    //     const windowRatio = windowWidth / windowHeight;
    //     const gameRatio = this.sys.canvas.width / this.sys.canvas.height;;

    //     if (windowRatio < gameRatio) {
    //         canvas.style.width = windowWidth + 'px';
    //         canvas.style.height = (windowWidth / gameRatio) + 'px';
    //     } else {
    //         canvas.style.width = (windowHeight * gameRatio) + 'px';
    //         canvas.style.height = windowHeight + 'px';
    //     }
    // }

    preload() {

        this.load.image('img1', 'assets/boy/Idle (1).png');

        this.load.image('dead0', 'assets/boy/dead01.png');
        this.load.image('dead1', 'assets/boy/dead02.png');
        this.load.image('dead2', 'assets/boy/dead03.png');
        this.load.image('dead3', 'assets/boy/dead04.png');
        this.load.image('dead4', 'assets/boy/dead05.png');
        this.load.image('dead5', 'assets/boy/dead06.png');
        this.load.image('dead6', 'assets/boy/dead07.png');
        this.load.image('dead7', 'assets/boy/dead08.png');
        this.load.image('dead8', 'assets/boy/dead09.png');
        this.load.image('dead9', 'assets/boy/dead10.png');
        this.load.image('dead10', 'assets/boy/dead11.png');
        this.load.image('dead11', 'assets/boy/dead12.png');
        this.load.image('dead12', 'assets/boy/dead13.png');
        this.load.image('dead13', 'assets/boy/dead14.png');
        this.load.image('dead14', 'assets/boy/dead15.png');

        this.load.spritesheet('jump_sheet', 'assets/boy/tttt.png', { frameWidth: 616, frameHeight: 566, endFrame: 10 });

    }

    create() {
        const cellWidth = this.cameras.main.width / 100;
        const cellHeight = this.cameras.main.height / 100;

        // image 跟 sprite 最大的差別就是 sprite 可以sprite sheet
        this.img1 = this.add.image(cellWidth * 30, cellHeight * 30, 'img1');
        this.img1.displayWidth = cellWidth * 30;
        this.img1.displayHeight = this.img1.height * this.img1.displayWidth / this.
        img1.width;

        // // sprite animation by imgs
        this.anims.create(animationConfig.boyDead);
        const animate1 = this.add.sprite(cellWidth * 50, cellHeight * 30, 'dead0').play('dead');
        animate1.displayWidth = cellWidth * 30;
        animate1.displayHeight = animate1.height * animate1.displayWidth / animate1.width;


        // andorid瀏覽器有MAX_TEXTURE_SIZE限制，spritesheet不能太長
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('jump_sheet', { start: 0, end: 10, first: 0 }),
            frameRate: 12,
            repeat: -1
        });
        const jump = this.add.sprite(cellWidth * 70, cellHeight * 30, 'jump_sheet');
        jump.displayWidth = cellWidth * 30;
        jump.displayHeight = jump.height * jump.displayWidth / jump.width;
        jump.anims.play('jump', false);


    }

}
