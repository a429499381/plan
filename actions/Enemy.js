class Enemy {
    constructor(game, path, config = {x: 0, y: 0}) {
        this.game = game
        this.game.addEle(this)
        this.setup(path, config)
    }

    setup(path, config) {
        let g = this.game
        this.EnemyArr = []
        this.isNum = 0
        this.enemyImage = g.ui.imgPath(g.imgAll.enemy.enemy0)
        this.bulltesImage = this.game.ui.imgPath(this.game.imgAll.zhidan, {
            w: 1024,
            h: 1024,
            x: config.x,
            y: config.y,
        })

        this.x = config.x
        this.y = config.y
        this.speed = 3
        this.zoom = 0.5

        this.createEnemyArr(5)

    }

    update() {

        if (this.EnemyArr.length <= 2) {
            this.createEnemyArr(4)
        }


        if (this.EnemyArr.length <= 0) {
            return
        }

        this.EnemyArr.forEach(e => {
            e.y += e.speed

            if (e.y > this.game.sceneHeight + (e.h || 100)) {
                e.x = this.game.Between(10, 300) * this.game.zoom * 4
                e.y = this.game.Between(50, 200) * this.game.zoom * 4
            }

            if (e.BulltesArr.length > 0) {
                e.BulltesArr.forEach(b => {
                    b.y += b.speed || 10
                })
            }


            e.isNum == undefined ? e.isNum = 0 : e.isNum++
            // 不能被 9 除尽就退出
            if (e.isNum % 40 === 0) {
                e.isNum = 0
                e.BulltesArr.push(this.createBulltes(e))
            }


        })


    }


    draw() {
        if (this.EnemyArr.length <= 0) {
            return
        }


        this.EnemyArr.forEach(e => {
            this.game.ui.drawImage(e)
            // 绘制每个飞机的子弹
            this.bulltesDraw(e)
        })

    }

    bulltesDraw(e) {
        if (e.BulltesArr.length <= 0) {
            return 'EnemyBulltesArr length 0'
        }

        e.BulltesArr.forEach(b => {
            // 子弹飞出界面 移除
            if (b.y > (this.game.sceneheight + e.h || this.game.sceneheight + 200)) {
                // 先进先出 每次移除头数组
                e.BulltesArr.shift()

            }
            this.game.ui.context.save()
            this.game.ui.context.scale(0.5, 0.5)
            this.game.ui.context.drawImage(b.image, 330, 5, 90, 100, b.x, b.y, 40, 60,)
            this.game.ui.context.restore()
        })
    }

    createBulltes(coordinates) {
        let bullte = {
            image: this.bulltesImage,
            name: `EnemyBulltes${this.isNum}`,
            x: coordinates.x * this.zoom * 2 + 50 ,
            y: coordinates.y * this.zoom * 2 + 80,
            speed: 6,
            isNum: 0,
            w: 40,
            h: 60,
        }
        return bullte
    }


    createEnemyArr(num = 3) {
        let g = this.game
        let n = g.Between(num - 2, num)
        for (let i = 0; i < n; i++) {
            let eNum = g.Between(1, 10)
            let e = {
                // image: this.enemyImage,
                image: g.ui.imgPath(g.imgAll.enemy[`enemy${eNum}`]),
                name: `Enemy${i}`,
                x: g.Between(0, 340) * this.zoom * 4,
                y: g.Between(10, 200) * this.zoom * 4,
                w: 100,
                h: 70,
                speed: this.speed || 2,
                isNum: 0,
                BulltesArr: [],
            }
            this.EnemyArr.push(e)
        }
    }


}





