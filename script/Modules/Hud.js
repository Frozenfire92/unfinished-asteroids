app.game.hud = {

  render: function(delta) {

    var player = app.game.players[0];

    this.renderBar(16, 16, 80, 6, player.hp / player.maxHp, "#08f");
    this.renderScore(624, 32, 32, "#FFF", "right", player.score);
  },

  renderScore: function(x, y, fontSize, color, align, score) {
    app.layer
        .fillStyle(color)
        .font(fontSize + "px Arial")
        .textAlign(align)
        .fillText("Score: "+score, x, y);
  },

  renderBar: function(x, y, width, height, progress, color) {

    app.layer.fillStyle("#000").fillRect(x, y, width, height);
    app.layer.fillStyle(color).fillRect(x, y, width * progress, height);
    
  }

};
