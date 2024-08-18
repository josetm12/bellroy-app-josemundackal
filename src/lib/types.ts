export interface GameState {
  direction: 'RIGHT' | 'LEFT' | 'UP' | 'DOWN';
  x: number;
  y: number;
}

export type GameActionType =
  | 'ARROWUP'
  | 'ARROWDOWN'
  | 'ARROWRIGHT'
  | 'ARROWLEFT'
  | 'RESET_GAME';

export interface GameAction {
  type: GameActionType;
}
