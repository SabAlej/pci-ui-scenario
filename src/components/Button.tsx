import { FC, CSSProperties } from 'react';

const buttonStyle: CSSProperties = {
  margin: '10px 15px',
  borderRadius: '10px',
  width: '7em',
  cursor: 'pointer',
};

const Button: FC<{ onClick: () => void }> = ({ onClick }): JSX.Element => {
  return (
    <button style={buttonStyle} onClick={onClick}>
      Clear Filters and Sorters
    </button>
  );
};
export default Button;
