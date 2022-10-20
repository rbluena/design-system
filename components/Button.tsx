interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button type="button" {...rest} className=" text-green-500 px-4 bg-blue-900">
    {children}
  </button>
);

export default Button;
