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
    }

    regKeyArr() {
        // 注册按键
        this.regEvent = this.game.regEvent
        //this.regEvent = sing(RegEvent)
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
        var game = this.game
        this.isNum += 1
        // //log(this.regEvent.keydowns.Space)
        if (this.isNum === 0 || this.isNum >= 1) {
            this.isNum = 0
            //var bullte = game.addObjArr('img/bullets.png', 'Bulltes', {w:18, h: 46, x: this.x, y: this.y})
             var bullte = new Articles('img/bullets.png',  {w:18, h: 46, x: this.x , y: this.y})
            bullte.x = this.x + this.w || this.w/2
            bullte.y = this.y + this.h || this.h/2
            log('play w h', this.w, this.h)
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


