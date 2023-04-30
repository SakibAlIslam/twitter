interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outlined?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outlined,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${
          secondary
            ? "bg-white text-black border-white"
            : "bg-sky-500 text-white border-sky-500"
        }
        ${large ? "py-3 px-5 text-xl" : "py-2 px-4 text-md"}
        ${outlined ? "bg-transparent border-white text-white" : ""}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
