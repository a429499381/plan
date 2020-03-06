class SceneGame extends ScenePro {
    constructor(run) {
        super()
        this.run = run
        // this.setup()
    }

    setup = () => {
        this.SceneGameTimeId = -1
        this.ui = sing(Ui)
        this.paddle = new Paddle(imgS.paddle, paddleConfig)
        this.ball = new Ball(imgS.ball, ballConfig)
        this.bg = {
            image: this.ball.imgPath("img/bg1.jpg"),
            name: "bg",
            kill: true,
            x: 0,
            y: 0,
        }
        this.addObjArr(blackConfig.blackNum)
        this.addObj(this.paddle)
        this.addBall(this.ball)
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
                log(' this.SceneGameTimeId',this.run)
                this.run.titlePage.setup()
                return false
            }
            gameOver = this.ball.move()
            this.collideArr(this.BallArr, this.ObjArr)
            this.draw()
        }, 1000 / 30)
    }

}