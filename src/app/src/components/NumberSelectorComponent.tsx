import React, { useState } from 'react';

import styles from './NumberSelectorComponent.module.css';

export type NumberSelectorProps = {
  onNumbersChange: (numbers: number[]) => any;
}

export default function NumberSelector({
  onNumbersChange,
}: NumberSelectorProps) {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [error, setError] = useState<string>('');

  const setNumbersFromChange = (e: any) => {
    if (e.target !== undefined && e.target.value !== undefined) {
      const rawNumbersStr: string = e.target.value;
      const rawNumbers: string[] = rawNumbersStr
        .split(',')
        .filter((s: string) => s !== "");
      const isValid: boolean = rawNumbers.reduce(
        (acc: boolean, rawNum: string) => acc && !Number.isNaN(parseInt(rawNum)),
        true,
      );
      if (isValid) {
        setError('');
        const newNumbers: number[] = rawNumbers.map((s: string) => parseInt(s, 10));
        setNumbers(newNumbers);
        onNumbersChange(newNumbers);
      } else {
        setError('Please input a comma-separated list of numbers without spaces.');
      }
    }
  }

  const renderError = () => {
    if (error !== '') {
      return <p>{error}</p>
    }
  }

  return (
    <div className={styles['container']}>
      <div className={styles['input']}>
        <input onChange={setNumbersFromChange} />
      </div>
      <div className={styles['body']}>
        {error === '' ? numbers.join(' ') : renderError()}
      </div>
    </div>
  );
}
