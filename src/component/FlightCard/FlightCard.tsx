import { Box, Card, Button, Typography } from '@mui/material';
import { Flight } from '../../types.ts';
import AirplaneStart from '../../assets/airplane-start.png';
import AirplaneEnd from '../../assets/airplane-end.png';
import { orange } from '@mui/material/colors';

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
        padding: 2,
        marginBottom: 2,
        boxShadow: 2,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',borderRight: '2px solid #ccc', paddingRight: 1 }}>
        <Box
          component='img'
          src={flight.image}
          alt={`Logo of airline for flight from ${flight.departure} to ${flight.destination}`}
          sx={{ height: 80, width: 120, objectFit: 'cover', marginBottom: 1 }}
        />
        <Button
          variant='contained'
          sx={{ display: 'flex', padding:'10px 50px', flexDirection: 'column', alignItems: 'center', backgroundColor: orange[800] }}
          aria-label={`Купить за ${calculatePrice(flight.price)} ${currency}`}
        >
          <span>Купить </span> <span>за {calculatePrice(flight.price)} {currency}</span>
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flex: 1, alignItems: 'flex-start' ,justifyContent: 'space-around'}}>
        <Box sx={{ textAlign: 'start' }}>
          <Typography sx={{ fontSize: '35px' }}>{flight.departureTime}</Typography>
          <Typography variant='subtitle1'>{flight.departure}</Typography>
          <Typography variant='body2' color="text.secondary">
            {flight.departureDate}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 2 }}>
          <Box
            component='img'
            src={AirplaneStart}
            alt='Start of flight'
            sx={{ width: 24, height: 24, transform: 'rotate(15deg)' }}
          />
          <Typography variant="body2" color='text.secondary'>
            {flight.stops}
          </Typography>
          <Box
            component='img'
            src={AirplaneEnd}
            alt='End of flight'
            sx={{ width: 24, height: 24, transform: 'rotate(55deg)' }}
          />
        </Box>

        <Box sx={{ textAlign: 'end' }}>
          <Typography sx={{ fontSize: '35px' }}>{flight.arrivalTime}</Typography>
          <Typography variant='subtitle1'>{flight.destination}</Typography>
          <Typography variant='body2' color='text.secondary'>
            {flight.arrivalDate}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default FlightCard;
