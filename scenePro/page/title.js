class Title extends Page {
    constructor(game) {
        super(game)
        //route
        this.game.route.add('title', this)
    }

    setup() {
        this.title = {
            name: "按 k 开始游戏",
            key: "KeyK",
        }

        this.image = this.game.ui.imgPath(this.game.imgAll.bg1),
            this.game.regEvent.register(this.title.key, this.update)
        this.draw(this.title.name)

    }

    draw(name, x = 120, y = 400) {
        this.game.ui.clearUi()
        this.game.ui.context.drawImage(this.image, 0, 0);
        // this.ui.context.drawImage(img.image, img.x, img.y,);
        this.game.ui.context.font = "20px Georgia";
        this.game.ui.context.fillStyle = "red";
        this.game.ui.context.fillText(name, x, y)

    }

}

class GameEnd extends Page {
    constructor(game) {
        super(game)
        //route
        this.game.route.add('gameEnd', this)
    }

    setup() {
        this.title = {
            name: "按 r 重新开始游戏",
            key: "KeyR",
        }

        this.game.regEvent.register(this.title.key, this.update)
        this.draw(this.title.name)

    }


}

