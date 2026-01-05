import { Button } from '@mui/material';

interface Props {
  btnText: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary';
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const ReusableButton = ({
  btnText,
  onClick,
  variant,
  type,
  disabled,
}: Props) => {
  const styles =
    variant === 'primary'
      ? {
          backgroundColor: 'secondary.main',
          color: 'white',
        }
      : {
          backgroundColor: 'muted.main',
          color: 'white',
        };

  return (
    <Button
      variant="contained"
      disabled={disabled}
      onClick={onClick}
      type={type}
      sx={styles}
    >
      {btnText}
    </Button>
  );
};
