import { Box, Typography, Stack } from '@mui/material';

interface FilterGroupProps<T> {
  heading: string;
  options: T[];
  selectedValue: T;
  onSelect: (value: T) => void;
}

export const FilterGroup = <T extends string>({
  heading,
  options,
  selectedValue,
  onSelect,
}: FilterGroupProps<T>) => {
  return (
    <Box>
      <Typography variant="body1" fontWeight="bold" sx={{ marginBottom: 1 }}>
        {heading}
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" alignItems="center">
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
      </Stack>
    </Box>
  );
};
