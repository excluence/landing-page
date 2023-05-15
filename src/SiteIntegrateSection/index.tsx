import { Box, Typography } from "@mui/material"

///Asset
import ECommerceSiteImg from "../assets/img/ecommerce_site.png";

const radialGradient = `radial-gradient(109.59% 50% at 37.82% 50%, #E53B55 0%, #BB0279 100%)`;

const SiteIntegrateSection: React.FC = () => {
    return <Box sx={{
        height: '100vh',
        width: '100%',
        position: 'sticky',
        top: {
            md: '1rem',
            xs: 0
        },
        backgroundColor: 'black',
    }} id="site">
        <Box sx={{
            position:  'absolute',
            width: {
                lg: '25.5rem',
                md: '20rem',
                xs: '60%'
            },
            height: {
                md: '40rem',
                xs: '50%'
            },
            left: 0,
            top: {
                md: '4rem',
                xs: '25%'
            },
            background: radialGradient
        }}></Box>

        <Box sx={{
            position: 'absolute',
            left: {
                lg: '4.8125rem',
                md: '3.5rem',
                xs: '12%'
            },
            top: {
                lg: '6rem',
                md: '8rem',
                xs: '35%'
            },
            width: {
                xl: '37rem',
                lg: '34rem',
                md: '30rem',
                xs: '80%'
            },
            height: '40rem',
            backgroundImage: `url(${ECommerceSiteImg})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
        }}></Box>

        <Box sx={{
            position: 'absolute',
            width: {
                xl: '36.625rem',
                lg: '35rem',
                md: '25rem',
                xs: '90%'
            },
            height: '18rem',
            top: {
                lg: '6rem',
                md: '8rem'
            },
            left: {
                xl: '46.56rem',
                lg: '44rem',
                md: '38rem',
                xs: '12%'
            }
        }}>
            <Typography variant="h1" sx= {{
                fontSize: {
                    xl: '5rem',
                    lg: '4rem',
                    md: '3rem',
                    xs: '2rem'
                }
            }}>
                Integrate with your existing store
            </Typography>
        </Box>

        <Box sx={{
            position: 'absolute',
            width: {
                xl: '36.625rem',
                lg: '32rem',
                md: '22rem',
                xs: '90%'
            },
            height: '7.5rem',
            left: {
                xl: '46.56rem',
                lg: '44rem',
                md: '38rem',
                xs: '12%'
            },
            top: {
                xl: '30rem',
                lg: '28rem',
                md: '25rem',
                xs: '7rem'
            }      
        }}>
            <Typography fontFamily={'MADE Outer Sans'} fontWeight={200} sx={{
                textAlign: 'start',
                fontSize: {
                    xl: '1.5rem',
                    lg: '1.5rem',
                    md: '1.25rem',
                    xs: '1rem'
                }
            }}>
            Your NFTs can be purchased from your merchandise store site. No need to
redirect your users to other sites.
            </Typography>
        </Box>

    </Box>
}


export default SiteIntegrateSection