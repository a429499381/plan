class Pr {
    constructor(obj) {
        //必须要传 路径 x y
        this.x = obj.x
        this.y = obj.y
        this.game = new ShareDate(this)
        this.setup()
    }

    setup() {
        this.pengArr = []
        this.vy = 0.2
        this.gy = 1
        let g = this.game
        let p = this.pengArr
        for (let i = 1; i < 30; i++) {
            let peng = {
                // image:  new Articles('img/peng.png').image
                image: g.ui.imgPathP(obj.path) ,
                name: `prPeng${i}`,
                vx: 0,
                vy: 0,
            }
            peng.vx += g.Between(-10, 10)
            peng.vy += g.Between(-10, 10)
            peng.x = this.x + peng.vx
            peng.y = this.y + peng.vy
            p.push(peng)
        }

        log('爆炸效果数组', this.pengArr)

    }

    update() {

    }

    draw() {

    }


}


