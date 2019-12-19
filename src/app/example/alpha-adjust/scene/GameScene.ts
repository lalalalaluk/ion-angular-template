import * as Phaser from 'phaser';
import { CloneCrystal } from '../objects/clone-crystal';
import { OriginalCrystal } from '../objects/original-crystal';

export class GameScene extends Phaser.Scene {
    private cloneCrystal: CloneCrystal;
    private originalCrystal: OriginalCrystal;
    private playerHasClicked: boolean;
    private showResult: boolean;
    private alphaDifferenceText: Phaser.GameObjects.Text;
    private feedbackText: Phaser.GameObjects.Text;

    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload(): void {
        this.load.image('crystal', 'assets/alpha-adjust/crystal.png');
    }

    init(): void {
        this.playerHasClicked = false;
        this.alphaDifferenceText = null;
        this.feedbackText = null;
    }

    create(): void {
        this.cloneCrystal = new CloneCrystal({
            scene: this,
            x: this.sys.canvas.width / 2 + 150,
            y: this.sys.canvas.height / 2 - 30,
            key: 'crystal',
        });

        this.originalCrystal = new OriginalCrystal({
            scene: this,
            x: this.sys.canvas.width / 2 - 150,
            y: this.sys.canvas.height / 2 - 30,
            key: 'crystal',
            alpha: Phaser.Math.Between(0, 100) / 100
        });

        this.input.on(
            'pointerdown',
            (pointer) => {
                if (!this.playerHasClicked) {
                    this.playerHasClicked = true;
                } else {
                    this.scene.restart();
                }
            },
            this
        );
    }

    update(): void {
        if (!this.playerHasClicked) {
            this.cloneCrystal.update();
            this.showResult = false;
        } else {
            if (!this.showResult) {
                const difference = this.clculateAlphaDifference();
                this.createResultTexts(difference);
            }
        }
    }

    private clculateAlphaDifference(): number {
        return Math.abs(this.cloneCrystal.alpha - this.originalCrystal.alpha);
    }

    private createResultTexts(difference: number): void {
        this.alphaDifferenceText = this.add.text(
            this.sys.canvas.width / 2,
            this.sys.canvas.height / 2 + 120,
            'You : ' + this.cloneCrystal.alpha.toFixed(2),
            {
                fontFamily: 'Connection',
                fontSize: 80,
                stroke: '#000000',
                strokeThickness: 8,
                fill: '#ffffff'
            }
        );
        this.alphaDifferenceText.setOrigin(0.5);

        this.alphaDifferenceText = this.add.text(
            this.sys.canvas.width / 2,
            this.sys.canvas.height / 2 + 220,
            'Actual : ' + this.originalCrystal.alpha.toFixed(2),
            {
                fontFamily: 'Connection',
                fontSize: 80,
                stroke: '#000000',
                strokeThickness: 8,
                fill: '#ffffff'
            }
        );
        this.alphaDifferenceText.setOrigin(0.5);

        const textConfig = {
            fontFamily: 'Connection',
            fontSize: 50,
            stroke: '#000000',
            strokeThickness: 8,
            fill: '#ffffff'
        };

        let commentText: string;
        if (difference >= 0.5) {
            commentText = 'You can do better!';
        } else if (difference < 0.5 && difference >= 0.3) {
            commentText = 'OK!';
        } else if (difference < 0.3 && difference >= 0.1) {
            commentText = 'Great!';
        } else if (difference < 0.1) {
            commentText = 'Wonderful!';
        }
        this.feedbackText = this.add.text(
            this.sys.canvas.width / 2,
            this.sys.canvas.height / 2 - 150,
            commentText,
            textConfig
        );
        this.feedbackText.setOrigin(0.5);
        this.showResult = true;
    }
}
