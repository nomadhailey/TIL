var mytv = {
    turnOn: function () {
        return true;
    },
    turnOff: function () { }
};
function tryTurnOn(tv) {
    tv.turnOn();
}
tryTurnOn(mytv);
function createBoard() {
    var cells = []; // 보드가 가져야 할 cell들에 대해서 배열로 가지고 있음
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 3; col++) {
            cells.push({
                row: row,
                col: col
            });
        }
    }
    return cells;
}
var board = createBoard();
board[0].piece = {
    move: function (from, to) {
        return true;
    }
};
