/*var log = console.log.bind(console);*/
var {log} = console
function main() {
    window.onload = function () {
        var run = {}
        run.sceneGame = new SceneGame(run)
        run.titlePage = new Title(run)
        run.titlePage.setup()
    }
}

main();

