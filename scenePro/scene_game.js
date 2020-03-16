class SceneGame extends ScenePro {
    constructor(run) {
        super()
        this.imgAll = run.img
        // this.setup()
    }


    setup = () => {
        const Ui = this.ui
        this.SceneGameTimeId = -1
        this.addOther(this.imgAll.bg)
        this.loop()
    }

    loop() {

        let gameOver = false
        if (this.SceneGameTimeId > 0) {
            return false
        }

        this.SceneGameTimeId = setInterval(() => {
            this.update()
            this.draw()
        }, 1000 / 30)
    }

}