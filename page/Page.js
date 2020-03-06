class Page {
    constructor() {
    }

    setup = (n) => {
        this.ui = new Ui()
        this.ui.clearUi()
        this.regKey = new RegEvent()
        log('进入', n.name, '界面')
        log('Page.setup', this)
        this.ui.context.font = "20px Georgia";
        this.ui.context.fillText(n.name, 240, 240)

        this.regKey.register(n.key, this.up)
    }

    up = () => {
    }
}


/*
var GameOver = function (game) {
    var R = {
        name: "加油哦， 按 R 从新开始"
    }
    var canvas = game.ui
    var regKey = game.regEvent
    var cx = canvas.context
    R.start = function () {
        canvas.clearUi()
        log('进入 GameOver 界面', canvas)
        cx.font = "20px Georgia";
        cx.fillText(R.name, 240, 240)

        log(regKey.keydowns)
        regKey.register('KeyR', R.OverCallBack)
    }

    R.OverCallBack = function () {
        regKey.RemoveRegister('KeyR')
        canvas.clearUi()
        if (game.timeId >= 0) {
            clearInterval(game.timeId)
            game.timeId = -1
        }
        //初始化 球 球板 砖块
        game.paddle = Paddle(game);
        game.ball = new Ball(game);
        game.black = Black(game)
        game.start(game.update)
    }


    return R;
}*/
