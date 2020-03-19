class SceneGame extends ScenePro {
    constructor(run) {
        super(run)
        // this.setup()
}


        setup() {
            this.SceneGameTimeId = -1
            this.isgameOver = false
            this.addOther(this.imgAll.bg2)
            this.addOther(this.imgAll.yun0, this.Between(0, 50), this.Between(0, 100))
            this.enemy = new Enemy(this)
            this.player = new Player(this)

        this.loop()
    }

    loop() {
        if(this.SceneGameTimeId > 0 ) {
            return
        }
        this.SceneGameTimeId = setInterval(() => {
            if (this.SceneGameTimeId < 0 || this.isgameOver) {
                clearInterval(this.SceneGameTimeId)
                this.SceneGameTimeId = -10
                return false
            }
            this.update()
            this.draw()
        }, 1000 / 30)
    }
}