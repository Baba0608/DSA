function orangesRotting(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let queue = [];
  let fresh = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
      else if (grid[i][j] == 1) fresh++;
    }
  }

  let time = 0;
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length && fresh) {
    let n = queue.length;
    for (let k = 0; k < n; k++) {
      let [i, j] = queue.shift();

      for (let direction of directions) {
        let [dx, dy] = direction;
        let x = i + dx;
        let y = j + dy;

        if (x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y] === 1) {
          grid[x][y] = 2;
          queue.push([x, y]);
          fresh--;
        }
      }
    }
    time++;
  }

  return fresh == 0 ? time : -1;
}
