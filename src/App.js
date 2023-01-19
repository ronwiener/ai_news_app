import React, { useState, useEffect, useRef } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import NewsCards from "./components/NewsCards/NewsCards";
import Header from "./components/Header/Header";
import { Typography } from "@mui/material";
import wordsToNumbers from "words-to-numbers";

const alanKey =
  "fc873534e3fa05ae953170496d91f1f82e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const alanBtnRef = useRef({}).current;
  useEffect(() => {
    alanBtnRef.btnInstance = alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          console.log(articles.content);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening article");
          } else {
            alanBtn().playText("Please try that again");
          }
        }
      },
      onButtonState: async function (status) {
        if (status === "ONLINE") {
          if (!this.greetingWasSaid) {
            await alanBtnRef.btnInstance.activate();
            alanBtnRef.btnInstance.playText(
              "Hi there, I'm Alan.  I'm here to help you find the news, business, sports, or other articles of interest.  Click on the microphone icon and then try saying one of the commands listed on the cards.  But before we get started, can you tell me your name?."
            );
            this.greetingWasSaid = true;
          }
        }
      },
    });
  }, [alanBtnRef]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          style={{
            height: matchesSM ? "16vh" : "27vh",
            borderRadius: "15%",
            margin: " 1% 0",
          }}
          src="https://alan.app/brand_assets/logo-horizontal/color/alan-logo-horizontal-color.svg"
          alt="alan logo"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography
          style={{
            fontSize: matchesSM ? "1.0rem" : "2.5rem",
            marginRight: matchesSM ? "15px" : null,
          }}
        >
          <span>Voice Assisted News Search</span>
        </Typography>
      </div>
      <Header articles={newsArticles} />
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
