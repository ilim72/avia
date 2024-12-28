import { useMemo, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { flightsData } from './types.ts';
import FilterControls from './component/FilterControls/FilterControls.tsx';
import FlightCard from './component/FlightCard/FlightCard.tsx';

const App = () => {
  const [selectedStops, setSelectedStops] = useState<string>('Все');
  const [currency, setCurrency] = useState<string>('RUB');

  const conversionRate = useMemo(() => {
    switch (currency) {
      case 'USD':
        return 0.013;
      case 'EUR':
        return 0.012;
      default:
        return 1;
    }
  }, [currency]);

  const calculatePrice = (price: number) => (price * conversionRate).toFixed(2);

  const filteredFlights = useMemo(() => {
    return flightsData
      .filter((flight) => selectedStops === 'Все' || flight.stops === selectedStops)
      .sort((a, b) => a.price - b.price);
  }, [selectedStops]);

  return (
    <Container sx={{ padding: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Авиабилеты
      </Typography>

      <Box sx={{ display: 'flex', gap: 3 }}>
        {/* Левая панель */}
        <FilterControls
          selectedStops={selectedStops}
          currency={currency}
          onStopSelection={setSelectedStops}
          onCurrencyChange={setCurrency}
        />

        {/* Карточки рейсов */}
        <Box sx={{ flex: 1 }}>
          {filteredFlights.length > 0 ? (
            filteredFlights.map((flight) => (
              <FlightCard
                key={flight.id}
                flight={flight}
                currency={currency}
                calculatePrice={calculatePrice}
              />
            ))
          ) : (
            <Typography variant="h6" color="text.secondary">
              Нет доступных рейсов
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default App;
