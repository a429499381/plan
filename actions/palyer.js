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
        this.BullteImage = this.ui.imgPath(this.imgAll.zhidan, {w: 1024, h: 1024, x: 0, y: 0})
        this.isNum = 0
        this.player = {
            image: this.ui.imgPath(path),
            name: `player${this.isNum}`,
            x: 160,
            y: 550,
            vx: 0.4,
            vy: 0.4,
            gy: 1,
            w: 83,
            h: 90,
            speed: 20,
        }

        this.x = 160 * this.zoom * 4
        this.y = 650 * this.zoom * 4
        this.w = this.player.w
        this.h = this.player.h
        //礼花数组
        this.prArr = []
    }

    removeEnemy(obj, index) {
        let e = obj
        let t = 0
        for (let i = index; i < e.length - 1; i++) {
            e[i] = e[i + 1]
        }
        //去掉尾部 空数组
        e.pop()
    }

    // 碰撞检测 后执行
    collideAction() {

        this.enemy.EnemyArr.forEach((e, j) => {
            //是否与飞机碰撞
            let result = collide(this.player, e)
            if (result) {
                this.pr(e, 'playBulltesArr')
                this.removeEnemy(this.enemy.EnemyArr, j)
                //减分
                this.score -= 10
                // log('被击中')
            }
            //我方飞机子弹
            if (this.BulltesArr && this.BulltesArr.length > 0) {
                this.BulltesArr.forEach((b, i) => {
                    let r = collide(b, e)
                    if (r) {
                        this.pr(e, 'playBulltesArr')
                        //子弹消失
                        this.BulltesArr.shift()
                        // 敌机消失方式
                        this.removeEnemy(this.enemy.EnemyArr, i)

                        this.score += 10
                    }
                })
            }

            if (e.BulltesArr && e.BulltesArr.length > 0) {
                e.BulltesArr.forEach((eb, k) => {
                    //是否与飞机碰撞
                    let result = collide(this.player, eb)
                    if (result) {
                        this.removeEnemy(e.BulltesArr, k)
                        //减分
                        this.score -= 10
                        // log('被击中')
                    }
                })
            }

        })

    }

    update() {
        // 子弹坐标更新
        if (this.BulltesArr.length > 0) {
            this.BulltesArr.forEach(b => {
                b.y -= b.speed || 3
            })
        }

        // 碰撞检测 后执行
        this.collideAction()

        if (this.prArr && this.prArr.length > 0) {
            this.prArr.forEach((pr, i) => {
                pr.forEach(b => {
                    b.x += b.vx
                    b.y += b.vy
                })
            })
        }


        this.createBulltes()
        this.autoFire()
    }

    draw() {
        if (this.prArr && this.prArr.length > 0) {
            this.prArr.forEach((pr, i) => {
                setTimeout(() => {
                    this.prArr[i] = []
                }, 500)
                pr.forEach(b => {
                    this.ui.context.save()
                    this.ui.context.scale(0.3, 0.3)
                    this.ui.context.drawImage(b.image, 330, 5, 90, 100, b.x, b.y, 40, 60,)
                    this.ui.context.restore()
                })
            })
        }


        //发射子弹
        this.bulltesDraw()
        // 飞机画面更新
        this.player.x = this.x
        this.player.y = this.y
        this.ui.drawImage(this.player)
    }

    // 爆炸烟花
    pr(T, flag) {
        let g = this
        let p = []
        for (let i = 1; i < 30; i++) {
            let peng = {
                image: this.BullteImage,
            }
            peng.vx = 0
            peng.vy = 0
            peng.name = i
            peng.flag = flag
            peng.vx += g.Between(-10, 10)
            peng.vy += g.Between(-10, 10)
            peng.x = T.x * 1.5 + peng.vx
            peng.y = T.y * 1.5 + peng.vy
            p.push(peng)
        }

        this.prArr.push(p)
        return p
    }

    fire() {
        this.isNum == undefined ? this.isNum = 0 : this.isNum++
        // 不能被 6 除尽就退出
        if (this.isNum++ % 9 !== 0) {
            return
        }

        let c = this.createBulltes()
        c ? this.BulltesArr.push(c) : ''
    }

    autoFire() {
        if (this.regEvent.keydowns && this.regEvent.keydowns.Space) {
            if (this.isNum++ % 6 === 0) {
                let c = this.createBulltes()
                c ? this.BulltesArr.push(c) : ''
            }
            log('autoFire', this.isNum)

        }
    }

    createBulltes() {
        let bullte = {
            image: this.BullteImage,
            name: `playerBulltes${this.isNum}`,
            x: Math.floor(this.x + this.w / 2 - 20),
            y: Math.floor(this.y - 20),
            speed: 10,
            w: 40,
            h: 60,
        }

        return bullte

    }

    bulltesDraw() {
        if (this.BulltesArr.length <= 0) {
            return 'BulltesArr length 0'
        }

        this.BulltesArr.forEach(b => {
            // 子弹飞出界面 移除
            if (b.y < (-b.h || -200)) {
                // 先进先出 每次移除头数组
                this.BulltesArr.shift()

            }
            this.ui.context.save()
            this.ui.context.scale(0.5, 0.5)
            this.ui.context.drawImage(b.image, 330, 5, 90, 100, b.x, b.y, 40, 60,)
            this.ui.context.restore()
        })

    }

    acceleration(x, y, speed, vx, vy, gy) {
        //执行 加速度
        y += vy
        vy += gy * 0.2
        y += speed
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

    moveUp() {
        this.y > 0 ? this.y -= this.player.speed : this.y = 0;
    }

    // this.y < this.sceneheight ? this.y += this.player.speed : this.y = 720;
    moveDown() {
        this.y < this.sceneheight - this.h ? this.y += this.player.speed : this.y = this.sceneheight - this.h;
    }

    moveLeft() {
        this.x > 0 ? this.x -= this.player.speed : this.x = 0;
    }

    moveRight() {
        this.x <= (this.sceneWidth - this.w) ? this.x += this.player.speed : this.x = this.sceneWidth - this.w
    }

}


