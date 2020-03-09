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
        this.addPlayer(this.player)
        this.addObjArr(this.run.img.yun0, 'Other')
        this.addObjArr(this.run.img.enemy0, 'Enemy', {w: 101, h: 78})
        this.addObjArr(this.run.img.enemy6, 'Enemy', {w:110, h:99})
        this.addObjArr(this.run.img.enemy7, 'Enemy', {w:142, h:147})

        //循环
        var self = this
        setTimeout(function () {
            self.update()
        },500)
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
            if (this.BulltesArr.length > 0) {
                this.collideArr(this.BulltesArr, this.EnemyArr)
            }
            this.draw()
        }, 1000 / 30)
    }

}