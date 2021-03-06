/* eslint-disable import/no-named-as-default-member */
import { EMPTY, STARTING_POSITION } from './positions';
import {
    Turns,
    PieceTypes,
    cmpCoords,
    getOppositeTurn,
    clonePiece,
    ascii,
} from './shared';
import man from './rules/man';
import king from './rules/king';

class Validator {
    constructor() {
        this.boardState = EMPTY();
        this.moveTurn = Turns.White;
        this.isMoveFinished = true;
    }

    setStartingPosition() {
        this.boardState = STARTING_POSITION();
        this.moveTurn = Turns.White;
        this.isMoveFinished = true;
    }

    setPosition(boartState, moveTurn, isMoveFinished) {
        this.boardState = boartState;
        this.moveTurn = moveTurn;
        this.isMoveFinished = isMoveFinished;
    }

    checkMoves(from, checkOnlyTakes) {
        const [fromRow, fromCol] = from;
        const piece = this.boardState[fromRow][fromCol];
        if (piece !== null) {
            if (piece.isTaken || piece.turn !== this.moveTurn) {
                return null;
            }
            const { pieceType } = piece;
            if (pieceType === PieceTypes.King) {
                return king.checkMoves(from, this.boardState, checkOnlyTakes);
            }
            if (pieceType === PieceTypes.Man) {
                return man.checkMoves(from, this.boardState, checkOnlyTakes);
            }
        }
        return null;
    }

    getPossibleMoves(from) {
        return this.checkMoves(from, false);
    }

    makeMove(from, to) {
        const possibleMoves = this.checkMoves(from, false);

        if (possibleMoves === null) {
            return false;
        }

        const [fromRow, fromCol] = from;
        const { moves } = possibleMoves;

        for (let i = 0; i < moves.length; ++i) {
            if (cmpCoords(moves[i].to, to)) {
                const [toRow, toCol] = to;

                if (this.moveTurn === Turns.White && toRow === 0) {
                    this.boardState[toRow][toCol] = {
                        pieceType: PieceTypes.King,
                        turn: Turns.White,
                        isTaken: false,
                    };
                } else if (this.moveTurn === Turns.Black && toRow === 7) {
                    this.boardState[toRow][toCol] = {
                        pieceType: PieceTypes.King,
                        turn: Turns.Black,
                        isTaken: false,
                    };
                } else {
                    this.boardState[toRow][toCol] = clonePiece(this.boardState[fromRow][fromCol]);
                }

                this.boardState[fromRow][fromCol] = null;

                if (possibleMoves.isTake) {
                    const [takenRow, takenCol] = moves[i].takenPiece;
                    const takenPiece = this.boardState[takenRow][takenCol];

                    if (takenPiece !== null) {
                        takenPiece.isTaken = true;
                    }

                    if (this.checkMoves(to, true) !== null) {
                        this.isMoveFinished = false;
                    } else {
                        this.isMoveFinished = true;
                        for (let row = 0; row < 8; ++row) {
                            const boardRow = this.boardState[row];
                            for (let col = 0; col < 8; ++col) {
                                const piece = boardRow[col];
                                if (piece !== null && piece.isTaken) {
                                    boardRow[col] = null;
                                }
                            }
                        }
                        this.moveTurn = getOppositeTurn(this.moveTurn);
                    }
                } else {
                    this.moveTurn = getOppositeTurn(this.moveTurn);
                }
                return true;
            }
        }
        return false;
    }

    ascii() {
        return ascii(this.boardState);
    }
}

export default {
    Validator,
    Turns,
    PieceTypes,
};
