'use strict'

//Создание доски
for (let i = 0; i < 64; i++) {
  let innerDiv = document.createElement('div');
  let elem = document.getElementById('chessBoard');
  elem.appendChild(innerDiv);
  innerDiv.classList.add(parseInt((i / 8) + i) % 2 == 0 ? 'black' : 'white');
  innerDiv.setAttribute('row', parseInt(i / 8));
  innerDiv.setAttribute('column', parseInt(i % 8));
  innerDiv.classList.add('cell');
}

const cells = [...document.getElementsByClassName('cell')];

[].forEach.call(cells, function(cell) {
  cell.addEventListener('click', horseChess)
});

//Флаг клика, метки первого и второго клика (для смены класса элемента)
let clicked = false;
let firstClick, secondClick;

function horseChess() {
  if (!clicked) {
    if (secondClick !== undefined) {
      secondClick.classList.remove('selected');
    }
    clicked = true;
    firstClick = this;
    firstClick.classList.add('selected');
  } else {
    clicked = false;
    secondClick = this;
    firstClick.classList.remove('selected');

    secondClick.classList.add('selected');
  }
  checkCells(parseInt(this.getAttribute('row')), parseInt(this.getAttribute('column')));
}

//Проверка возможных ходов коня
function checkCells(x, y) {
  //Очистка старых закрашенных клеток
  document.querySelectorAll('.cell').forEach(function(element) {
    element.classList.remove('horseCell');
  });
  //проверка клеток сверху
  if (x - 1 >= 0 && y - 2 >= 0) {
    document.querySelector('[row="' + (x - 1) + '"][column="' + (y - 2) + '"]').classList.add('horseCell');
  }
  if (x + 1 < 8 && y - 2 >= 0) {
    document.querySelector('[row="' + (x + 1) + '"][column="' + (y - 2) + '"]').classList.add('horseCell');
  }

  //проверка клеток справа
  if (x + 2 < 8 && y - 1 >= 0) {
    document.querySelector('[row="' + (x + 2) + '"][column="' + (y - 1) + '"]').classList.add('horseCell');
  }
  if (x + 2 < 8 && y + 1 < 8) {
    document.querySelector('[row="' + (x + 2) + '"][column="' + (y + 1) + '"]').classList.add('horseCell');
  }

  //проверка клеток снизу
  if (x - 1 >= 0 && y + 2 < 8) {
    document.querySelector('[row="' + (x - 1) + '"][column="' + (y + 2) + '"]').classList.add('horseCell');
  }
  if (x + 1 < 8 && y + 2 < 8) {
    document.querySelector('[row="' + (x + 1) + '"][column="' + (y + 2) + '"]').classList.add('horseCell');
  }

  //проверка клеток слева
  if (x - 2 >= 0 && y - 1 >= 0) {
    document.querySelector('[row="' + (x - 2) + '"][column="' + (y - 1) + '"]').classList.add('horseCell');
  }
  if (x - 2 >= 0 && y + 1 < 8) {
    document.querySelector('[row="' + (x - 2) + '"][column="' + (y + 1) + '"]').classList.add('horseCell');
  }
}
