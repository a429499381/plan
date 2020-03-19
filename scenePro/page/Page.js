class Page {
    constructor(game) {
        this.game = game
        this.init()
        log('page', this.constructor.name)
    }

    init() {

    }

    draw(name, x = 100, y = 100) {
        // this.game.ui.clearUi()
        this.game.ui.context.font = "20px Georgia";
        this.game.ui.context.fillText(name, x, y)


    }

    update = (key) => {
        log(this.game.route)
        log('key update  page', key)
        this.game.regEvent.RemoveRegister(key)
        this.game.isgameOver = false
        this.game.route.to('gameStart')
        console.count('page')
    }


}

