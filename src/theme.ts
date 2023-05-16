import { createTheme } from "@mui/material";


const palette = {
    primary: {
        main: "#FE6F42"
    },
    background: {
        default: "#01020A"
    },
    text: {
        primary: "#FFFFFF",
        secondary: "#FE6F42"
    },

};
export {palette};

const theme = createTheme({
    typography: {
        fontFamily: 'Russo One, sans-serif',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    palette: palette,
    components: {
        // MuiCssBaseline: {
        //     styleOverrides:
        //     [
        //         russoOneFontFace,
        //         anuratiFontFace,
        //         outerSansFontFace
        //     ].join('\n'),
            
        // },
        MuiButton: {
            defaultProps: {
                color: "primary",
                variant: "contained",
            },
            styleOverrides: {
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: palette.background.default,
                        color: palette.primary.main,
                        border: `1px solid ${palette.primary.main}` 
                    }
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    textAlign: 'start'
                }
            }
        }
    }
});

export {theme};