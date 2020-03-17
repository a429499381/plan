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
        this.bulltesImage = this.game.ui.imgPath(this.game.imgAll.zhidan, {w: 1024, h: 1024, x: 0, y: 0}), this.x = config.x
        this.y = config.y
        // this.w = config.w || 0
        // this.h = config.h || 0
        this.speed = 3

        this.createEnemyArr(5)

    }

    update() {
        if (this.EnemyArr.length <= 0) {
            return
        }

        this.EnemyArr.forEach(e => {
            e.y += e.speed

            if (e.y > this.game.sceneheight + (e.h || 100)) {
                e.x = this.game.Between(10, 300)
                e.y = this.game.Between(50, 200)
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

        if (this.EnemyArr.length <= 2) {
            this.createEnemyArr(4)
        }


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
            this.game.ui.context.drawImage(b.image, 330, 5, 90, 100, b.x, b.y, 40, 60,)
        })
    }

    createBulltes(coordinates) {

        let bullte = {
            image: this.bulltesImage,
            name: `EnemyBulltes${this.isNum}`,
            x: coordinates.x + 30,
            y: coordinates.y + 30,
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
            let e = {
                image: this.enemyImage,
                name: `Enemy${i}`,
                x: g.Between(50, 300),
                y: g.Between(50, 300),
                w: 130,
                h: 130,
                speed: 2 || this.speed,
                isNum: 0,
                BulltesArr: [],
            }
            this.EnemyArr.push(e)
        }
    }


}





