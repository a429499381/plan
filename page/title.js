class Title{
    constructor(run) {
        this.run = run
        this.init()
    }
    init() {
        this.ui = sing(Ui)
        this.regKey =sing(RegEvent)
        this.title = {
            name: "按 k 开始游戏",
            key: "KeyK",
        }
    }

    setup() {
        this.ui.clearUi()
        log('进入', this.title.name, '界面')
        log('Page.setup', this)
        this.ui.context.font = "20px Georgia";
        this.ui.context.fillText(this.title.name, 240, 240)
        this.regKey.register(this.title.key, this.up)
    }

    up = () => {
        this.regKey.RemoveRegister(this.title.key)
        if( this.run.SceneGameTimeId > 0){
            this.run.clearInterval(this.run.SceneGameTimeId)
            this.run.SceneGameTimeId = -5
        }

        this.run.BallArr = []
        this.run.ObjArr = []
        this.run.sceneGame.setup()
    }


}














/*
var Title = function (game) {
    var T = {
        name: "欢迎来到贪吃蛇， 按 K 进入游戏"
    }
    var canvas = game.ui
    var regKey = game.regEvent
    var cx = canvas.context
    T.start = function () {
        canvas.clearUi()
        log('进入Title 界面', canvas)
        cx.font="30px Georgia";
        cx.fillText(T.name, 100, 240)

        log(regKey.keydowns)
        regKey.register('KeyK', T.TitleCallBack)
    }

    T.TitleCallBack = function () {
        //清空UI
        canvas.clearUi()
        if (game.timeId >= 0) {
           clearInterval(game.timeId)
            game.timeId = -1
       }
        //执行指定页面
        //初始化 球 球板 砖块
        game.paddle = Paddle();
        game.ball = new Ball(game);
        game.black = Black(game)
        game.start(game.update)

    }



    return T;
}*/
