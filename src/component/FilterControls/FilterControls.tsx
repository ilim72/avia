import { Box, Checkbox, FormControlLabel, Typography, Button } from '@mui/material';

export const FilterControls = ({
   selectedStops,
   currency,
   onStopSelection,
   onCurrencyChange,
 }: {
  selectedStops: string[];
  currency: string;
  onStopSelection: (stops: string[]) => void;
  onCurrencyChange: (currency: string) => void;
}) => {
  const handleStopSelection = (stops: string) => {
    if (selectedStops.includes(stops)) {
      onStopSelection(selectedStops.filter((stop) => stop !== stops));
    } else {
      onStopSelection([...selectedStops, stops]);
    }
  };

  return (
    <Box
      sx={{
        width: '300px',
        alignSelf: 'baseline',
        borderRadius: '4px',
        backgroundColor: 'white',
        padding: 2,
        borderRight: '1px solid #ccc',
        marginRight: 2,
      }}
    >
      <Typography variant='body1' gutterBottom>
        ВАЛЮТА
      </Typography>
      <Box sx={{ display: 'flex', width: '100%', marginBottom: 3 }}>
        {['RUB', 'USD', 'EUR'].map((cur, index) => (
          <Button
            key={cur}
            variant={currency === cur ? 'contained' : 'outlined'}
            onClick={() => onCurrencyChange(cur)}
            sx={{
              textTransform: 'none',
              flex: 1,
              borderRadius: index === 0 ? '4px 0 0 4px' : index === 2 ? '0 4px 4px 0' : '0',
            }}
          >
            {cur}
          </Button>
        ))}
      </Box>


      <Typography variant='body1' gutterBottom>
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'].map((stops) => (
          <FormControlLabel
            key={stops}
            control={
              <Checkbox
                checked={selectedStops.includes(stops)}
                onChange={() => handleStopSelection(stops)}
                sx={{
                  color: '#ccc',
                  '&.Mui-checked': { color: '#1976d2' },
                }}
              />
            }
            label={stops}
            sx={{ textTransform: 'none', marginLeft: 0 }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FilterControls;
