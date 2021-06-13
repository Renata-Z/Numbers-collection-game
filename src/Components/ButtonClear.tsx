import { BUTTON_CLEAR } from '../utils/constants';

interface Props {
  label?: string;
  onClick: () => void;
}

export const ButtonClear = ({ label, onClick }: Props) => {
  return (
    <button className='button-clear' onClick={onClick}>
      {label || BUTTON_CLEAR}
    </button>
  );
};
