import { createTheme } from "@mui/material";

/// Importing fonts
import AnuratiRegular from "./assets/fonts/Anurati-Regular.otf";
import OuterSansAltLight from "./assets/fonts/MADE Outer Sans Alt Light PERSONAL USE.otf";
import OuterSansAltMedium from "./assets/fonts/MADE Outer Sans Alt Medium PERSONAL USE.otf";
import OuterSansAltRegular from "./assets/fonts/MADE Outer Sans Alt Regular PERSONAL USE.otf";
import OuterSansAltThin from "./assets/fonts/MADE Outer Sans Alt Thin PERSONAL USE.otf";
import OuterSansThin from "./assets/fonts/MADE Outer Sans Thin PERSONAL USE.otf";
import OuterSansLight from "./assets/fonts/MADE Outer Sans Light PERSONAL USE.otf";
import OuterSansRegular from "./assets/fonts/MADE Outer Sans Regular PERSONAL USE.otf";



const anuratiFontFace = `
    @font-face {
        font-family: "Anurati";
        font-weight: 400;
        src: url(${AnuratiRegular}) format("otf");
    }
`;

const russoOneFontFace = `
/* cyrillic */
@font-face {
  font-family: 'Russo One';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/russoone/v14/Z9XUDmZRWg6M1LvRYsHOy8mJrrg.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: 'Russo One';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/russoone/v14/Z9XUDmZRWg6M1LvRYsHOwcmJrrg.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Russo One';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/russoone/v14/Z9XUDmZRWg6M1LvRYsHOz8mJ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;

const outerSansAltFontFace = `
    @font-face {
        font-family: "MADE Outer Sans Alt;
        font-weight: 200;
        src: local("MADE Outer Sans Alt") url(${OuterSansAltThin}) format("otf");
    }
    @font-face {
        font-family: "MADE Outer Sans Alt;
        font-weight: 300;
        src: local("MADE Outer Sans Alt") url(${OuterSansAltLight}) format("otf");
    }
    @font-face {
        font-family: "MADE Outer Sans Alt;
        font-weight: 400;
        src: local("MADE Outer Sans Alt") url(${OuterSansAltRegular}) format("otf");
    }
    @font-face {
        font-family: "MADE Outer Sans Alt;
        font-weight: 500;
        src: local("MADE Outer Sans Alt") url(${OuterSansAltMedium}) format("otf");
    }
`;

const outerSansFontFace = `
    @font-face {
        font-family: "MADE Outer Sans";
        font-weight: 200;
        src: local("MADE Outer Sans") url(${OuterSansThin}) format("otf");
    }
    @font-face {
        font-family: "MADE Outer Sans";
        font-weight: 300;
        src: local("MADE Outer Sans") url(${OuterSansLight}) format("otf");
    }
    @font-face {
        font-family: "MADE Outer Sans";
        font-weight: 400;
        src: local("MADE Outer Sans") url(${OuterSansRegular}) format("otf");
    }
`;

const palette = {
    primary: {
        main: "#FE6F42"
    },
    background: {
        default: "#01020A"
    },
    text: {
        primary: "#FFFFFF"
    },

};

const theme = createTheme({
    typography: {
        fontFamily: 'Russo One, sans-serif',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    palette: palette,
    components: {
        MuiCssBaseline: {
            styleOverrides:
            [
                russoOneFontFace,
                anuratiFontFace,
                outerSansAltFontFace,
                outerSansFontFace
            ].join('\n'),
            
        },
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