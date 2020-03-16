//单例代理
const sing = (function () {
    var r = null
    return function (f, args) {
        // 只有第一次 r 为 null 或者 r 不是 f 的实例
        if (!r || r instanceof f === false) {
            r = new f(args)
        }
        return r

    }

})()