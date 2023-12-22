import { FC } from 'react';
import { Button } from './styles';

type IButtonProps = {
    type?: string;
    value?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton: FC<IButtonProps> = ({ children, onClick}) => {
  return (
    <Button onClick={onClick}>{children}</Button>
  )
}

export default PrimaryButton