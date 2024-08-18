import { GameAction, GameState } from '@/lib/types';

const initialState: GameState = {
  direction: 'RIGHT',
  x: 0,
  y: 0,
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'ARROWRIGHT':
      if (state.x >= 4) return state;

      return {
        ...state,
        direction: 'RIGHT',
        x: state.x + 1,
      };
    case 'ARROWLEFT':
      if (state.x <= 0) return state;

      return {
        ...state,
        direction: 'LEFT',
        x: state.x - 1,
      };
    case 'ARROWUP':
      if (state.y >= 4) return state;

      return {
        ...state,
        direction: 'UP',
        y: state.y + 1,
      };
    case 'ARROWDOWN':
      if (state.y <= 0) return state;

      return {
        ...state,
        direction: 'DOWN',
        y: state.y - 1,
      };
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
};

export { initialState, gameReducer };
