class Ball extends Articles {
    constructor(path, config) {
        super(path, config)
        this.setup()
    }
    setup() {
        this.regKey()

    }
    regKey() {
        this.regEvent.register('Space', () => {
            this.fire()
        })
        this.isRegKey = true
    }

    move = () => {
        //log('isFire', this.isFire)
        if (this.isFire) {

            if (this.x <= 0 || this.x + this.image.width >= 600) {
                this.speedX = -this.speedX;
            }
            if (this.y <= 0 || this.y + this.image.height >= 500) {
                this.speedY = -this.speedY;
            }

            this.x += this.speedX;
            this.y -= this.speedY;

            //触底检测
            this.isOver(this)
            if (this.life === 0) {
                log('游戏失败ball  this.move')
                this.isFire = false
                // 游戏结束标志
                this.over = true
                return false
            }
        }
        return this.over
    };

    isOver(ballObj) {
        if (ballObj.y + ballObj.image.height >= 500) {
            if (ballObj.x > 0 && ballObj.x + ballObj.image.width < 600) {
                this.life -= 1
                log('触底', this.life);
                return true
            }
        }
        return false

    }

    fire(){
        this.isFire = !this.isFire
    }

    // 反弹
    rebound = () => {
        this.speedY = -this.speedY;
    }

}





