class Ui {
    constructor() {
        this.setup()
    }

    setup() {
        this.canvas = document.querySelector('#id-canvas');
        this.context = this.canvas.getContext('2d');
    }

    //writeUi
    drawImage = (image) => {
        this.context.drawImage(image.image, image.x, image.y,);
    }

    writeText(text, config = {x: 20, y: 740}) {
        let cx = this.context
        cx.font = "24px sans-serif";
        cx.fillStyle = 'white'
        cx.fillText(text, config.x, config.y)
    }

    //  清除图层
    clearUi = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    dateUi = (arr) => {
        var self = this
        for (var i = 0; i < arr.length; i++) {
            var t = arr[i]
            if (t.kill === false) {
                self.drawImage(arr[i])
            }
        }
    }
}

