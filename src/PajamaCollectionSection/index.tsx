import { Box, Typography } from "@mui/material";
import {palette} from '../theme';


//Assets
import PajamaImg from "../assets/img/pajama.png";
import DotPatternSvg from "../assets/svg/dot-pattern.svg";

const highlightBoxGradient = `linear-gradient(89.88deg, #FE6F42 2.65%, #AEB047 49.47%, #4E9D91 91.14%)`;

const PajamaCollectionSection: React.FC = () => {
    return (

        <Box sx={{
            height: '100vh',
            width: '100%',
            position: 'sticky',
            top: 0,
            backgroundColor: 'black'
        }}>
            {/*Highlight box*/}
            <Box sx={{
                position: 'absolute',
                width: {
                    xl: '31rem',
                    lg: '30rem',
                    md: '27.5rem',
                    sm: '20rem',
                    xs: '17rem'
                },
                height: {
                    lg: '7.25rem',
                    md: '6rem',
                    xs: '3rem'
                },
                top: '4rem',
                left: 0,
                background: highlightBoxGradient
            }}></Box>
            <Box sx={{
                position:'absolute',
                width: {
                    xl: '37rem',
                    lg: '35rem',
                    md: '33rem',
                    xs: '20rem'
                },
                height: '14.5rem',
                left: '4rem',
                top: '4rem'
            }}>
                <Typography variant="h1"
                sx={{
                    fontSize: {
                        xl: '6rem',
                        lg: '5rem',
                        md: '4.5rem',
                        sm: '3rem',
                        xs: '2.5rem'
                    },
                    lineHeight: {
                        lg: '7.2rem',
                        md: '6rem',
                        xs: '3rem'
                    }
                }}
                >The Pajama Collection</Typography>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: {
                    xl: '37rem',
                    lg: '32rem',
                    md: '28rem',
                    xs: '15rem'
                },
                left: '4rem',
                top: {
                    md: '25rem',
                    xs: '11rem'
                },
                wordBreak: 'break-word',

            }}>
                <Typography variant="body1" fontWeight={200}  fontFamily={'MADE Outer Sans'}
                    sx={{
                        fontSize: {
                            md: '2rem',
                            xs: '1.rem'
                        },
                        lineHeight: {
                            md: '2.5rem',
                            xs: '1.25rem'
                        },
                        textAlign: 'start'
                    }}
                >
                    Create and scale your <span style={{
                        color: palette.primary.main,
                        fontWeight: 400
                    }}>NFT collections</span> for your fans. Upload your art files and and generate your digital assets.
                </Typography>
            </Box>
            {/** Dotted Pattern SVG */}
            <Box sx={{
                position: 'absolute',
                backgroundImage: `url(${DotPatternSvg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                top: {
                    md: '7rem',
                    xs: '22rem'
                },
                right: {
                    md:'7.5rem',
                    xs: '6rem'
                },
                height: {
                    md: '30rem',
                    xs: '22rem'
                },
                width: {
                    xl: '35rem',
                    lg: '32rem',
                    md: '30rem',
                    xs: '20rem'
                }
            }}></Box>
            {/**Pajama Image */}
            <Box sx={{
                position: 'absolute',
                backgroundImage: `url(${PajamaImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '110% 100%',
                boxSizing: 'border-box',
                height: {
                    md: '35rem',
                    xs: '22rem'
                },
                width: {
                    xl: '24rem',
                    lg: '22rem',
                    md: '20rem',
                    xs: '15rem'
                },
                
                border: '4px solid #7C7C7C',
                top: {
                    md: '4rem',
                    xs: '20rem'
                },
                right: {
                    xl: '4rem',
                    lg: '3rem',
                    md: '3rem',
                    xs: '4rem'
                }
            }}>
                
            </Box>
        </Box>
    );
}

export default PajamaCollectionSection;