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
    <Box
      component="section"
      aria-labelledby={`filter-group-${heading}`}
      sx={{ textAlign: { xs: 'center', sm: 'left' } }}
    >
      <Typography variant="body1" fontWeight="bold" id={`filter-group-${heading}`} sx={{ marginBottom: 1 }}>
        {heading}
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        alignItems="center"
        component="nav"
        sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}
      >
        {options.map((option, index) => {
          const isSelected = selectedValue === option;
          return (
            <Box key={option} sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                variant="text"
                onClick={() => onSelect(option)}
                aria-pressed={isSelected}
                sx={{
                  textTransform: 'none',
                  minWidth: 'auto',
                  padding: '2px 8px',
                  color: 'black',
                  fontWeight: isSelected ? 'bold' : 'normal',
                  border: isSelected ? '2px solid black' : '1px solid transparent',
                  '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
                }}
              >
                {option}
              </Button>

              {index < options.length - 1 && (
                <Typography aria-hidden="true" sx={{ marginLeft: 1, cursor: 'default' }}>
                  |
                </Typography>
              )}
            </Box>
          );
        })}

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
