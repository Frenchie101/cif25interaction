let cols, rows;
let grid = [];
let squareSize;
let selected = null;
let simulateColorblind = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  squareSize = 80;
  cols = floor(width / squareSize);
  rows = floor(height / squareSize);

  generateGrid();
}

function draw() {
  background(220);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j]) {
        fill(grid[i][j]);
        stroke(0);
        strokeWeight(selected && selected.x === i && selected.y === j ? 4 : 1);
        rect(i * squareSize, j * squareSize, squareSize, squareSize);
      }
    }
  }

  if (simulateColorblind) {
    filter(GRAY);
  }
}

// Swap squares on click
function mousePressed() {
  let i = floor(mouseX / squareSize);
  let j = floor(mouseY / squareSize);

  if (i >= 0 && i < cols && j >= 0 && j < rows && grid[i][j]) {
    if (!selected) {
      selected = { x: i, y: j };
    } else {
      let temp = grid[selected.x][selected.y];
      grid[selected.x][selected.y] = grid[i][j];
      grid[i][j] = temp;
      selected = null;
    }
  }
}

// Toggle colorblind simulation
function keyPressed() {
  if (key === 'c' || key === 'C') {
    simulateColorblind = !simulateColorblind;
  }
}

// Handle window resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cols = floor(width / squareSize);
  rows = floor(height / squareSize);
  generateGrid();
}

// Generate grid function
function generateGrid() {
  grid = [];
  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      // Leave a vertical strip in the center for instructions
      if (i === floor(cols / 2)) {
        grid[i][j] = null;
      } else {
        grid[i][j] = color(random(100, 255), random(100, 255), random(100, 255));
      }
    }
  }
}
