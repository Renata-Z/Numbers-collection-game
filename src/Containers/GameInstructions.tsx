import React from 'react';

export const GameInstructions = () => {
  return (
    <div>
      <h3>Goal</h3>
      <p>
        Determine if you can reach the last element on a numbers array,
        according to these rules:
      </p>

      <ul>
        <li>You start at the first element.</li>
        <li>
          Current element value indicates how many steps you can take at most
          (example: if the value is 3 you can take 0, 1, 2 or 3 steps).
        </li>
        <li>You have to end up on the last array element.</li>
      </ul>
    </div>
  );
};
