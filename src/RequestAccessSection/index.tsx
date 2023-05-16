import { Box, Button, TextField, Typography } from "@mui/material";


import GoldenSkullImg from "../assets/img/golden_skull_armour.png";

const RequestAccessSection: React.FC = () => {
    return <Box id="request-access-section" sx={{
            height: '100vh',
            width: '100%',
            position: 'sticky',
            top: 0,
            backgroundColor: 'black',
    }}>
        <Box sx={{
            height: '100%',
            width: '100%',
            backgroundImage: `url(${GoldenSkullImg})`,
            backgroundSize: 'fill',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx= {{
                width: {
                    md: '35%',
                    xs: '80%'
                },
                height: '60%',
                backdropFilter: 'blur(10px)',
                background: 'rgba(65, 64, 63,0.8)',
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
            }}>
                <Typography variant="h4">Request Access</Typography>
                <form name="request-access" method="POST" data-netlify="true" style={{
                    padding: '0.5rem'
                }}>
                    <TextField variant="outlined" placeholder="Type your email" 
                    fullWidth
                        label="Email"
                        required
                        InputLabelProps={{
                            color: 'secondary'
                        }}
                        type="email"
                        sx={{
                            marginTop: '1.5rem'
                        }}
                        InputProps={{sx: {
                            fontFamily: 'MADE Outer Sans',
                            fontWeight: 200,
                            backgroundColor: 'black',
                            color: 'white',

                        }}}
                    />
                    <Button type="submit" fullWidth sx={{
                        marginTop: '1rem',
                        paddingY: '0.8rem'
                    }}>Request</Button>
                </form>

                <Typography sx={{
                    marginTop: '10%'
                }} variant="h4">Contact Us</Typography>
                <Typography sx={{
                    fontFamily: 'MADE Outer Sans',
                    fontWeight: 200
                }}>business@excluence.com</Typography>
            </Box>
        </Box>
    </Box>
}

export default RequestAccessSection