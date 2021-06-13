import { ReactNode } from 'react';

interface Props {
  mainArr: number[];
  children: ReactNode;
}

export const MainArr = ({ mainArr, children }: Props) => {
  return (
    <div className='arr-container'>
      <h3>
        [{' '}
        {mainArr.map((number, index, arr) => (
          <span key={`${number}${index}`}>{`${number}${
            index !== arr.length - 1 ? ', ' : ''
          }`}</span>
        ))}{' '}
        ]
      </h3>
      {children}
    </div>
  );
};
