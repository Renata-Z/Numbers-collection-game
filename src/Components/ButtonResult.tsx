import { BUTTON_RESULT } from '../utils/constants';

interface Props {
  label?: string;
  onClick: () => void;
}

export const ButtonResult = ({ label, onClick }: Props) => {
  return (
    <button className='button-result' onClick={onClick}>
      {label || BUTTON_RESULT}
    </button>
  );
};
