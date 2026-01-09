import { Box, Card, CardContent, Typography } from '@mui/material';
import halloumiPot from '../../../../public/foodImages/halloumiPot.png';

export const FoodCard = () => {
  return (
    <Card
      elevation={10}
      sx={{
        backgroundColor: 'accent.main',
        width: '100%',
        height: '100%',
        paddingBottom: { xs: '30%', sm: '20%' },
      }}
    >
      <CardContent
        sx={{
          padding: 3,
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" sx={{ fontSize: '1.6rem' }}>
          Kvällens mat
        </Typography>
        <Box
          component="img"
          src={halloumiPot}
          alt="Halloumigryta"
          sx={{
            width: '80%',
            alignSelf: 'center',
            margin: 2,
          }}
        />
        <Typography variant="body1">
          Halloumigryta med linser och röd curry
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
          <Box sx={{ border: '1px solid #000', flex: 1, p: 1 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 'bold' }}>
              Säsong
            </Typography>
            <Typography sx={{ fontSize: '0.85rem' }}>Vinter</Typography>
          </Box>
          <Box sx={{ border: '1px solid #000', flex: 1, padding: 1 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 'bold' }}>
              Väder
            </Typography>
            <Typography sx={{ fontSize: '0.85rem' }}>Regnigt, 5°</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography sx={{ fontSize: '0.85rem', fontWeight: 'bold' }}>
            4-6 personer
          </Typography>
          <Typography sx={{ fontSize: '0.85rem', fontWeight: 'bold' }}>
            45 minuter
          </Typography>
        </Box>

        <Typography variant="body2">
          Snabblagad rätt som sköter sig själv på spisen. Grönsakerna i grytan
          kan enkelt bytas ut mot vad du har hemma.
        </Typography>

        <Typography variant="body2">
          Receptet kommer egentligen från Tuvessonskans receptbok Tomat, tomat
          tomat (s.5)
        </Typography>
      </CardContent>
    </Card>
  );
};
