class SceneGame extends ScenePro {
    constructor(run) {
        super()
        this.run = run
        // this.setup()
    }

    setup = () => {
        this.SceneGameTimeId = -1
        this.palyer = new Articles(this.run.img.player, {name: 'player', x: 160, y: 550})
        this.bg = new Articles('img/bg0.jpg', {x: 0, y: 0})

        // 加入相应数组
        this.addPlayer(this.bg)
        this.addPlayer(this.palyer)
        this.addObjArr(this.run.img.yun0, 3, 'Other')
        this.addObjArr(this.run.img.enemy0, 3, 'Enemy')
        this.addObjArr(this.run.img.enemy6, 3, 'Enemy')
        this.addObjArr(this.run.img.enemy7, 2, 'Enemy')
        //循环
        this.update()
    }

    moveEnemy(arr) {
        for (let i = 0; i < arr.length; i++) {
             if(!arr[i].speed) {
                 arr[i].speed = 1
             }else {
                 arr[i].y += arr[i].speed;
             }
        }
    }


    update = () => {

        let gameOver = false
        if (this.SceneGameTimeId > 0) {
            return false
        }

        this.SceneGameTimeId = setInterval(() => {
            if (gameOver) {
                this.BallArr = []
                this.ObjArr = []
                //this.setup()
                gameOver = false
                clearInterval(this.SceneGameTimeId)
                this.SceneGameTimeId = -5
                log(' this.SceneGameTimeId', this.run)
                this.run.titlePage.setup()
                return false
            }
            this.moveEnemy(this.EnemyArr)
            this.draw()
        }, 1000 / 30)
    }

}