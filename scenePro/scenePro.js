class ScenePro {
    constructor() {
        this.setup()
    }

    setup() {
        this.level = 0
        this.score = 0
        this.EleArr = []
        this.OtherArr = []
        this.ui = sing(Ui)
        this.regEvent = sing(RegEvent)
        this.sceneWidth = this.ui.canvas.clientWidth || 400
        this.sceneheight = this.ui.canvas.clientHeight || 400
    }

    Between(min, max) {
        let t = Math.floor(Math.random() * (max + 1 - min)) + min;
        return t
    }

    // 添加 要渲染的 this
    addEle(b) {
        this.EleArr.push(b)
    }

    addOther(path, x = 0, y = 0) {
        let b = {
            image: this.ui.imgPath(path),
            x: x,
            y: y,
        }
        this.OtherArr.push(b)
    }

    writeScore(text) {
        var texts = `分数: ${text}`
        this.ui.writeText(texts)
    }

    update() {
        this.EleArr.forEach(E => {
            E.update()
        })
    }

    draw() {
        this.ui.clearUi()

        this.OtherArr.forEach(O => {
            this.ui.drawImage(O)
        })

        this.EleArr.forEach(E => {
            E.draw()
        })

        this.writeScore(this.score)
    }


}