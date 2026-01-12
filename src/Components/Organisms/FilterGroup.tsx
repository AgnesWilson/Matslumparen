import { Box, Typography, Stack, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props<T> {
  heading: string;
  options: T[];
  selectedValue: T;
  onSelect: (value: T) => void;
  onClose: () => void;
}

export const FilterGroup = <T extends string>({
  heading,
  options,
  selectedValue,
  onSelect,
  onClose,
}: Props<T>) => {
  return (
    <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
      <Typography variant="body1" fontWeight="bold" sx={{ marginBottom: 1 }}>
        {heading}
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        alignItems="center"
        sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}
      >
        {options.map((option, index) => (
          <Box key={option} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              onClick={() => onSelect(option)}
              sx={{
                cursor: 'pointer',
                padding: '2px 6px',
                border: selectedValue === option ? '2px solid black' : '1px solid transparent',
                fontWeight: selectedValue === option ? 'bold' : 'normal',
                '&:hover': { opacity: 0.7 },
              }}
            >
              {option}
            </Typography>

            {index < options.length - 1 && (
              <Typography variant="h6" sx={{ marginLeft: 1, cursor: 'default' }}>
                |
              </Typography>
            )}
          </Box>
        ))}

        {selectedValue !== 'Alla' && (
          <Button
            onClick={onClose}
            sx={{ minWidth: 'auto', padding: 0, marginLeft: 1, color: 'black' }}
            aria-label="rensa filter"
          >
            <CloseIcon />
          </Button>
        )}
      </Stack>
    </Box>
  );
};
