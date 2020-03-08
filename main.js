/*var //log = console.//log.bind(console);*/
var {log} = console
function main() {
    window.onload = function () {
        var run = {}
        run.img = {
            bg: "/img/bg0.jpg",
            player: "img/player1.png",
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
            peng: "img/peng.png",
            bullets: "img/bullets.png",
            yun0: "img/yun0.png",
            yun1: "img/yun1.png",
        };
        run.sceneGame = new SceneGame(run)
        run.titlePage = new Title(run)
        //run.titlePage.setup()
        run.sceneGame.setup()
    }
}

main();

