class Route {
    constructor(game) {
        this.game = game
        this.actions = {}
    }

    add(page, setup) {
        this.actions[page] = setup
        log('router add',this.actions)
    }
    remove(page) {
        this.actions[page] = ''
    }
    to(page) {
        this.actions[page].setup()
        log('router to',this.actions)
        // this.game.[page].setup()
    }
}