import type { NextPage } from "next";
import Head from "next/head";
import { styled } from "../../stitches.config";
import ButtonPrimary from "components/ButtonPrimary";
import { Wrapper } from "components/Wrapper";
import { PostMain } from "components/Post";
import Navbar from "components/NavBar";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Gustavo Jobstraibizer</title>
        <meta
          name="description"
          content="I'm Front-end developer working on this world more or less 7 years"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />

      <HomeContainer>
        <AboutContainer>
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 1,
              type: "tween"
            }}
            css={{
              backgroundImage: `linear-gradient(90deg, $pink, $purple)`,
            }}
          >
            Gustavo Jobstraibizer
          </Title>
          <DescriptionMain>
            Front-end developer working on this world more or less 7 years.
          </DescriptionMain>
          <ButtonPrimary />
        </AboutContainer>
      </HomeContainer>
    </Wrapper>
  );
};

const DescriptionMain = styled("p", {
  lineHeight: "2.8rem",
  letterSpacing: "-0.04em",
});

const Title = styled(motion.h1, {
  color: "$white",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  MozBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  MozTextFillColor: "transparent",
  WebkitBoxDecorationBreak: "clone",
});

const AboutContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "1.2rem",
  "@bp3": { flexBasis: "42%" },
});

const HomeContainer = styled(PostMain, {
  alignItems: "center",
  display: "flex",
  margin: "0 auto",
  "@bp2": { width: 980, flexDirection: "row" },
});

export default Home;
