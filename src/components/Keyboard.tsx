'use client';
import React, { useState, useEffect, useCallback } from 'react';
import styles from './Keyboard.module.css';
import { GameAction, GameActionType } from '@/lib/types';

const VIRTUAL_KB_KEYS = ['↑', '←', '↓', '→'] as const;
const KEY_MAP: Record<string, GameActionType> = {
  '↑': 'ARROWUP',
  '←': 'ARROWLEFT',
  '↓': 'ARROWDOWN',
  '→': 'ARROWRIGHT',
};

const Keyboard: React.FC<{ dispatch: React.Dispatch<GameAction> }> = ({
  dispatch,
}) => {
  const [activeKeyType, setActiveKeyType] = useState<string | null>(null);

  const handleKeyPress = useCallback(
    (key: string) => {
      const upperKey = key.toUpperCase();
      let actionType: GameActionType | 'RESET_GAME' | undefined;

      if (upperKey === 'ESCAPE') {
        actionType = 'RESET_GAME';
      } else if (
        KEY_MAP[upperKey] ||
        Object.values(KEY_MAP).includes(upperKey as GameActionType)
      ) {
        actionType = KEY_MAP[upperKey] || (upperKey as GameActionType);
      }

      if (actionType) {
        setActiveKeyType(actionType === 'RESET_GAME' ? 'ESCAPE' : actionType);
        setTimeout(() => setActiveKeyType(null), 200);
        dispatch({ type: actionType });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => handleKeyPress(event.key);
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  return (
    <div className={styles.keyboard}>
      {VIRTUAL_KB_KEYS.map((key) => (
        <button
          key={key}
          onClick={() => handleKeyPress(key)}
          className={`${styles.key} ${
            KEY_MAP[key] === activeKeyType ? styles.active : ''
          }`}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
