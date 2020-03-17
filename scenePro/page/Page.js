class Page {
    constructor() {
        this.setup()
    }
    setup = (n) => {
        this.ui = sing(Ui)
        this.regKey =sing(RegEvent)
    }
    draw(name) {
        this.ui.clearUi()
        this.ui.context.font = "20px Georgia";
        this.ui.context.fillText(name, 240, 240)
    }
}

