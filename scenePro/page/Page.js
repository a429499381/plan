class Page {
    constructor(game) {
        this.game = game
        this.init()
        log('page', this.constructor.name)
    }
    init(){
        this.ui = sing(Ui)
        this.regKey =sing(RegEvent)
    }
    draw(name ,x = 100, y = 100) {
        this.ui.clearUi()
        this.ui.context.font = "20px Georgia";
        this.ui.context.fillText(name, x, y)
    }

    update = (key) => {
        log(this.game.route)
        log('key update  page', key)
        this.regKey.RemoveRegister(key)
        this.game.route.to('gameStart')
    }


}

