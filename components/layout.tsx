"use client";

import styled from "@emotion/styled";
import Topbar from "./topbar";
import Footer from "./footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 64px;
`;

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Topbar />
      {children}
      <Footer />
    </Wrapper>
  );
}
