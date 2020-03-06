//碰撞检测
/* 最难调试碰撞检测 */
var collide = function (ball, paddle) {
    var leftX = ball.x
    var rightX = ball.x + ball.image.width
    var leftY = ball.y
    var rightY = ball.y + ball.image.height
    
    // 球的左上点X 检测
    if (leftX > paddle.x && leftX < paddle.x + paddle.image.width) {
        if (leftY > paddle.y && leftY < paddle.y + paddle.image.height) {
            //log('x 左上点相撞')
            return true
        }
    }
    // 球的右上点x 检测
    if (rightX > paddle.x && rightX < paddle.x + paddle.image.width) {
        if (leftY < paddle.y + paddle.image.height && leftY > paddle.y) {
           // log('x 右上点相撞')
            return true
        }
    }
    // 球的左下点  检测
    if (rightY > paddle.y && rightY < paddle.y + paddle.image.height) {
        if (leftX > paddle.x && leftX < paddle.x + paddle.image.width) {
           // log('y 左下点 相撞')
            return true
        }
    }

    // 球的右下点 检测
    if (rightY > paddle.y && rightY < paddle.y + paddle.image.height) {
        if (rightX > paddle.x && rightX < paddle.x + paddle.image.width) {
          // log('y 右下点相撞')
            return true
        }
    }

    return false
}
