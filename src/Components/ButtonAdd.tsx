import { BUTTON_ADD } from '../utils/constants';

interface Props {
  label?: string;
  onClick: () => void;
}

export const ButtonAdd = ({ label, onClick }: Props) => {
  return (
    <button className='button-add' onClick={onClick}>
      {label || BUTTON_ADD}
    </button>
  );
};
