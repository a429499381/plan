class ScenePro {
    constructor() {
        this.setup()
    }

    setup() {
        this.level = 0
        this.score = 0
        this.Ele = []
        this.Other = []
        this.ui = sing(Ui)
        this.regEvent = sing(RegEvent)
        this.sceneWidth = this.ui.canvas.clientWidth
        this.sceneheight = this.ui.canvas.clientHeight
    }

    Between(min, max) {
        let t = Math.floor(Math.random() * (max + 1 - min)) + min;
        return t
    }

    // 添加 要渲染的 this
    addEle(b) {
        this.Ele.push(b)
    }

    writeScore(text) {
        var texts = `分数: ${text}`
        this.ui.writeText(texts)
    }

    update() {
        this.Ele.forEach(T => {
            T.update()
        })
    }

    draw() {
        this.ui.clearUi()

        this.Other.forEach(O => {
            O.draw()
        })

        this.Ele.forEach(T => {
            T.draw()
        })


    }


}