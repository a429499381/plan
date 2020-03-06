class RegEvent{
        constructor() {
            this.actions = {}
            this.keydowns = {}
            this.init()
        }
        init() {
            //event
        var self = this
        window.addEventListener('keydown', function (event) {
            var key = event.code
            self.keydowns[event.code] = true;
            // 比对获取KEY 响应的函数 并执行
            self.keyAction()
        })
        window.addEventListener('keyup', function (event) {
            self.keydowns[event.code] = false;

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
        log('RemoveRegister',  this.keydowns[key])
        return false
    }

    // 比对 响应按键 执行保存回调函数
    keyAction() {
        var actions = Object.keys(this.actions);
        if (actions) {
            for (var i = 0; i < actions.length; i++) {
                var key = actions[i];
                if (this.keydowns[key] && this.actions[key]) {
                    //如果按键被按下，调用注册的ACTION
                    this.keydowns[key] = false
                    //log('执行了按下后调函数', key)
                    this.actions[key]();

                }
            }
        }


    }

}