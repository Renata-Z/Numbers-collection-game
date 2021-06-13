import { useCallback, useState } from 'react';
import { ButtonAdd } from '../Components/ButtonAdd';
import { ButtonClear } from '../Components/ButtonClear';
import { ButtonResult } from '../Components/ButtonResult';
import { Input } from '../Components/Input';
import { MainArr } from '../Components/MainArrayConterner';
import {
  checkIfLastElement,
  getResultMessage
} from '../utils/gettingResultUtils';

export const Game = () => {
  const [mainArr, setMainArr] = useState<number[]>([]);
  const [isWinnable, setIsWinnable] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const onInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const onAddNumberClicked = () => {
    if (inputValue !== undefined) {
      setMainArr((prevState) => [...prevState, Number(inputValue)]);
      setInputValue('');
    }
  };

  const onClearArrClicked = () => {
    setMainArr([]);
    setShowResult(false);
    setInputValue('');
  };

  const onCheckResultClicked = () => {
    const indexOfLastItem = mainArr.length - 1;

    const result = checkIfLastElement(mainArr, indexOfLastItem, 0, mainArr[0]);
    setIsWinnable(result);
    setShowResult(true);
  };

  return (
    <div className='game-content'>
      <div className='left-container'>
        <Input
          onChange={(e) => onInputChange(e.target.value)}
          value={inputValue}
        />
        <ButtonAdd onClick={onAddNumberClicked} />
      </div>

      <div className='right-container'>
        <MainArr mainArr={mainArr}>
          <ButtonClear onClick={onClearArrClicked} />
        </MainArr>

        <div className='result-container'>
          <ButtonResult onClick={onCheckResultClicked} />
          <p className={isWinnable ? 'message-positive' : 'message-negative'}>
            {showResult && getResultMessage(mainArr, isWinnable)}
          </p>
        </div>
      </div>
    </div>
  );
};
