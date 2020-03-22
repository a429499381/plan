class RegEvent {
    constructor() {
        this.actions = {}
        this.keydowns = {}
        this.init()
    }
    init() {
        //event
        var self = this
        window.addEventListener('keydown', function (event) {
            self.keydowns[event.code] = true;
            // 比对获取KEY 响应的函数 并执行
            self.keyAction()
            //log('keydown')
        })
        window.addEventListener('keyup', function (event) {
            //log('keyup')
            self.keydowns[event.code] = false;

        })
    }

    regEvent(key) {
        var self = this
        window.addEventListener(key, function (event) {
            //log('keyup')
            if (event.code === 'mousedown') {
                self.keydowns[event.code] = true;
                // 比对获取KEY 响应的函数 并执行
                self.keyAction()
                //log('keydown')
            }
            if (event.code === 'mouseup') {
                self.keydowns[event.code] = false;
                self.keydowns['mousemove'] = false;
            }
            if (event.code === 'mousemove') {
                self.keydowns[event.code] = true;
                // 比对获取KEY 响应的函数 并执行
                self.keyAction()
                //log('keydown')
            }

        })
    }

    // 把回调函数 存在相应的KEY
    register = (key, callback) => {
        // ('key ok', key)
        this.actions[key] = callback;
    }

    // 移除 注册
    RemoveRegister = (key) => {
        this.actions[key] = false
        this.keydowns[key] = false
        //log('RemoveRegister',  this.keydowns[key])
        return false
    }

    // 比对 响应按键 执行保存回调函数
    keyAction() {
        var actions = Object.keys(this.actions);
        if (actions) {
            for (var i = 0; i < actions.length; i++) {
                let key = actions[i];
                if (this.keydowns[key] && this.actions[key]) {
                    //如果按键被按下，调用注册的ACTION
                    //               this.keydowns[key] = false
                    ////log('执行了按下后调函数', key)
                    this.actions[key](key);
                    // this.actions[key]();

                }
            }
        }


    }

}