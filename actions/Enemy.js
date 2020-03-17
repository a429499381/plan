class Enemy {
    constructor(game, path, config ={x:0, y: 0}) {
        this.game = game
        this.game.addEle(this)
        this.setup(path, config)
    }
    setup(path, config) {
        let g = this.game
        this.EnemyArr = []
        this.BulltesArr = []
        this.isNum = 0
        this.enemyImage = g.ui.imgPath(g.imgAll.enemy.enemy0)
        this.x = config.x
        this.y = config.y
        // this.w = config.w || 0
        // this.h = config.h || 0
        this.speed = 3

        this.createEnemyArr(3)

    }

    update() {
        if(this.EnemyArr.length <= 0 ) {
            return
        }

        this.EnemyArr.forEach(e => {
            e.y += e.speed
        })

        this.autoFire()
        this.BulltesArr.forEach(e => {
            e.y += e.speed
        })
    }

    draw() {
        if(this.EnemyArr.length <= 0 ) {
            return
        }

        this.EnemyArr.forEach(e => {
            this.game.ui.drawImage(e)
        })

        this.BulltesArr.forEach(e => {
            this.game.ui.drawImage(e)
        })

    }

    autoFire(){
        let b =this.createBulltes()
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
                speed: this.speed
            }

            this.EnemyArr.push(e)
            return e
        }
    }

    createBulltes() {
        this.isNum == undefined ? this.isNum = 0 : this.isNum++
        // 不能被 9 除尽就退出
        if (this.isNum % 9 !== 0) {
            return
        }

        let bullte = {
            image: this.game.ui.imgPath(this.game.imgAll.zhidan, {w: 1024, h: 1024, x: 0, y: 0}),
            name: `EnemyBulltes${this.isNum}`,
            x: Math.floor(this.x + this.w / 2 - 20),
            y: Math.floor(this.y - 20),
            speed: 10,
            w: 40,
            h: 60,
        }

        this.BulltesArr.push(bullte)
        return bullte

    }

}





