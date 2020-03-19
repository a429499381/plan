class SceneGame extends ScenePro {
    constructor(run) {
        super(run)
        this.imgAll = run.img
        this.route.add('gameStart', this)
        // this.setup()
    }


    setup() {
        const Ui = this.ui
        this.SceneGameTimeId = -1
        this.addOther(this.imgAll.bg)
        this.addOther(this.imgAll.yun0, this.Between(0, 50), this.Between(0, 100))
        this.enemy = new Enemy(this)
        // page
        this.title = new Title(this)
        this.gameEnd = new GameEnd(this)

        //route
        // this.route.add('title', this.title)

        this.route.to('title')
        // this.title.setup()
        // this.title()


        // this.loop()
    }

    loop() {
        let gameOver = false
        if (this.SceneGameTimeId > 0) {
            return false
        }

        this.SceneGameTimeId = setInterval(() => {
            super.update()
            super.draw()
        }, 1000 / 30)
    }

}