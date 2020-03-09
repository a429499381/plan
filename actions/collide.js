//碰撞检测
/* 最难调试碰撞检测 */
var collide = function (ball, paddle) {
    // 参数检查
    if (!ball || ball.length < 1 || !paddle || paddle.length < 1) {
        log(ball, paddle, 'collide碰撞检测参数是空数组')
        return false
    }
    if (!ball.x || !ball.y || !ball.w || !ball.h) {
        log(ball, paddle, 'collide碰撞检测参数不全')
        return false
    }
    if (!paddle.x || !paddle.y || !paddle.w || !paddle.h) {
        log(ball, paddle, 'collide碰撞检测参数不全')
        return false
    }

    var leftX = ball.x
    var rightX = ball.x + (ball.image.width || ball.w)
    var leftY = ball.y
    var rightY = ball.y + (ball.image.height || ball.h)

    // 球的左上点X 检测
    if (leftX > paddle.x && leftX < paddle.x + paddle.w) {
        if (leftY > paddle.y && leftY < paddle.y + paddle.h) {
            log('x 左上点相撞')
            return true
        }
    }
    // 球的右上点x 检测
    if (rightX > paddle.x && rightX < paddle.x + paddle.w) {
        if (leftY < paddle.y + paddle.h && leftY > paddle.y) {
            log('x 右上点相撞')
            return true
        }
    }
    // 球的左下点  检测
    if (rightY > paddle.y && rightY < paddle.y + paddle.h) {
        if (leftX > paddle.x && leftX < paddle.x + paddle.w) {
            log('y 左下点 相撞')
            return true
        }
    }

    // 球的右下点 检测
    if (rightY > paddle.y && rightY < paddle.y + paddle.h) {
        if (rightX > paddle.x && rightX < paddle.x + paddle.w) {
            log('y 右下点相撞')
            return true
        }
    }

    return false
}
