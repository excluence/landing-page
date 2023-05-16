import { Box, Typography } from "@mui/material"


export interface FeatureCardDetails {
    background: string,
    img: string;
    title: string;
    description: string
}



const FeatureCard: React.FC<FeatureCardDetails> = (props: FeatureCardDetails) => {
    return <Box sx={{
        width: {
            md: '23%',
            xs: '70%'
        },
        marginX: {
            md: 0,
            xs: '1%'
        },
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        padding: '0.8rem',
        background: props.background,
        borderRadius: '0.5rem',
        textAlign: 'start'
    }}>
        <img src={props.img} alt={'feature-img'} 
        height={'53%'}
        />
        <Typography variant="h2" sx={{
            marginTop: {
                md: '1rem',
                xs: '1rem'
            },
            fontSize: {
                md: '1.35rem',
                xs: '1.05rem'
            }
        }}>{props.title}</Typography>
        <Typography sx={{
            fontFamily: "MADE Outer Sans",
            fontWeight: 200,
            marginTop: {
                md: '1rem',
                xs: '1rem'
            },
            fontSize: {
                md: '0.8rem',
                xs: '0.8rem'
            }
        }} >{props.description}</Typography>

    </Box>
}

export default FeatureCard;