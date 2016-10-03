function makeChessBoard(size) {
  for (var i = 0; i < size; i++) {
    var line = '';

    var char1 = (i % 2 === 0) ? '#' : ' ';
    var char2 = (i % 2 === 0) ? ' ' : '#';

    for (var j = 0; j < size; j++) {
      if (j % 2 === 0) {
        line += char1;
      } else {
        line += char2;
      }
    }
    console.log(line);
  }
}

makeChessBoard(8);