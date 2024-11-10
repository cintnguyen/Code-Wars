// 8 kyu
// Duck Duck Goose

// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

function duckDuckGoose(players, goose) {
    const index = (goose - 1) % players.length;
      return players[index].name;
}