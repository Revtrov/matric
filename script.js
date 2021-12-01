let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let characters = [
    "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x",

    'ア', 'イ', 'ウ', 'エ', 'オ',
    'カ', 'キ', 'ク', 'ケ', 'コ',
    'サ', 'シ', 'ス', 'セ', 'ソ',
    'タ', 'チ', 'ツ', 'テ', 'ト',
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
    'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
    'マ', 'ミ', 'ム', 'メ', 'モ',
    'ヤ', 'ユ', 'ヨ',
    'ラ', 'リ', 'ル', 'レ', 'ロ',
    'ワ', 'ヰ', 'ヱ', 'ヲ',
    'ン',
    'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
    'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
    'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
    'バ', 'ビ', 'ブ', 'ベ', 'ボ',
    'パ', 'ピ', 'プ', 'ペ', 'ポ',

    'ァ', 'ィ', 'ゥ', 'ェ', 'ォ',
    'ー',
    'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ',
    1, 2, 3, 4, 5, 6, 7, 8, 9
];

let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
let createCells = (x, y) => {
    return Array(x * y).fill(0);
}
let fillCells = (cells) => {
    for (i in cells) {
        cells[i] = characters[getRandomInt(0, characters.length)];
    }
}
let drawBackground = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
let drawMatrix = (cells, x, y) => {
    ctx.font = "14px monospace";
    for (let i = 0; i < x; i++) {
        let j = i;
        for (let i = 0; i < y; i++) {
            ctx.fillStyle = `rgba(0, 255, 0, ${getRandomInt(0, 100)/100})`;
            ctx.fillText(cells[getRandomInt(0, cells.length)], ((canvas.width / x) * j) + (canvas.width / x) / 4, ((canvas.height / y) * i) + (canvas.height / y) / 1.5)
        }
    }
}
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let loop = () => {
    drawBackground()
    let cells = createCells(100, 50);
    fillCells(cells);
    drawMatrix(cells, 100, 50);
}
setInterval(loop, 1);