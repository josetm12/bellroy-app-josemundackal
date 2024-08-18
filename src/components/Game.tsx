'use client';
import { useReducer, useMemo } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Keyboard from '@/components/Keyboard';
import styles from './Game.module.css';
import { initialState, gameReducer } from '@/reducers/gameReducer';

const GRID_SIZE = 25;

export default function Game() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const spriteStyle = useMemo(
    () => ({
      bottom: `${1 + state.y * 4}rem`,
      left: `${1 + state.x * 4}rem`,
    }),
    [state.x, state.y]
  );

  return (
    <div
      className={cn(
        styles.game,
        'flex flex-col p-5 gap-10 justify-center items-center'
      )}
    >
      <div className="relative">
        <div className={styles.grid}>
          {[...Array(GRID_SIZE)].map((_, index) => (
            <div key={index} className={styles.cell} />
          ))}
        </div>
        <div style={spriteStyle} className={cn('absolute', styles.sprite)}>
          <Image
            className={styles[state.direction || 'RIGHT']}
            src="/robot.png"
            alt="robot"
            width={30}
            height={30}
          />
        </div>
      </div>
      <Keyboard dispatch={dispatch} />
    </div>
  );
}
