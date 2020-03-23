class MapEdit {
    constructor(game) {
        this.game = game
        this.reg = this.game.regEvent.register
        // 引入抓取
        this.reg = sing(RegEvent)
        this.drag = new Drag()
        this.isDrag = true
        this.playArr = []
        this.PlayNewArr = []
        this.playN = 1
        this.zoom = 0.3
        this.maxZoom = 1 / this.zoom
        //添加进路由
        this.game.route.add('mapEdit', this)
        //this.setup()
    }
    setup() {
        this.img = {
            bg: "img/bg1.jpg",

        }
        this.text = {
            txt: '编辑模式 S按键保存退出',
            x: 50,
            y: this.game.sceneHeight - 20,
        }
        this.enemy = {
            player: "img/player1.png",
            enemy0: "img/Enemy0.png",
            enemy1: "img/Enemy1.png",
            enemy2: "img/Enemy2.png",
            enemy3: "img/Enemy3.png",
            enemy4: "img/Enemy4.png",
            enemy5: "img/Enemy5.png",
            enemy6: "img/Enemy6.png",
            enemy7: "img/Enemy7.png",
            enemy8: "img/Enemy8.png",
            enemy9: "img/Enemy9.png",
            enemy10: "img/Enemy10.png",
        }
        let image = this.game.ui.imgPathPromise(this.img.bg)
        this.bg = {
            src: this.img,
            name: 'bg',
            x: 0,
            y: 0,
        }
        image.then(img => {
            return Object.assign(this.bg, img)
        }).then((v) => {
            this.draw(v, 1)
            this.game.ui.writeText(this.text.txt)
        })
        this.toImgArr(this.enemy)

        this.reg.register('KeyS', this.update)
        this.reg.register('mousedown', this.MouseDown)

        this.reg.register('mouseup', this.MouseUp)
        this.reg.register('KeyP', this.MouseEn)
        // 写入

    }
    MouseEn = () => {
        this.isDrag = !this.isDrag
        log('mouseEn', this.isDrag)
        if (this.isDrag) {
            this.reg.register('mousemove', this.MouseMove)
        } else {
            this.reg.RemoveRegister('mousemove')
        }
    }
    MouseDown = (obj) => {
        if (this.isDrag) {
            log('addMouseDown', obj)
            let play = {}
            let offx = 60
            let offy = 10
            let maxTop = (this.game.sceneHeight / 4 - 100) * this.maxZoom
            let maxBottom = (this.game.sceneHeight - 200) * this.maxZoom
            let p = this.playArr[this.playN]
            p.then((img) => {
                Object.assign(play, obj)
                Object.assign(play, img)
                play.x = play.x * this.maxZoom - offx * this.maxZoom - play.w / 2
                play.y = play.y * this.maxZoom - offy * this.maxZoom - play.h / 2
                play.zoom = this.zoom
                // 保存当前屏幕飞机坐标
                this.PlayNewArr.push(play)
                if (this.playN > this.playArr.length - 2) {
                    this.playN = 0
                }

                // 条件判断 敌机 在 屏幕上半部分    我方在屏幕的底部200px
                if ((play.y + play.h) > maxTop) {
                    play.y = maxTop
                }
                this.draw(play, this.zoom)
                // this.game.ui.drawImage(play, this.zoom)
                this.playN += 1
            })
        }
    }
    MouseUp = (obj) => {
        if (this.isDrag) {
            log('addMouseUp', obj)
        }
    }
    MouseMove = (obj) => {
        if (this.isDrag) {
            log('addMouseMove', obj)
        }
    }

    update(data) {
        log('this.update keyS')
    }

    draw = (img, scale = 0.4) => {

        this.game.ui.drawImage(img, scale)
    }

    toImgArr(object) {
        for (const key in object) {
            if (key !== undefined && object.hasOwnProperty(key)) {
                const image = this.game.ui.imgPathPromise(object[key])
                this.playArr.push(image)
            }
        }
    }



}
