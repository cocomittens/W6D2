const Game = require('./game');
const View = require('./ttt-view');

  $(() => {
    const baseClass = $('.ttt');
    const game = new Game();
    new View(game, baseClass);
  });
