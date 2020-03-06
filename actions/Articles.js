class Articles {
    constructor(path, config) {
        //this.game = game
        this.init(path, config)
        this.regEvent = sing(RegEvent)
        // this.regEvent = new RegEvent()

    }

    init(path, config) {
        //导入配置表
        for (let key in config) {
            this[key] = config[key]
        }
        // this.imgPath(path)
       // this.image = this.imgPath(path)
         this.imgPathP(path)

         //log('Articles init', this.image)
    }

    imgPath(path) {
        const img = new Image();
        img.src = path;
        return img
    }

    imgPathP(path) {
        return new Promise(function (resolve, reject) {
            const img = new Image();
            img.src = path;
            img.onload = function () {
               // log('ok')
                resolve(img)
            }
        }).then(value => {
            this.image = value
        })

    }


}