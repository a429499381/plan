class SceneGame extends ScenePro {
    constructor(run) {
        super()
        this.run = run
        // this.setup()
    }

    setup = () => {
        this.SceneGameTimeId = -1
        this.ui = sing(Ui)
        this.palyer = new Palyer(this.run.img.player, playerConfig)
        this.enemy0 = new Enemy(this.run.img.enemy0, EnemyConfig)
        this.bg = {
            image: this.enemy0.imgPath("img/bg1.jpg"),
            name: "bg",
            kill: true,
            x: 0,
            y: 0,
        }
        //this.addObjArr(blackConfig.blackNum)
         this.addPlayer(this.palyer)
        this.addEnemy(this.enemy0)
        //循环
        this.update()
    }


    update = () => {

        let gameOver = false
        if (this.SceneGameTimeId > 0) {
            return false
        }

        this.SceneGameTimeId = setInterval(() => {
            if (gameOver) {
                this.BallArr = []
                this.ObjArr = []
                //this.setup()
                gameOver = false
                clearInterval(this.SceneGameTimeId)
                this.SceneGameTimeId = -5
                log(' this.SceneGameTimeId', this.run)
                this.run.titlePage.setup()
                return false
            }
            // gameOver = this.ball.move()
            //this.collideArr(this.BallArr, this.ObjArr)

            this.enemy0.move()
            this.draw()
        }, 1000 / 30)
    }

}