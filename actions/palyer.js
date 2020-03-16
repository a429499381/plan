class Player extends SceneGame {
    constructor(run) {
        super(run)
        this.addEle(this)
        this.regKeyArr()
        this.setup(this.imgAll.player)
        super.setup()
    }

    setup(path) {
        this.BulltesArr = []
        this.Bullte = this.ui.imgPath('img/zhidanPro.png', {w: 1024, h: 1024, x: 0, y: 0})
        this.speed = 20
        this.TimeFireId = -5
        this.isFire = false
        this.isNum = 0
        this.isUpdate = false
        this.isAutoFire = false
        this.autoFireNum = 0
        this.isRegKey = false
        this.player = {
            image: this.ui.imgPath(path),
            x: 160,
            y: 550,
            vx: 0.4,
            vy: 0.4,
        }
        this.x = this.player.x
        this.y = this.player.y
        this.w = 83
        this.h = 90
    }


    update() {
        this.autoFire()
    }

    draw() {
        //发射子弹
        this.bulltesDraw()
        // 飞机画面更新
        this.player.x = this.x
        this.player.y = this.y
        this.ui.drawImage(this.player)
    }

    autoFire() {
        if (this.regEvent.keydowns && this.regEvent.keydowns.Space) {
            this.fire()
            //log('autoFire')
        }
    }

    bulltesDraw() {
        for (let i = 0; i < this.BulltesArr.length; i++) {
            let obj = this.BulltesArr[i]
            // 每次循环移动一次   SPEED没有定位 做计算会导致NAN
            obj.y -= obj.speed || 3

            // 子弹飞出界面 移除
            if (obj.y < -obj.h) {
                this.BulltesArr.pop()
            }
            this.ui.context.drawImage(obj.image, 330, 5, 90, 100, obj.x, obj.y, 40, 60,)
        }
    }

    regKeyArr() {
        // 注册按键
        // this.regEvent = sing(RegEvent)
        //this.regEvent = this.game.

        this.regEvent.register('Space', () => {
            //  log('fire')
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

    createBulltes() {
        this.isNum += 1
        if (this.isNum === 0 || this.isNum >= 9) {
            this.isNum = 0
            let bullte = {}
            bullte.image = this.Bullte
            bullte.x = Math.floor(this.x + this.w / 2 - 20)
            bullte.y = Math.floor(this.y - 20)
            bullte.speed = 10
            return bullte
        }
    }

    fire() {
        let c = this.createBulltes()
        c ? this.BulltesArr.push(c) : ''
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
        this.x <= (this.sceneWidth - this.w) ? this.x += this.speed : this.x = this.sceneWidth - this.w
    }

}


