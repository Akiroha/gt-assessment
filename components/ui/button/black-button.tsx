import { MouseEventHandler } from 'react';

type Props = {
  title: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onclick?: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};

const BlackButton: React.FC<Props> = ({ title, type, onclick, disabled }) => {
  return (
    <button
      className="font-bold text-white text-lg border-2 bg-black p-2 rounded-lg disabled:bg-gray-500"
      type={type}
      onClick={onclick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default BlackButton;
