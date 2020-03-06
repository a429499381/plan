class ScenePro {
    constructor() {
        this.setup()
    }

    setup() {
        this.level = 0
        this.EnemyArr = []
        this.PlayerArr = []
        this.sceneWidth = 600
        this.sceneheight = 800
    }

    addEnemy = (obj) => {
        this.EnemyArr.push(obj)
    }
    addPlayer(b) {
        this.PlayerArr.push(b)
    }

    collideArr = (ballArr, objArr) => {
        let isC = false

        if(!Array.isArray(ballArr) && !Array.isArray(objArr)) {
            log('collideArr 参数不是数组')
            return  false
        }
        for (let i = 0; i < ballArr.length; i++) {
            for (let j = 0; j < objArr.length; j++) {
                if (!ballArr[i].kill && !objArr[j].kill ) {
                    isC = collide(ballArr[i], objArr[j])
                    if (isC) {
                        this.actions(ballArr[i], objArr[j])
                        return true
                    }
                }

            }
        }
        this.actions = function (ball, obj) {
            if(obj.name === 'paddle'){
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

    addObjArr(num) {
        for (let i = 0; i <= num; i++) {
            var black = new Black(imgS.black, blackConfig);
            //设置坐标
            if (black.x > 0 && black.x + black.w * 2 < this.sceneWidth) {
                black.x = (black.x + i * (black.w + 15));
                //log('addObjArr', black.x + "  ", black.w)
                black.name = i
            }
            this.addObj(black)
        }
    }

    draw() {
        this.ui.clearUi()
        this.ui.drawImage(this.bg)

        for (let i = 0; i < this.PlayerArr.length; i++) {
            let obj = this.PlayerArr[i]
            if (obj.kill !== true) {
                this.ui.drawImage(obj)
            }
        }
      /*  for (let i = 0; i < this.PlayerArr.length; i++) {
            let obj = this.PlayerArr[i]
            if (obj.kill !== true) {
                this.ui.drawImage(obj)
            }
        }*/

        for (let i = 0; i < this.EnemyArr.length; i++) {
            let obj = this.EnemyArr[i]
            if (obj.kill !== true) {
                this.ui.drawImage(obj)
            }
        }
    }

    update = () => {
    }
}