class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (e => {
      let $space = $(e.currentTarget);
      this.makeMove($space);
    }));
  }

  makeMove($space) {
    const player = this.game.currentPlayer;
    const pos = $space.data("pos");
    this.game.playMove(pos);
    $space.addClass(player);
  }

  setupBoard() {
    const $ul = $("<ul>");

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $("<li>");
        $li.data("pos", [i, j])
        $ul.append($li);
      }
    }

    this.$el.append($ul);
    
  }
}

module.exports = View;
