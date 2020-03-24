class Ui {
    constructor() {
        this.setup()
    }

    setup() {
        this.canvas = document.querySelector('#id-canvas');
        this.context = this.canvas.getContext('2d');
    }

    dateUi = (arr) => {
        var self = this
        for (let i = 0; i < arr.length; i++) {
            self.drawImage(arr[i])
        }
    }
    

    imgPath(path) {
        // 必须是路径, 并且结尾必须 png jpg
        let s = {}
        if (typeof path !== 'string') {
            console.log('imPath 参数不是路径', this.constructor.name)
            return 'no is string'
        }
        if (typeof path === 'string' && path.length > 3) {
            s.str = path.slice(-3).toLowerCase()
            if (s.str !== "png" && s.str !== "jpg") {
                console.log('imPath中类型不匹配 不是png jpg', this.constructor.name)
                return 'no is png or jps'
            }

            //消除首位斜杠
            path.slice(0, 1) === '/' ? s.path = path.slice(1) : s.path = path
        }

        // //实际代码
        // let img = new Image();
        // img.src = s.path || path;
        // return img

        //实际代码
        let img = new Image();
        img.src = s.path || path;
        // console.time(path)
        img.onload = function () {

            // console.timeEnd(path)
        }
        return img
    }
    // Promise 版  返回对象
    imgPathPromise(path) {
        return new Promise((res, rej) => {
            // 必须是路径, 并且结尾必须 png jpg
            let s = {}
            if (typeof path !== 'string') {
                rej('imPath 参数不是路径')
                return 'no is string'
            }
            if (typeof path === 'string' && path.length > 3) {
                s.str = path.slice(-3).toLowerCase()
                if (s.str !== "png" && s.str !== "jpg") {
                    rej('imPath中类型不匹配 不是png jpg')
                    return 'no is png or jps'
                }

                //消除首位斜杠
                path.slice(0, 1) === '/' ? s.path = path.slice(1) : s.path = path
            }
            // 超时退出
            setTimeout(() => {
                rej(path)
            }, 1000);


            //实际代码
            let img = new Image();
            img.src = s.path || path;
            // console.time(path)    
            img.onload = function () {
                res({
                    image: img,
                    src: path,
                    w: img.width,
                    h: img.height,
                })
            }
        })


    }


    //writeUi
    drawImage = (img, scale = 0.5) => {
        //类型检查
        if (!img) {
            return
        }
        if (typeof img !== 'object' && !img.x && !img.y) {
            console.log('drawImage 请检查img参数', this.constructor.name)
            return 'drawImage img is no object or img.x img.y is undefined'
        }

        this.context.save()
        this.context.scale(scale, scale)
        this.context.drawImage(img.image, img.x, img.y);
        this.context.restore()
    }


    writeText(text, config = { x: 20, y: 740 }) {
        let cx = this.context
        cx.font = "24 sans-serif";
        cx.fillStyle = 'white'
        cx.fillText(text, config.x, config.y)
    }

    //  清除图层
    clearUi = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


}

