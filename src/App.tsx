import { useMemo, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { flightsData } from './types.ts';
import FilterControls from './component/FilterControls/FilterControls.tsx';
import FlightCard from './component/FlightCard/FlightCard.tsx';
import flightIcon from './assets/Plane.svg';
import './index.css';

const App = () => {
  const [selectedStops, setSelectedStops] = useState<string[]>(['Все']);
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
    if (selectedStops.includes('Все')) {
      return flightsData.sort((a, b) => a.price - b.price);
    }

    return flightsData
      .filter((flight) => selectedStops.includes(flight.stops))
      .sort((a, b) => a.price - b.price);
  }, [selectedStops]);

  return (
    <Container sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
        <img src={flightIcon} alt="flight-icon" width="90px" height="90px" />
      </Box>

      <Box sx={{ display: 'flex', gap: 3 }}>
        <FilterControls
          selectedStops={selectedStops}
          currency={currency}
          onStopSelection={setSelectedStops}
          onCurrencyChange={setCurrency}
        />

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
