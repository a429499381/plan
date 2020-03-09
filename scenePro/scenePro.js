class ScenePro {
    constructor(img) {
        this.setup()
        this.img = img
    }

    setup() {
        this.level = 0
        this.EnemyArr = []
        this.PlayerArr = []
        this.OtherArr = []
        this.BulltesArr = []
        this.sceneWidth = 400
        this.sceneheight = 760
        this.ui = sing(Ui)
        this.regEvent = sing(RegEvent)


    }

    Between(min, max) {
        let t = Math.floor(Math.random() * (max + 1 - min)) + min;
        return t
    }

    // 子弹
    addBulltesArr = (obj) => {
        this.BulltesArr.unshift(obj)
    }
    addOther = (obj) => {
        this.OtherArr.push(obj)
    };
    //敌机
    addEnemy = (obj) => {
        this.EnemyArr.push(obj)
    }
    // 选手
    addPlayer = (b) => {
        this.PlayerArr.push(b)
    }
    // 添加 飞机 云 子弹 等等
    addObjArr(path, type, num = 1 ) {
        let n = this.Between(1, num)
        for (let i = 0; i < n; i++) {
            var black = new Articles(path, {x: 0, y: 0})
            //设置坐标
            if (!black || !black.image) {
                log(black, `miss`)
            }
            black.num = i
            black.w = black.image.width || 0
            black.h = black.image.height || 0
            black.x = (this.Between(40, 340));
            black.y = (this.Between(40, 100));
            black.name = Symbol(type)

            //  //log('scenePro addObjArr', black.x)

            if (type === 'Enemy') {
                black.pass = false
                this.addEnemy(black)
            }
            if (type === 'Player') {
                this.addPlayer(black)
            } else if (type === 'Other') {
                this.addOther(black)
            }
        }
    }

    draw() {
        this.ui.clearUi()
        for (let i = 0; i < this.PlayerArr.length; i++) {
            let obj = this.PlayerArr[i]
            this.ui.drawImage(obj)
        }

        for (let i = 0; i < this.EnemyArr.length; i++) {
            let obj = this.EnemyArr[i]
            // 超过地图边界重置
            if (obj.y > this.sceneheight) {
                obj.y = this.Between(0, 50)
                obj.x = this.Between(0, 300)
            }
            obj.y += 1
            this.ui.drawImage(obj)
        }

        for (let i = 0; i < this.OtherArr.length; i++) {
            let obj = this.OtherArr[i]
            obj.y += 1
            this.ui.drawImage(obj)
        }

        for (let i = 0; i < this.BulltesArr.length; i++) {
            let obj = this.BulltesArr[i]
            // 每次循环移动一次
            obj.y -= obj.speed

            // 子弹飞出界面 移除
            if (obj.y < -obj.h) {
                this.BulltesArr.pop()
            }
            this.ui.drawImage(obj)
        }


    }
    // 碰撞数组检测
    collideArr(playArr, enemyArr) {
        for (let i = 0; i < playArr.length; i++) {
            for (let j = 0; j < enemyArr.length; j++) {
                let play = playArr[i]
                let enem = enemyArr[j]
                if (!enem.pass) {
                    // 比较是否碰撞
                    let result = collide(play, enem)
                    if (result) {
                        enem.pass = true
                        play.passNum = i
                        enem.passNum = j
                        this.collideAction(playArr, play.passNum)
                        this.collideAction(enemyArr, enem.passNum)

                    }
                }

            }
        }
    }
    //碰撞结果处理
    collideAction(obj, num) {
        //首位移除
        if(num === 0) {
            obj.shift()
            return  '首位'
        }
        //末尾移除
        if(num === obj.length) {
            obj.pop()
            return '末尾'
        }
        for (let i = num; i < obj.length; i++) {
            obj[i] = obj[i+1]
        }
    }

    update = () => {
    }

}