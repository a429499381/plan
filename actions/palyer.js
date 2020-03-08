class Bulltes {
    constructor(path, config) {
        this.setup(path, config)

    }

    setup(path, config) {
        this.config = new Articles(path, config)
        this.config.speed = 5
    }

    move() {
        this.y += this.config.speed
    }


}

class Palyer {
    constructor(game, obj) {
        this.game = game
        this.x = obj.x
        this.y = obj.y
        this.speed = 20
        this.image = obj.image
        this.setup()
    }

    setup() {
        this.TimeFireId = -5
        this.isFire = false
        this.isNum = 0
        this.isRegKey = false
        this.regKeyArr()
        return this
    }

    regKeyArr() {
        // 注册按键
        this.regEvent = sing(RegEvent)
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
       this.isNum  += 1
        if(!this.TimeFireId) {
            this.TimeFireId = setTimeout(function () {
                this.isNum = 0
                this.TimeFireId = -5
            },50)
        }

        if (this.isNum === 0 || this.isNum >= 9) {
            this.isNum = 0
            var game = this.game
            var bullte = new Bulltes('img/bullets.png', {x: 0, y: 0}).config
            bullte.x = this.x + bullte.image.width
            bullte.y = this.y - bullte.image.height
            game.BulltesArr.push(bullte)
        }

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


