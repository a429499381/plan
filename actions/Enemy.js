class Enemy extends Articles {
    constructor(path, config) {
        super(path, config)
        this.setup()
    }
    setup() {
        this.y += this.speedY
    }
    regKey() {
        this.regEvent.register('Space', () => {
            this.fire()
        })
        this.isRegKey = true
    }

    move = () => {
            this.y += this.speedY;
    }

    fire(){
        this.isFire = !this.isFire
    }


}





