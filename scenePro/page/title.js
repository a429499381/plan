class Title extends Page {
	constructor(game) {
		super(game)
		//route

		this.game.route.add('title', this)

	}

	setup() {
		this.title = {
			name: '按 空格Space 开始游戏\r\n	按 P 地图编辑',

		}

		this.game.regEvent.register('KeyP', () => {
			this.update('KeyP', 'mapEdit')
		})

		this.init(this.title.name)
	
	}

}



class GameEnd extends Page {
	constructor(game) {
		super(game)
		//route
		this.game.route.add('gameEnd', this)
	}

	setup() {
		this.title = {
			name: "按 空格  重新开始游戏",
		}
		this.init(this.title.name)

	}
}
