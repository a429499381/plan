class Palyer {
    constructor(game, obj) {
        this.game = game
        this.x = obj.x
        this.y = obj.y
        this.w = obj.w
        this.h = obj.h
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
    }

    regKeyArr() {
        // 注册按键
        this.regEvent = sing(RegEvent)
        this.regEvent.register('Space', () => {
            log('fire')
            this.fire();
        });
        this.regEvent.register('ArrowUp', () => {
            // //log('up')
            this.moveUp();
        });
        this.regEvent.register('ArrowDown', () => {
            // //log('Down')
            this.moveDown();
        })
        this.regEvent.register('ArrowLeft', () => {
            // //log('left')
            this.moveLeft();
        })
        this.regEvent.register('ArrowRight', () => {
            // //log('right')
            this.moveRight();
        })
        this.isRegKey = true

    }

    fire() {
        this.isNum += 1
        // //log(this.regEvent.keydowns.Space)
        if (this.isNum === 0 || this.isNum >= 9) {
            this.isNum = 0
            this.bullte = new Articles('img/bullets.png',  {w:18, h: 46, x: 0 , y: 0})
            this.bullte.x  = this.x + this.w/2 - this.bullte.w/2
            this.bullte.y  = this.y  - this.bullte.h
            log('play  zhidan', this.bullte)
            window.g = this.game.BulltesArr
            this.game.addBulltesArr(this.bullte)
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


