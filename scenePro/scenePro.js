class ScenePro {
    constructor() {
        this.setup()
    }

    setup() {
        this.level = 0
        this.ObjArr = []
        this.BallArr = []
        this.sceneWidth = 600
        this.sceneheight = 500
    }

    addObj = (obj) => {
        this.ObjArr.push(obj)
    }
    addBall(b) {
        this.BallArr.push(b)
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
        for (let i = 0; i < this.ObjArr.length; i++) {
            let obj = this.ObjArr[i]
            if (obj.kill !== true) {
                this.ui.drawImage(obj)
            }
        }

        for (let i = 0; i < this.BallArr.length; i++) {
            let obj = this.BallArr[i]
            if (obj.kill !== true) {
                this.ui.drawImage(obj)
            }
        }
    }

    update = () => {
    }
}