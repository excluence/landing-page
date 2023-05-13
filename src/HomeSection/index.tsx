import { Box, Typography } from '@mui/material';
/// Assets
import WomenInDarkImg from '../assets/img/women_in_dark.png';


const HomeSection: React.FC  = () => {
    return (
        <Box
          sx={{
            height: '100vh',
            width: '100%',
            position: 'sticky',
            top: 0
          }}
        >
            <Box sx={{
              position: 'absolute',
              backgroundImage: `url(${WomenInDarkImg})`,
              backgroundRepeat: 'no-repeat' ,
              backgroundPosition: 'top',
              backgroundSize: {
                xl: '38%',
                lg: '45%',
                md: '52%',
                xs: '80% 120%'

              },
              width: '100%',
              height: '100%'
          }}></Box>
            <Typography 
            fontFamily={'Anurati'}
            variant='h1' 
            position={'relative'}
            sx= {{
              top : {
                xl: '34%',
                lg: '36%',
                md: '34%',
                xs: '38%'
              },
              fontSize: {
                md: '7rem',
                lg: '9rem',
                xl: '10rem',
                xs: '2.8rem'
              },
              letterSpacing: {
                md: '2rem',
                xs: '0.5rem'
              }
            }}
            textAlign={'center'}>EXCLUENCE</Typography>
          </Box>
    );
}

export default HomeSection