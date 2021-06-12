import { useState } from 'react';
import { Input } from '../Components/Input';
import { checkIfLastElement } from '../utils/countingUtils';

export const Game = () => {
  const [arr, setArr] = useState<number[]>([1, 2, 0, 3, 0, 2, 0]);
  const [isWinnable, setIsWinnable] = useState<boolean>(false);

  const onCheckResultClicked = () => {
    const indexOfLastItem = arr.length - 1;

    const result = checkIfLastElement(arr, indexOfLastItem, arr[0], 0);
    console.log(result);
    setIsWinnable(result);
  };

  return (
    <>
      <h3>Enter a number</h3>
      <Input />
      <button>Add number to the array</button>
      <button>Delete the content of the array</button>
      <button className='button-result' onClick={onCheckResultClicked}>
        Check if the array is winnable
      </button>
      <h3>
        [{' '}
        {arr.map((number, index) => (
          <span key={`${number}${index}`}>{`${number},`}</span>
        ))}{' '}
        ]
      </h3>
      <h3>Is the array winable????</h3>
      <p>
        {isWinnable
          ? 'Great job! It is winnable.'
          : 'It is unwinnable! Try again.'}
      </p>
    </>
  );
};
