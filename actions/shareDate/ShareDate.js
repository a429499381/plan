class ShareDate {
    constructor() {
        this.init()
    }

    init() {
        this.level = 0
        this.score = 0
        this.EleArr = []
        this.OtherArr = []
        this.ui = sing(Ui)
        this.regEvent = sing(RegEvent)
        this.sceneWidth = this.ui.canvas.clientWidth || 400
        this.sceneheight = this.ui.canvas.clientHeight || 400
    }

}


