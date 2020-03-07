class Palyer extends Articles {
    constructor(path, config,) {
        super(path, config)
        this.setup()
    }

    setup() {
        this.isRegKey = false
        this.regKeyArr()
    }

    regKeyArr() {
        // 注册按键
        log('player regkeyArr', this.regEvent)
        this.regEvent.register('Space', () => {
            this.fire();
        });
        this.regEvent.register('ArrowUp', () => {
            this.moveUp();
        });
        this.regEvent.register('ArrowDown', () => {
            this.moveDown();
        })
        this.regEvent.register('ArrowLeft', () => {
            this.moveLeft();
        })
        this.regEvent.register('ArrowRight', () => {
            // log('right')
            this.moveRight();
        })
        this.isRegKey = true

    }

    fire() {
        var Bullets
        // var Bullets = this.run.Bullets
        Bullets.x = this.x / 2
        Bullets.y = this.y / 2

    }

    moveUp() {
        this.y > 0 ? this.y -= this.speed : this.y = 0;
    }

    moveDown() {
        this.y < 720 ? this.y += this.speed : this.y = 720;
    }

    moveLeft() {
        this.x > 0 ? this.x -= this.speed : this.x = 0;
    }

    moveRight() {
        this.x <= (400 - this.image.width) ? this.x += this.speed : this.x = 400 - this.image.width;
    }

}


