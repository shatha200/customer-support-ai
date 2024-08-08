

'use client';

import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/Chat');
  };

  

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      sx={{
        overflow: 'hidden',
        fontFamily: 'roboto',
         }}
    >
   

      <Box
        width="100%"
        height="calc(100% - 64px)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
            backgroundImage: 'url(1.gif)',
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
          }}
       
      >
        <Box display="flex" flexDirection="column" alignItems="center" mb={4} p={4}  spacing={2}   borderRadius={10} >
          <Typography variant="h2"  mb={2} sx={{ fontWeight: 'bold', textAlign: 'center',fontFamily:'roboto' }}>
          Welcome to Headstarter AI Support: 
          </Typography>
          <Typography variant="h3"  mb={2} sx={{ fontWeight: 'bold', textAlign: 'center',fontFamily:'roboto' }}>
          Your Partner in AI-Powered Interviews for Software Engineering Jobs!
          </Typography>
          <Typography variant="h6" mb={4} sx={{ textAlign: 'center' ,fontFamily:'roboto' }}>
          We are thrilled to assist you in navigating our platform, where AI technology meets the world of software engineering interviews. Whether you are a candidate preparing for your next role or a recruiter seeking top talent, Headstarter AI Support is here to ensure a seamless experience.
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleGetStarted}
            sx={{fontFamily:'roboto',
              mt: 2,
              backgroundColor: '#669999',
              color:'black',
              '&:hover': {
                backgroundColor: '#527a7a',
              },
              padding: '10px 20px',
              borderRadius: '20px',
              textTransform: 'none',
              fontSize: '20px',
              fontWeight: 'bold',
              display: 'block',
            }}
          >
            Let&apos;s get started !
          </Button>
        </Box>

        

      </Box>
    </Box>
  );
}

