class Page {
    constructor(game) {
        this.game = game
        this.init()
    }

    init() {

    }

    draw(name, x = 120, y = 400) {
        this.game.ui.clearUi()
        this.game.ui.context.font = "20px Georgia";
        this.game.ui.context.fillStyle = "red";
        this.game.ui.context.fillText(name, x, y)

    }

    update = (key) => {
        // log(this.game.route)
        // log('key update  page', key)
        this.game.regEvent.RemoveRegister(key)
        this.game.isgameOver = false
        this.game.route.to('gameStart')
        // console.count('page')
    }


}

