import React from "react";
import NewsCard from "../NewsCard/NewsCard";
//import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import { Typography } from "@mui/material";

const infoCards = [
  {
    color: "#00838f",
    title: "Latest News",
    text: "Get me the latest news",
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Sports news",
  },
  {
    color: "#4527a0",
    title: "News by Subjects",
    info: "Bitcoin, Coronavirus, Stock Market, The Philadelphia Phillies...",
    text: "What's up with AI technology",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          style={{
            padding: "0 5%",
            width: "100%",
            margin: 0,
          }}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "45vh",
                  padding: "10%",
                  borderRadius: 10,
                  backgroundColor: infoCard.color,
                  color: "white",
                }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  <span style={{ fontSize: "1.20em" }}> Try saying:</span>{" "}
                  <br />
                  <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        style={{
          padding: "0 5%",
          width: "100%",
          margin: 0,
        }}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex" }}
          >
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
