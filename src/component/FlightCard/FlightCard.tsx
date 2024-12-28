import { Box, Card, Button, Typography } from '@mui/material';
import { Flight } from '../../types.ts';
import AirplaneStart from '../../assets/airplane-start.png';
import AirplaneEnd from '../../assets/airplane-end.png';

interface FlightCardProps {
  flight: Flight;
  currency: string;
  calculatePrice: (price: number) => string;
}

const FlightCard = ({ flight, currency, calculatePrice }: FlightCardProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        marginBottom: 2,
        boxShadow: 2,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          component="img"
          src={flight.image}
          alt={`Logo of airline for flight from ${flight.departure} to ${flight.destination}`}
          sx={{ height: 80, width: 120, objectFit: 'cover', marginBottom: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          aria-label={`Buy ticket for ${calculatePrice(flight.price)} ${currency}`}
        >
          Купить за {calculatePrice(flight.price)} {currency}
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1">{flight.departure}</Typography>
          <Typography variant="body2">{flight.departureTime}</Typography>
          <Typography variant="body2" color="text.secondary">
            {flight.departureDate}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            component="img"
            src={AirplaneStart}
            alt="Start of flight"
            sx={{ width: 24, height: 24, transform: 'rotate(15deg)' }}
          />
          <Typography variant="body2" color="text.secondary">
            {flight.stops}
          </Typography>
          <Box
            component="img"
            src={AirplaneEnd}
            alt="End of flight"
            sx={{ width: 24, height: 24, transform: 'rotate(55deg)' }}
          />
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1">{flight.destination}</Typography>
          <Typography variant="body2">{flight.arrivalTime}</Typography>
          <Typography variant="body2" color="text.secondary">
            {flight.arrivalDate}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default FlightCard;
