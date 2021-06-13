import React, { InputHTMLAttributes } from 'react';

export const Input = ({
  value,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="input-container">
      <label className='input-label'>Enter a number which you want to add to an array</label>
      <input
        className='input-numbers'
        type='number'
        placeholder='Enter a number'
        autoComplete='on'
        {...props}
      />
    </div>
  );
};
