import { Box, Button, Typography } from '@mui/material';

export const FilterControls = ({
   selectedStops,
   currency,
   onStopSelection,
   onCurrencyChange,
 }: {
  selectedStops: string;
  currency: string;
  onStopSelection: (stops: string) => void;
  onCurrencyChange: (currency: string) => void;
}) => {
  return (
    <Box sx={{ width: '300px', padding: 2, borderRight: '1px solid #ccc', marginRight: 2 }}>
      <Typography variant="h6" gutterBottom>
        Количество пересадок
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, marginBottom: 3 }}>
        {['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'].map((stops) => (
          <Button
            key={stops}
            variant={selectedStops === stops ? 'contained' : 'outlined'}
            onClick={() => onStopSelection(stops)}
            sx={{ textTransform: 'none' }}
          >
            {stops}
          </Button>
        ))}
      </Box>

      <Typography variant="h6" gutterBottom>
        Валюта
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {['RUB', 'USD', 'EUR'].map((cur) => (
          <Button
            key={cur}
            variant={currency === cur ? 'contained' : 'outlined'}
            onClick={() => onCurrencyChange(cur)}
            sx={{ textTransform: 'none' }}
          >
            {cur}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default FilterControls;
