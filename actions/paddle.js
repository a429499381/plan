class Paddle extends Articles {
    constructor(path, config) {
        super(path, config)
        this.setup()
    }

    setup() {
        this.isRegKey = false
        this.regKeyArr()
    }

    regKeyArr() {
        // 注册按键
        this.regEvent.register('KeyA', () => {
            this.moveLeft();
        });
        this.regEvent.register('KeyD', () => {
            this.moveRight();
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

    moveLeft() {
        this.x > 0 ? this.x -= this.speed : this.x = 0;
    }

    moveRight() {
        this.x <= (600 - this.image.width) ? this.x += this.speed : this.x = 600 - this.image.width;
    }

}


