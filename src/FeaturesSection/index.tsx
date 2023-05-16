import { Box, Typography } from "@mui/material";
import FeatureCard, { FeatureCardDetails } from "./FeatureCard";

// Assets
import MerchandiseImg from "../assets/img/merchandise.png";
import EventTicketImg from "../assets/img/ticket.png";
import RoyaltyImg from "../assets/img/royalty.png";
import MembershipImg from "../assets/img/membership.png";


const radialGradient =`radial-gradient(circle, rgba(253,114,70,1) 0%, rgba(0,0,0,1) 100%)`;

const featuresRecord: Array<FeatureCardDetails> = [
    {
        img: MerchandiseImg, 
        background: "linear-gradient(158.54deg, rgba(251, 198, 149, 0.2) 6.77%, rgba(245, 74, 79, 0.2) 28.01%, rgba(147, 200, 14, 0.2) 42.91%, rgba(23, 24, 18, 0.2) 96.2%), #3B3B3A",
        title: 'MERCHANDISE',
        description: 'Rollout new completely digital or phy-gital merchandise within seconds'
    },
    {
        img: EventTicketImg,
        background: "linear-gradient(158.54deg, rgba(56, 56, 55, 0.2) 6.77%, rgba(54, 54, 53, 0.2) 28.01%, rgba(24, 23, 23, 0.2) 42.91%, rgba(43, 43, 42, 0.2) 96.2%), #3B3B3A",
        title: 'TICKETING',
        description: `Sell your events directly to your fans`

    },
    {
        img: RoyaltyImg,
        background: "linear-gradient(158.54deg, rgba(17, 22, 29, 0.2) 6.77%, rgba(33, 40, 50, 0.2) 40.12%, rgba(162, 141, 101, 0.2) 73.84%, rgba(43, 51, 51, 0.2) 96.2%), #3B3B3A",
        title: "ROYALTY & REVENUE",
        description: `Collect revenue and royalty on every sale of your NFT`   
    }, 
    {
        img: MembershipImg,
        background: "linear-gradient(158.54deg, rgba(0, 1, 20, 0.2) 6.77%, rgba(159, 124, 93, 0.2) 43.57%, rgba(23, 24, 18, 0.2) 96.2%), #3B3B3A",
        title: "MEMBERSHIPS",
        description: `Create exclusive membership NFTs for your royal fans`
    }
   
]

const FeatureSection: React.FC = () => {
    return (
        <Box sx={{
            height: '100vh',
            width: '100%',
            position: 'sticky',
            top: 0,
            background: 'black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: {
                md: '5%',
                xs: '25%'
            }
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
                height: '5.4rem',
                overflowX: 'visible',
            }}>
                <Typography variant="h1" sx={{
                    fontSize: {
                        xl: '5rem',
                        lg: '4rem',
                        md: '3rem',
                        xs: '2rem'
                    }
                }}>FEATURES</Typography>
            </Box>
            <Box sx={{
                width: {
                    md: '80%',
                    xs: '100%'
                },
                height: {
                    md: '24rem',
                    xs: '20rem'
                },
                marginTop: {
                    md: '3%',
                },
                paddingX: {
                    md: 0,
                    xs: '5%'
                },
                flex: 1,
                display: 'flex',
                overflowX: 'auto',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            }}>
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '100%'
                }}>
                    {featuresRecord.map((record, index) => <FeatureCard key={index} {...record} />)}
                </Box>
            </Box>
            <Typography variant="h6" sx={{
                marginTop: {
                    md: '1%',
                    xs: '1%'
                },
                fontSize: {
                    md: '1rem',
                    xs: '1rem'
                }
            }}>& more</Typography>
        </Box>
    )
}

export default FeatureSection;