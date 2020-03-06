class Black extends Articles {
    constructor(game, path, config) {
        super(game, path, config)
        this.setup()
    }
    setup() {

    }
    isKill() {
        this.life -= 1
        if(this.life <= 0) {
            this.kill = true;
            return  this.kill
        }
        return false
    }
}


/*
var Black = function () {
    var image = imgPath(imgS.black);
    var o = {
        image: image,
        x: blackConfig.x,
        y: blackConfig.y,
        w: blackConfig.w,
        h: blackConfig.h,
        life: blackConfig.life,
        kill: blackConfig.kill,
        blackNum: blackConfig.blackNum,
        blacksArr: [],
    }


    o.toKill = function () {
        o.kill = true;
    }

    return o;
}*/
