import { FormHelperText } from '@mui/material';

interface Props {
  message: string;
  variant?: 'formError' | 'error';
}

export const ErrorMessage = ({ message, variant = 'formError' }: Props) => {
  if (!message) return null;

  const isFormError = variant === 'formError';
  return (
    <FormHelperText
      error
      role="alert"
      sx={{
        backgroundColor: isFormError ? 'rgba(190, 31, 31, 0.26)' : '#F9B79F',
        color: '#700000 !important',
        border: '1px solid #700000',
        display: 'block',
        textAlign: isFormError ? 'end' : 'start',
        fontSize: '0.9em',
        padding: 1.5,
        borderRadius: 1,
      }}
    >
      {message}
    </FormHelperText>
  );
};
