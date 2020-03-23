class MapEdit {
    constructor(game) {
        this.game = game
        this.reg = this.game.regEvent.register
        // 引入抓取
        this.reg = sing(RegEvent)
        this.drag = new Drag()
        this.isDrag = false

        //添加进路由
        this.game.route.add('mapEdit', this)
        //this.setup()
    }
    setup() {
        this.img = {
            bg: "img/bg1.jpg",

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
            this.toImgArr(this.enemy, this.draw)
        })

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
    MouseDown = () => {
        if (this.isDrag) {
            log('addMouseDown')
        }
    }
    MouseUp = () => {
        if(this.isDrag){
            log('addMouseUp')
        }
    }
    MouseMove = (obj) => {
        if(this.isDrag){
            log('addMouseMove', obj)
        }
    }

    update(data) {
        log('this.update keyS')
    }

    draw = (img, scale = 0.4) => {

        this.game.ui.drawImage(img, scale)
    }

    toImgArr(object, call) {
        const Arr = []
        for (const key in object) {
            if (key !== undefined && object.hasOwnProperty(key)) {
                const image = this.game.ui.imgPathPromise(object[key])
                Arr.push(image)
            }
        }

        Arr.forEach((element, index) => {
            element.then(obj => {
                object[obj.src] = {
                    x: this.game.sceneWidth - obj.w,
                    y: 50 * index + obj.h,
                }
                return Object.assign(object[obj.src], obj)
            }).then(img => {
                call(img)
            }).catch((err) => {
                log('map edit toImgArr err', err)
            })
        });
    }



}
