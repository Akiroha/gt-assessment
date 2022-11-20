const BlackButton = ({ title, type, onclick, disabled }) => {
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
