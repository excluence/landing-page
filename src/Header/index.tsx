import { Box, Button, Typography } from "@mui/material"


const Header: React.FC = () => {
    return <Box sx={{
        position: 'sticky',
        top: 0,
        left:0,
        width: '100vw',
        height: {
            md: '4rem',
            xs: '6rem'
        },
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        background: 'rgba(0,0,0,0.3)',
        paddingTop: {
            md: '1rem',
            xs: '2rem'
        }
    }}>
        <Typography fontFamily={'Anurati'} sx={{
            position: 'absolute',
            width: '15rem',
            fontSize: {
                md: '1.4rem',
                xs: '1.25rem'
            },
            letterSpacing: {
                md: '0.3rem'
            }
        }}>EXCLUENCE</Typography>
        <Button sx={{
            position: 'absolute',
            color: 'white',
            background: 'transparent',
            right: {
                md: '25rem'
            },
            '&:hover': {
                backgroundColor: 'transparent',
                color: 'white',
                border: `1px solid white`,
            },
            visibility: {
                md: 'visible',
                xs: 'hidden'
            }
        }}>
            Contact Us
        </Button>
        <Button sx={{
            position: 'absolute',
            right: {
                md: '10rem',
                xs: '1.25rem'
            }
        }}>Request Access</Button>
    </Box>;
}

export default Header;