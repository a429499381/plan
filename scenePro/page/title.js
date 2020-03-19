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

        this.game.regEvent.register(this.title.key, this.update)
        this.draw(this.title.name)
    }

}

class GameEnd extends Page {
    constructor(game) {
        super()
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

