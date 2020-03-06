class Palyer extends Articles {
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
        this.regEvent.register('ArrowUp', () => {
            log('player up')
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
    moveUp() {
        this.y > 0 ? this.x -= this.speed : this.x = 0;
    }
    moveDown() {
        this.y > 0 ? this.x -= this.speed : this.x = 0;
    }
    moveLeft() {
        this.x > 0 ? this.x -= this.speed : this.x = 0;
    }

    moveRight() {
        this.x <= (400 - this.image.width) ? this.x += this.speed : this.x = 400 - this.image.width;
    }

}


