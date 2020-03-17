class SceneGame extends ScenePro {
    constructor(run) {
        super(run)
        this.imgAll = run.img
        // this.setup()
    }


    setup() {
        const Ui = this.ui
        this.SceneGameTimeId = -1
        this.addOther(this.imgAll.bg)
        this.addOther(this.imgAll.yun0, this.Between(0, 50), this.Between(0, 100))
        this.enemy = new Enemy(this)
        this.loop()
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