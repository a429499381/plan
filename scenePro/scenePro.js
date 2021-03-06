class ScenePro {
    constructor(run) {
        this.imgAll = run.img
        this.imgP = {}
        this.init()
    }
    init(){
        this.level = 0 
        this .score = 0
        this.EleArr = []
        this.OtherArr = []  
        this.zoom = 0.5
        this.route = sing(Route, this)
        this.ui = sing(Ui)
        this.regEvent = sing(RegEvent)
        this.sceneWidth = this.ui.canvas.clientWidth * 2 || 400
        this.sceneHeight = this.ui.canvas.clientHeight * 2 || 400
        this.isgameOver = false

        // 预加载图片
        // this.toImg(this.imgAll)
        // page
        this.title = sing(Title, this)
        // this.title = new Title(this)
        this.gameEnd = sing(GameEnd, this)
        this.mapEdit = sing(MapEdit, this)
        // this.gameEnd = new GameEnd(this)
        this.route.add('gameStart', this)

        // 初始画面
        this.route.to('title')

    }
   

    Between(min, max) {
        let t = Math.floor(Math.random() * (max + 1 - min)) + min;
        return t
    }


    // 添加 要渲染的 this
    addEle(b) {
        this.EleArr.push(b)
    }

    addOther(path, x = 0, y = 0) {
        let b = {
            image: this.ui.imgPath(path),
            name: path,
            x: x,
            y: y,
        }
        this.OtherArr.push(b)
    }

    writeScore(text) {
        var texts = `分数: ${text}`
        this.ui.writeText(texts)
    }

    update() {
        if (this.isgameOver) {
            return 'gameover is scenePro update()'
        }

        this.EleArr.forEach(E => {
            E.update()
        })
    }

    draw() {
        if (this.isgameOver) {
            return 'gameover is scenePro draw()'
        }
        this.ui.clearUi()

        this.OtherArr.forEach(img => {
            this.ui.context.drawImage(img.image, img.x, img.y,);
        })

        this.EleArr.forEach(E => {
            E.draw()
        })

        this.writeScore(this.score)
    }


}