class Title extends Page {
    constructor(game) {
        super(game)
        //route
        this.game.route.add('title', this)
        // this.setup()
    }
    setup() {
        log('setup title')
        this.title = {
            name: "按 k 开始游戏",
            key: "KeyK",
        }

        this.regKey.register(this.title.key, this.update)
        this.draw(this.title.name, 100, 350)
    }

}

class GameEnd extends Page {
    constructor(game) {
        super()
        this.game = game
        //route
        this.game.route.add('gameEnd', this)
        // this.setup()
    }

    setup() {
        this.title = {
            name: "按 r 重新开始游戏",
            key: "KeyR",
        }

        this.regKey.register(this.title.key, this.update)
        this.draw(this.title.name, 100, 350)

    }

}

