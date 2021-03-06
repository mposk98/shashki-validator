import { Turns, PieceTypes } from './shared';

export const EMPTY = () => [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
];

export const STARTING_POSITION = () => [
    [
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
    ],
    [
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
    ],
    [
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
    ],
    [
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
    ],
    [
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.Man,
        },
        null,
    ],
];

export const POSITION_WK_70_16_BK_43_36_27 = [
    [null, null, null, null, null, null, null, null],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.King,
        },
        null,
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.King,
        },
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.King,
        },
        null,
    ],
    [
        null,
        null,
        null,
        {
            turn: Turns.Black,
            isTaken: false,
            pieceType: PieceTypes.King,
        },
        null,
        null,
        null,
        null,
    ],
    [null, null, null, null, null, null, null, null],
    [
        null,
        null,
        null,
        null,
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.King,
        },
        null,
        null,
    ],
    [
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.King,
        },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ],
];

export const POSITION_WK_43 = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
        null,
        null,
        null,
        {
            turn: Turns.White,
            isTaken: false,
            pieceType: PieceTypes.King,
        },
        null,
        null,
        null,
        null,
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
];

export const POSITION_WK_72_BM_54_45 = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
        null,
        null,
        null,
        null,
        null,
        { turn: Turns.Black, isTaken: false, pieceType: PieceTypes.Man },
        null,
        null,
    ],
    [
        null,
        null,
        null,
        null,
        { turn: Turns.Black, isTaken: false, pieceType: PieceTypes.Man },
        null,
        null,
        null,
    ],
    [null, null, null, null, null, null, null, null],
    [
        null,
        null,
        { turn: Turns.White, isTaken: false, pieceType: PieceTypes.King },
        null,
        null,
        null,
        null,
        null,
    ],
];

export const POSITION_WM_50_63_45_BK_76_BM_47_27 = JSON.parse('[[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,{"turn":false,"isTaken":false,"pieceType":0}],[null,null,null,null,null,null,null,null],[null,null,null,null,null,{"turn":true,"isTaken":false,"pieceType":0},null,{"turn":false,"isTaken":false,"pieceType":0}],[{"turn":true,"isTaken":false,"pieceType":0},null,null,null,null,null,null,null],[null,null,null,{"turn":true,"isTaken":false,"pieceType":0},null,null,null,null],[null,null,null,null,null,null,{"pieceType":1,"turn":false,"isTaken":false},null]]');
