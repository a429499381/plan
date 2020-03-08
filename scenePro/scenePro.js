class ScenePro {
    constructor() {
        this.setup()
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

    addOther = (obj) => {
        this.EnemyArr.push(obj)
        return this
    };
    addEnemy = (obj) => {
        this.EnemyArr.push(obj)
    }
    addPlayer = (b) => {
        this.PlayerArr.push(b)
    }

    collideArr = (ballArr, objArr) => {
        let isC = false

        if (!Array.isArray(ballArr) && !Array.isArray(objArr)) {
            log('collideArr 参数不是数组')
            return false
        }
        for (let i = 0; i < ballArr.length; i++) {
            for (let j = 0; j < objArr.length; j++) {
                if (!ballArr[i].kill && !objArr[j].kill) {
                    isC = collide(ballArr[i], objArr[j])
                    if (isC) {
                        this.actions(ballArr[i], objArr[j])
                        return true
                    }
                }

            }
        }
        this.actions = function (ball, obj) {
            if (obj.name === 'paddle') {
                ball.rebound()
                return true
            }

            if (obj.name >= 0 && obj.name < objArr.length) {
                ball.rebound()
                obj.isKill()
                return true
            }

            return false
        }
    }

    addObjArr(path, num, type) {
        let n = this.Between(1, num)
        for (let i = 0; i < n; i++) {
            var black = new Articles(path, {x: 0, y: 0})
            //设置坐标
            black.x = (this.Between(40, 340));
            black.y = (this.Between(40, 100));
            black.name = Symbol(i)

          //  log('scenePro addObjArr', black.x)

            if (type === 'Enemy') {
                this.addEnemy(black)
            }
            if (type === 'Player') {
                this.addPlayer(black)
            } else {
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
            this.ui.drawImage(obj)
        }


    }

    update = () => {
    }
}