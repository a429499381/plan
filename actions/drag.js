// 拖拽
var Drag = function (GameObj) {
    var d = {
        isMove: false,
        dragEn: false,
        isRegKey: false,
    }
    log('GameObj', GameObj)
    var game = 0
    //  鼠标移动X Y
    d.addMouseMove = function (event) {
        if (!event) {
            return false
        }
        log('addMouseMove', event.clientX)
        d.keydowns[event.type] = true
        game.ball.x = event.clientX - 8
        game.ball.y = event.clientY - 6

    }
    d.addMouseUp = function (event) {
        log('mouseUp', event)
        d.keydowns[event.type] = false
        window.removeEventListener('mousemove', d.addMouseMove)
        d.isMove = false
    }
    d.addMouseDown = function (event) {
        if (d.timeIdDown) {
            return false
        }
        d.timeIdDown = setTimeout(function () {
            if (!event) {
                log('addMouseDown 不存在')
                return false
            }
            event ? d.keydowns[event.type] = true : '';
            d.isMove = true
            if (d.isMove) {
                window.addEventListener('mousemove', d.addMouseMove)
            }

            d.timeIdDown = null
        }, 500)

    }

    // 按下P 开启关闭拖拽
    d.dragEnable = function () {
        d.dragEn = !d.dragEn
        if (d.dragEn) {
            log('开启关闭 拖拽', d.dragEn)
            // 鼠标事件
            window.addEventListener('mouseup', d.addMouseUp)
            window.addEventListener('mousedown', d.addMouseDown)
        } else {
            window.removeEventListener('mousedown', d.addMouseDown)
            window.removeEventListener('mouseup', d.addMouseUp)
            // window.removeEventListener('mousemove', d.addMouseMove)
        }
    }


    // 注册拖拽事件
    d.regDragEvent = function (g) {
        // 把回调函数 存在相应的KEY
        var register = function (key, callback) {
            // ('key ok', key)
            d.actions[key] = callback;
        }
        game = g
        register('mousedown', d.addMouseDown)
        register('mousemove', d.addMouseMove)
        register('mouseup', d.addMouseUp)
        register('KeyP', function () {
            d.dragEnable()
        })
    }
/*    d.num = 0
    d.regDrgAction = function () {
        // 比对 响应按键 执行保存回调函数
        var actions = Object.keys(d.actions);
        if (actions) {
            for (let i = 0; i < actions.length; i++) {
                let key = actions[i];
                if (d.keydowns[key]) {
                    //如果按键被按下，调用注册的ACTION
                    log('drag执行了按下后调函数', d.num += 1, '   ', i, '  ', d.keydowns)
                    d.keydowns[key] = false
                    d.actions[key]();
                    return true
                }
            }
        }

    }*/


    return d
}