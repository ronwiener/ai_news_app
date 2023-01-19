import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = ({ articles }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <div>
        {articles.length ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: matchesSM ? "column" : null,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: matchesSM ? "1em" : matchesMD ? "1.25em" : "1.5em",
                width: matchesSM ? "55%" : matchesMD ? "30%" : "20%",
                padding: "3%",
                borderRadius: 10,
                color: "white",
                backgroundColor: "rgba(21, 101, 192)",
                margin: "0 12px",
                height: matchesSM ? "initial" : "25vmin",
                flexDirection: matchesSM ? "column-reverse" : null,
                marginBottom: matchesSM ? "12px" : "0px",
              }}
            >
              <Typography
                style={{
                  fontSize: matchesSM ? "18px" : matchesMD ? "22px" : "26px",
                }}
              >
                Try saying: <br />
                <br />
                Open article number...
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: matchesSM ? "55%" : matchesMD ? "30%" : "20%",
                padding: "3%",
                borderRadius: 10,
                color: "white",
                backgroundColor: "rgba(21, 101, 192)",
                margin: "0 6px",
                height: matchesSM ? "initial" : "25vmin",
                flexDirection: matchesSM ? "column-reverse" : null,
                marginBottom: matchesSM ? "12px" : "0px",
              }}
            >
              <Typography
                style={{
                  fontSize: matchesSM ? "18px" : matchesMD ? "22px" : "26px",
                }}
              >
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Header;

/*
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'rgba(21, 101, 192)',
  },
  image: {
    marginLeft: 20,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(21, 101, 192)',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
  alanLogo: {
    height: '15vmin',
    padding: '0 5%',
    margin: '3% 0',
    [theme.breakpoints.down('sm')]: {
      height: '10vmin',
    },
  },
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vmin',
    width: '100%',
    backgroundColor: '#233ABB ',
    color:'white',
  }
}));
*/
