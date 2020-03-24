class Page {
    constructor(game) {
        this.game = game
        const self = this.game
        // this.init()
    }

    init(name, key = 'Space') {
        var image = this.game.ui.imgPath(this.game.imgAll.bg1)
        // this.game.regEvent.register(key, this.update)
        this.game.regEvent.register(key, ()=> {
            this.update()
        })
        setTimeout(() => {
            this.draw(name, image)
        }, 50)

    }

    draw(name, image, x = 50, y = 400) {
        this.game.ui.clearUi()
        this.game.ui.context.drawImage(image, 0, 0);
        this.game.ui.context.font = "20px Georgia";
        this.game.ui.context.fillStyle = "red";
        this.game.ui.context.fillText(name, x, y)


    }

    update(key, jump = 'gameStart') {
        this.game.regEvent.RemoveRegister(key)
        this.game.isgameOver = false
        this.game.route.to(jump)
    }


}

