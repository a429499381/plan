class MapEdit {
    constructor(game) {
        this.game = game
        this.reg = this.game.regEvent.register
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

        this.bg = {
            image: this.game.ui.imgPathPromise(this.img.bg),
            src: this.img,
            name: 'bg',
            x: 0,
            y: 0,

        }
        this.bg.image = this.bg.image.then(img => {
            return Object.assign(this.bg, img)
        })
        log(this.bg)
      
        this.toImgArr(this.enemy, this.draw)
        // this.toImgArr(this.enemy)
        this.reg('KeyS', this.update)
        // this.drag = new drag()

        // 写入


    }
    update(data) {

    }

    draw = (img) => {
        this.game.ui.drawImage(this.bg, 1)    
        this.game.ui.drawImage(img, 0.4)
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
                    y: 150 * index + obj.h ,
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
