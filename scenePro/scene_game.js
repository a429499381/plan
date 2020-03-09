class SceneGame extends ScenePro {
    constructor(run) {
        super()
        this.run = run
        // this.setup()
    }


    setup = () => {
        this.SceneGameTimeId = -1
        this.p = new Articles("img/player1.png", {x: 150, y: 550, w: 83, h: 90})
        this.player = new Palyer(this, this.p)
        this.bg = new Articles('img/bg0.jpg', {x: 0, y: 0})
        log(this.player)

        // 加入相应数组
        this.addPlayer(this.bg)
        //各种不同飞机
        this.createEnemArr()
        this.addObjArr(this.run.img.yun0, 'Other')
        this.addPlayer(this.player)
        //循环

        this.update()
    }

    autoFire() {
        if (this.regEvent.keydowns && this.regEvent.keydowns.Space) {
            this.player.fire()
            //log('autoFire')
        }
    }

    update = () => {

        let gameOver = false
        if (this.SceneGameTimeId > 0) {
            return false
        }

        this.SceneGameTimeId = setInterval(() => {
            // if (gameOver) {
            //     this.BallArr = []
            //     this.ObjArr = []
            //     //this.setup()
            //     gameOver = false
            //     clearInterval(this.SceneGameTimeId)
            //     this.SceneGameTimeId = -5
            //     //log(' this.SceneGameTimeId', this.run)
            //     this.run.titlePage.setup()
            //     return false
            // }
            //this.moveEnemy(this.EnemyArr)
            this.autoFire()
            this.collideArr(this.BulltesArr, this.EnemyArr)
            this.createEnemArr(15)
            this.draw()
            this.writeScore(this.score)
        }, 1000 / 30)
    }

}