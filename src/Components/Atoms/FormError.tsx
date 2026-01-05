import { FormHelperText } from '@mui/material';

interface FormErrorProps {
  message: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <FormHelperText
      error
      role="alert"
      sx={{
        backgroundColor: 'rgba(190, 31, 31, 0.26)',
        color: '#700000 !important',
        border: '1px solid #700000',
        display: 'block',
        textAlign: 'end',
        fontSize: '0.9em',
        padding: 1.5,
        borderRadius: 1,
      }}
    >
      {message}
    </FormHelperText>
  );
};
