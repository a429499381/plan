class Title extends Page {
    constructor(game) {
        super(game)
        //route

        this.game.route.add('title', this)

    }

    setup() {
        this.title = {
            name: "按 空格 开始游戏",
        }


        this.init(this.title.name)
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
            name: "按 空格 重新开始游戏",
        }
        this.init(this.title.name)

    }


}

