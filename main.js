/*var //log = console.//log.bind(console);*/
var {log} = console
//用例测试模板
const enTest = (() => {
    let n = 0
    return function (res, message) {
        n += 1
        if (res) {
            log(`成功 ${n}`)
        } else {
            return log(`测试失败 ${message} ${n}`)

        }
    }
})()

function main() {
    window.onload = function () {
        var run = {}
        run.img = {
            bg: "/img/bg0.jpg",
            bg1: "img/bg1.jpg",
            bg2: "img/bg2.png",
            zhidan: 'img/zhidanPro.png',
            enemy: {
                enemy0: "img/Enemy0.png",
                enemy1: "img/Enemy1.png",
                enemy2: "img/Enemy2.png",
                enemy3: "img/Enemy3.png",
                enemy4: "img/Enemy4.png",
                enemy5: "img/Enemy5.png",
                enemy6: "img/Enemy6.png",
                enemy7: "img/Enemy7.png",
                enemy8: "img/Enemy8.png",
                enemy9: "img/Enemy9.png",
                enemy10: "img/Enemy10.png",
            },
            player: "img/player1.png",
            peng: "img/peng.png",
            bullets: "img/bullets.png",
            yun0: "img/yun0.png",
            yun1: "img/yun1.png",
        };
        //run.ShareObj = new ShareObj(run)
        // run.sceneGame = new SceneGame(run)
        run.player = new SceneGame(run)

        // run.titlePage = new Title(run)
        //run.titlePage.setup()
    }
}
  
main();

  