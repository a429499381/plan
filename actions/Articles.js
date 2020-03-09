class Articles{
    constructor(path, config = {x: 0, y: 0}) {
        this.init(path, config)

    }

    init(path, config) {
        //导入配置表
        for (let key in config) {
            this[key] = config[key]
        }
       this.image = this.imgPath(path)
       //  this.imgPathP(path)


    }

    imgPath(path) {
        let img = new Image();
        img.src = path;
        return img
    }

    imgPathP(path) {
        return new Promise(function (resolve, reject) {
            const img = new Image();
            img.src = path;
            img.onload = function () {
               log('ok')
                resolve(img)
            }
        }).then(value => {
            this.image = value
        })

    }


}