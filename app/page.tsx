"use client";

import ImageCard from "@/components/image-card";
import { Grid, H2, H3, Section, Wrapper } from "@/lib/client/style";
import styled from "@emotion/styled";

const Banner = styled.header`
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: #111111;

  @media (max-width: 809px) {
    height: 320px;
  }
`;

export default function Home() {
  return (
    <>
      <Banner>
        <H2 color="#ffffff">작지만 도움되는 것들을 만듭니다.</H2>
      </Banner>
      <Wrapper>
        <Section>
          <H3>서비스</H3>
          <Grid>
            <ImageCard
              src="/images/whatsubs.png"
              title="Whatsubs"
              description="나에게 꼭 맞는 구독 조합"
              href="https://whatsubs.dabyeol.com"
            />
          </Grid>
        </Section>
      </Wrapper>
    </>
  );
}
