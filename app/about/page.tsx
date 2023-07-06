"use client";

import { H2 } from "@/lib/client/style";
import styled from "@emotion/styled";

const Banner = styled.header`
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;

  @media (max-width: 809px) {
    height: 320px;
  }
`;

export default function About() {
  return (
    <Banner>
      <H2 subtitle>준비중입니다.</H2>
    </Banner>
  );
}
