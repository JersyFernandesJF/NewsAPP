import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Header } from "../../components/header";
import { PostCard } from "../../components/post";

export const FeedScreen = () => {
  const data = {
    status: "ok",
    totalResults: 37,
    articles: [
      {
        source: { id: null, name: "Page Six" },
        author: "Nicki Gostin",
        title:
          "Kate Middleton attempts to contain Prince Louis as he taunts her with faces - Page Six",
        description:
          "The 4-year-old son of Kate Middleton and Prince William displayed some non-regal behavior during Queen Elizabeth II’s Platinum Jubilee Pageant on Sunday.",
        url: "https://pagesix.com/2022/06/05/kate-middleton-tries-to-contain-prince-louis-as-he-taunts-her-with-faces/",
        urlToImage:
          "https://pagesix.com/wp-content/uploads/sites/3/2022/06/britain-platinum-jubilee-louis-comp.jpg?quality=75&strip=all&w=1200",
        publishedAt: "2022-06-05T19:41:00Z",
        content:
          "Prince Louis displayed some decidedly non-regal behavior while watching the Platinum Jubilee Pageant on Sunday.\r\nThe 4-year-old was caught putting his hand over mother Kate Middletons mouth in a vide… [+2289 chars]",
      },
      {
        source: { id: "reuters", name: "Reuters" },
        author: null,
        title:
          "At least 50 killed in attack on Catholic church in southwest Nigeria -medic - Reuters.com",
        description:
          "Gunmen attacked a Catholic church in southwest Nigeria during mass on Sunday, killing at least 50 people including women and children, according to a hospital doctor and media reports.",
        url: "https://www.reuters.com/world/africa/gunmen-kill-worshippers-during-church-service-nigeria-media-2022-06-05/",
        urlToImage:
          "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=97",
        publishedAt: "2022-06-05T19:28:00Z",
        content:
          "LAGOS, June 5 (Reuters) - Gunmen attacked a Catholic church in southwest Nigeria during mass on Sunday, killing at least 50 people including women and children, according to a hospital doctor and med… [+1966 chars]",
      },
      {
        source: { id: null, name: "The Guardian" },
        author: "Dan Sabbagh",
        title:
          "Russia claims to have targeted western-supplied tanks in Kyiv airstrikes - The Guardian",
        description:
          "Putin warns of more strikes if deliveries continue, as Ukrainian railways chief says ‘no such tanks’ were at targeted plant",
        url: "https://amp.theguardian.com/world/2022/jun/05/russia-launches-air-strikes-into-kyiv-for-first-time-in-five-weeks",
        urlToImage:
          "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=97",
        publishedAt: "2022-06-05T19:09:00Z",
        content:
          "Smoke rises above Kyiv after first airstrikes on city in five weeks video\r\nUkrainePutin warns of more strikes if deliveries continue, as Ukrainian railways chief says no such tanks were at targeted p… [+6248 chars]",
      },
      {
        source: { id: null, name: "CBS Sports" },
        author: null,
        title:
          "Celtics vs. Warriors odds, prediction: 2022 NBA Finals picks, Game 2 best bets from expert on 38-16 run - CBS Sports",
        description:
          "SportsLine's Zack Cimini has revealed his 2022 NBA Finals picks for Game 2 of Boston Celtics vs. Golden State Warriors",
        url: "https://www.cbssports.com/nba/news/celtics-vs-warriors-odds-prediction-2022-nba-finals-picks-game-2-best-bets-from-expert-on-38-16-run/",
        urlToImage:
          "https://sportshub.cbsistatic.com/i/r/2022/06/04/cd00e71b-db07-4f3e-bc43-d736ee9957a6/thumbnail/1200x675/b5fe6d8baad60c77ae115aa76b2a6729/jaysontaumcbs.jpg",
        publishedAt: "2022-06-05T18:45:23Z",
        content:
          "Despite leading by 14 points late in the third quarter at home, the Golden State Warriors were outscored 40-16 in the final period to lose Game 1 of the 2022 NBA Finals on Thursday. Now they'll look … [+4195 chars]",
      },
      {
        source: { id: "cnn", name: "CNN" },
        author: "Tina Burnside, CNN",
        title:
          "Three killed, 14 injured in Chattanooga, Tennessee, shooting that left several victims hit by fleeing cars - CNN",
        description:
          "Three people were killed and at least 14 others were injured after gunshots rang out in Chattanooga, Tennessee, early Sunday, with some victims struck by bullets and others by fleeing vehicles, according to local police.",
        url: "https://www.cnn.com/2022/06/05/us/chattanooga-tennessee-shooting/index.html",
        urlToImage:
          "https://cdn.cnn.com/cnnnext/dam/assets/220605125354-chattanooga-shooting-0605-super-tease.jpg",
        publishedAt: "2022-06-05T18:20:00Z",
        content:
          "(CNN)Three people were killed and at least 14 others were injured after gunshots rang out in Chattanooga, Tennessee, early Sunday, with some victims struck by bullets and others by fleeing vehicles, … [+2172 chars]",
      },
      {
        source: { id: null, name: "New York Times" },
        author: "Andy Newman, Benjamin Weiser, Ashley Southall",
        title:
          "How a New York County Used the State’s ‘Red Flag’ Law to Seize 160 Guns - The New York Times",
        description:
          "Suffolk County on Long Island aggressively uses the law to take guns from people in crisis in an effort to prevent shootings and suicides. Its experience could inform a national debate.",
        url: "https://www.nytimes.com/2022/06/05/nyregion/red-flag-law-shootings-new-york.html",
        urlToImage:
          "https://static01.nyt.com/images/2022/06/03/nyregion/00ny-redflag-1/00ny-redflag-1-facebookJumbo.jpg",
        publishedAt: "2022-06-05T18:16:07Z",
        content:
          "Though Suffolk County judges grant most requests for orders, there are plenty of exceptions.\r\nLast August, a man texted a friend that he had tried to shoot himself but the gun jammed, and added, I do… [+1362 chars]",
      },
      {
        source: { id: "cnn", name: "CNN" },
        author: "Aimee Lewis",
        title:
          "Ukraine's hopes of reaching this year's World Cup end with defeat against Wales - CNN",
        description:
          "It is on occasions such as this that sport's significance and insignificance are highlighted in equal measure.",
        url: "https://www.cnn.com/2022/06/05/football/wales-ukraine-world-cup-qualifer-spt-intl/index.html",
        urlToImage:
          "https://media.cnn.com/api/v1/images/stellar/prod/220605130505-ukraine-wales-world-cup.jpg?c=16x9&q=w_800,c_fill",
        publishedAt: "2022-06-05T17:58:00Z",
        content:
          "Cardiff City Stadium, WalesCNN\r\n  — \r\nIt is on occasions such as this that sports significance and insignificance are highlighted in equal measure.\r\nUkraine has failed to qualify for this years FIFA … [+4490 chars]",
      },
      {
        source: { id: null, name: "Daily Beast" },
        author: "Tom Sykes, Tim Teeman",
        title:
          "Queen Elizabeth Makes Surprise Balcony Appearance, Says She Is 'Deeply Touched' by Platinum Jubilee - The Daily Beast",
        description:
          "The queen emerged for her adoring public on the final day of the Platinum Jubilee, later saying she had been “humbled” by the festivities, adding, “My heart has been with you all.”",
        url: "https://www.thedailybeast.com/queen-elizabeth-makes-surprise-final-jubilee-balcony-appearance-while-harry-and-meghan-stay-unseen",
        urlToImage:
          "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_334,w_594,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1654447409/gettyimages-1401183446-594x594_wmwslt",
        publishedAt: "2022-06-05T17:55:02Z",
        content:
          "Royalist is The Daily Beasts newsletter for all things royal and Royal Family. Subscribe here to get it in your inbox every Sunday.\r\nQueen Elizabeth has delivered a final Platinum Jubilee message, sa… [+4129 chars]",
      },
      {
        source: { id: "google-news", name: "Google News" },
        author: null,
        title:
          "Toomey says Biden not ‘helpful’ amid negotiations on gun legislation - The Hill",
        description: null,
        url: "https://news.google.com/__i/rss/rd/articles/CBMidmh0dHBzOi8vdGhlaGlsbC5jb20vbmV3cy9zdW5kYXktdGFsay1zaG93cy8zNTEyNDcxLXRvb21leS1zYXlzLWJpZGVuLW5vdC1oZWxwZnVsLWFtaWQtbmVnb3RpYXRpb25zLW9uLWd1bi1sZWdpc2xhdGlvbi_SAXpodHRwczovL3RoZWhpbGwuY29tL25ld3Mvc3VuZGF5LXRhbGstc2hvd3MvMzUxMjQ3MS10b29tZXktc2F5cy1iaWRlbi1ub3QtaGVscGZ1bC1hbWlkLW5lZ290aWF0aW9ucy1vbi1ndW4tbGVnaXNsYXRpb24vYW1wLw?oc=5",
        urlToImage:
          "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=97",
        publishedAt: "2022-06-05T17:43:00Z",
        content: null,
      },
      {
        source: { id: "cnn", name: "CNN" },
        author: "Andy Rose, Holly Yan, Samantha Beech",
        title:
          "'Several active shooters' in a popular Philadelphia area leave 3 people dead and 11 others wounded - CNN",
        description:
          "A bustling entertainment district turned into a scene of carnage when multiple shooters opened fire in the South Street area of Philadelphia, police said.",
        url: "https://www.cnn.com/2022/06/05/us/philadelphia-south-street-shooting/index.html",
        urlToImage:
          "https://media.cnn.com/api/v1/images/stellar/prod/220605054431-02-south-philadelphia-shooting.jpg?c=16x9&q=w_800,c_fill",
        publishedAt: "2022-06-05T17:26:00Z",
        content:
          "A bustling entertainment district turned into a scene of carnage when multiple shooters opened fire in the South Street area of Philadelphia, police said. \r\nAt least three people were killed and 11 o… [+2543 chars]",
      },
      {
        source: { id: null, name: "The Guardian" },
        author: "Ramon Antonio Vargas",
        title:
          "Schiff: DoJ decision not to indict Trump ex-aides Meadows and Scavino a ‘grave disappointment’ - The Guardian US",
        description:
          "Member of Capitol attack panel says decision not to charge the two with contempt of Congress could ‘impede our work’",
        url: "https://amp.theguardian.com/us-news/2022/jun/05/doj-decision-meadows-scavino-schiff",
        urlToImage:
          "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=97",
        publishedAt: "2022-06-05T17:00:00Z",
        content:
          "US Capitol attackMember of Capitol attack committee says decision not to charge the two with contempt of Congress could impede our work \r\nCalifornia congressman Adam Schiff a member of the select Hou… [+3959 chars]",
      },
      {
        source: { id: "cnn", name: "CNN" },
        author: "Ramishah Maruf, CNN",
        title:
          "Starbucks workers claim their store is closing due to union activism - CNN",
        description:
          "Starbucks workers at an Ithaca, New York, store claim their location is being shut down in retaliation for their union activism.",
        url: "https://www.cnn.com/2022/06/05/business/starbucks-ithaca-store-closure/index.html",
        urlToImage:
          "https://cdn.cnn.com/cnnnext/dam/assets/220604160834-01-starbucks-ithaca-store-closure-super-tease.jpg",
        publishedAt: "2022-06-05T16:55:00Z",
        content:
          "New York (CNN)Starbucks workers at an Ithaca, New York, store claim their location is being shut down in retaliation for their union activism. \r\nThe worker committee said it is filing an Unfair Labor… [+2845 chars]",
      },
      {
        source: { id: "the-verge", name: "The Verge" },
        author: "Emma Roth",
        title:
          "The new MacBook Air might come with a long wait time - The Verge",
        description:
          "While Apple is expected to announce the new MacBook Air at WWDC, it may not immediately be available for purchase. According to Mark Gurman, COVID-related closures at factories in China could contribute to long wait times.",
        url: "https://www.theverge.com/2022/6/5/23155291/new-macbook-air-long-wait-time-apple-wwdc-covid-closures-china",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/uK7IBBHUs0tcKJMATsswG5lS_xo=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22046476/vpavic_4291_20201113_0366.0.jpg",
        publishedAt: "2022-06-05T16:47:06Z",
        content:
          "COVID-related closures in China may affect its launch date\r\nPhoto by Vjeran Pavic / The Verge\r\nApple is poised to reveal a new MacBook Air at its annual Worldwide Developers Conference (WWDC) on Mond… [+3099 chars]",
      },
      {
        source: { id: null, name: "HipHopDX" },
        author: "Kyle Eustice",
        title: "Trouble Reportedly Murdered At 35 - HipHopDX",
        description:
          "According to Raphouse TV, Trouble sister confirmed he was shot and killed on Saturday night (June 4) as he was sitting in his car.",
        url: "https://hiphopdx.com/news/id.70782/title.atlanta-rapper-trouble-reportedly-shot-killed-at-35",
        urlToImage:
          "https://static.hiphopdx.com/2021/08/trouble-getty-1200x675.jpg",
        publishedAt: "2022-06-05T16:47:00Z",
        content:
          "Atlanta, GA – Atlanta rapper Trouble has reportedly died at the age of 35. According to Raphouse TV, his sister confirmed he was shot and killed on Saturday night (June 4) as he was sitting in his ca… [+881 chars]",
      },
      {
        source: { id: null, name: "Deadline" },
        author: "Nancy Tartaglione",
        title:
          "‘Top Gun: Maverick’ Soars To $549M Global; ‘Jurassic World Dominion’ Grabs $56M In Early Offshore Bow & ‘Doctor Strange 2’ Crosses $900M WW – International Box Office - Deadline",
        description:
          "Refresh for latest…: Paramount/Skydance’s Top Gun: Maverick, as projected yesterday, has flown past $500M worldwide, with $548.6M through its first two frames. The offshore weekend is estimated at $81.7M, an incredible hold of -20%, to lift the international …",
        url: "https://deadline.com/2022/06/top-gun-maverick-tom-cruise-500-million-second-weekend-jurassic-world-dominion-doctor-strange-global-international-boxofficeinternational-box-office-1235038582/",
        urlToImage:
          "https://deadline.com/wp-content/uploads/2022/05/top-gun-2-1-e1653660481403.jpg?w=1024",
        publishedAt: "2022-06-05T16:08:00Z",
        content:
          "Refresh for latest…: Paramount/Skydance’s Top Gun: Maverick, as projected yesterday, has flown past $500M worldwide, with $548.6M through its first two frames. The offshore weekend is estimated at $8… [+2612 chars]",
      },
      {
        source: { id: null, name: "Sports Illustrated" },
        author: "Daniel Chavkin",
        title:
          "Umpires Don’t Allow Dodgers to Use Position Player as Pitcher in Ninth Inning - Sports Illustrated",
        description:
          "Dave Roberts tried to avoid using a reliever despite down one less run than the rule allows.",
        url: "https://www.si.com/mlb/2022/06/05/umpires-dont-allow-dodgers-to-use-position-player-as-pitcher",
        urlToImage:
          "https://www.si.com/.image/t_share/MTg5OTg3MDM3MzMwMjg1NjYx/dave-roberts.jpg",
        publishedAt: "2022-06-05T15:49:05Z",
        content:
          "Down five in the ninth inning to the Mets, Dodgers manager Dave Roberts didn’t want to waste any more of his relievers, so he sent outfielder Zach McKinstry in to pitch. However, that is not allowed.… [+1152 chars]",
      },
      {
        source: { id: null, name: "New York Times" },
        author: "Christopher Clarey",
        title:
          "Rafael Nadal, Looking Unbeatable, Wins 14th French Open Title - The New York Times",
        description:
          "Nadal extended his men’s singles record of 22 Grand Slam titles with a win in straight sets over Casper Ruud.",
        url: "https://www.nytimes.com/2022/06/05/sports/tennis/rafael-nadal-french-open.html",
        urlToImage:
          "https://static01.nyt.com/images/2022/06/05/sports/05french-mens-final1/merlin_208101867_c3a3a23d-81ba-4ab2-9144-0da80d729a0a-facebookJumbo.jpg",
        publishedAt: "2022-06-05T15:31:29Z",
        content:
          "He also extended his lead in the three-way majors race with Djokovic and Roger Federer. Nadal now has a mens record 22 Grand Slam singles titles, two more than Djokovic, whom Nadal beat in the quarte… [+882 chars]",
      },
      {
        source: { id: "the-verge", name: "The Verge" },
        author: "Monica Chin",
        title: "We're still waiting for the laptop's big year - The Verge",
        description:
          "At the beginning of this year, it looked like multiple companies were going to be pushing the boundaries of what laptops could look like and be. But COVID-19 and supply chain issues are holding up those groundbreaking releases.",
        url: "https://www.theverge.com/2022/6/5/23150224/computex-laptops-ces-hp-lenovo-dell",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/H4YNTXL5-vde5bvLnJZVdreG7Z4=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22146172/akrales_201203_4316_0052.0.jpg",
        publishedAt: "2022-06-05T15:30:00Z",
        content:
          "Companies have made huge promises about laptops, but the products still havent materialized\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nPhoto … [+7589 chars]",
      },
      {
        source: { id: null, name: "CinemaBlend" },
        author: "Carly Levy",
        title:
          "Rumors Are Swirling About A Possible Michael B Jordan And Lori Harvey Split, But The Truth May Be More Complicated - CinemaBlend",
        description:
          "What is the complicated truth about the possible Michael B. Jordan and Lori Harvey split?",
        url: "https://www.cinemablend.com/movies/rumors-are-swirling-about-a-possible-michael-b-jordan-and-lori-harvey-split-but-the-truth-may-be-more-complicated",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/YPEgfDNH6p2PShTjPocaZE-1200-80.jpg",
        publishedAt: "2022-06-05T15:26:04Z",
        content:
          "Michael B. Jordan and Lori Harvey have been one of those couples who are so adorable that it hurts\r\n. However, after one year of dating, there are now rumors circulating that the sweet cute couple ha… [+3449 chars]",
      },
      {
        source: { id: null, name: "CNBC" },
        author: "Annie Nova",
        title:
          "'Cancel it all or do nothing': Readers react to the chance of $10,000 in student loan forgiveness - CNBC",
        description:
          "CNBC.com asked readers how they'd feel about the White House forgiving $10,000 in student debt. Dozens of people wrote in. Here's what four of them had to say.",
        url: "https://www.cnbc.com/2022/06/05/cnbc-readers-react-to-chance-of-10000-in-student-loan-forgiveness-.html",
        urlToImage:
          "https://image.cnbcfm.com/api/v1/image/107070827-1654264634715-gettyimages-623817156-thewhitehousewashingtondcamerica.jpeg?v=1654265567&w=1920&h=1080",
        publishedAt: "2022-06-05T14:00:01Z",
        content:
          "The White House, Washington, D.C.\r\nTens of millions of Americans are waiting anxiously for word from the Biden administration on what it plans to do on broad-based student loan forgiveness.\r\nMost rec… [+5352 chars]",
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <Header
            name="Jersy Fernandes"
            email="jersysilvafernandes@gmail.com"
          />
        )}
        keyExtractor={(item) => item.title}
        data={data.articles}
        renderItem={({ item }) => (
          <PostCard imageURL={item.urlToImage} title={item.title} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  list: {
    flex: 7,
  },
});
