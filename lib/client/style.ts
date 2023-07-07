import styled from "@emotion/styled";

export const Wrapper = styled.article`
  width: 1176px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;

  @media (max-width: 1199px) {
    width: 100%;
  }

  @media (max-width: 809px) {
    padding: 16px;
    gap: 16px;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 809px) {
    gap: 12px;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: min-content;
  gap: 24px;

  @media (max-width: 809px) {
    gap: 16px;
  }
`;

const Heading = styled.span<{ subtitle?: boolean }>`
  margin: 0;
  word-break: keep-all;
  font-weight: ${({ subtitle }) => (subtitle ? 500 : 600)};
  line-height: 1.4;
  letter-spacing: -0.025em;
  color: ${({ color, subtitle }) =>
    color || (subtitle ? "#999999" : "#333333")};
`;

export const H1 = styled(Heading)`
  font-size: 3rem; // 48px

  @media (max-width: 1199px) {
    font-size: 2.5rem; // 40px
  }

  @media (max-width: 809px) {
    font-size: 2rem; // 32px
  }
`.withComponent("h1");

export const H2 = styled(Heading)`
  font-size: 2.5rem; // 40px

  @media (max-width: 1199px) {
    font-size: 2rem; // 32px
  }

  @media (max-width: 809px) {
    font-size: 1.75rem; // 28px
  }
`.withComponent("h2");

export const H3 = styled(Heading)`
  font-size: 2rem; // 32px

  @media (max-width: 1199px) {
    font-size: 1.75rem; // 28px
  }

  @media (max-width: 809px) {
    font-size: 1.5rem; // 24px
  }
`.withComponent("h3");

export const H4 = styled(Heading)`
  font-size: 1.5rem; // 24px

  @media (max-width: 809px) {
    font-size: 1.25rem; // 20px
  }
`.withComponent("h4");

export const H5 = styled(Heading)`
  font-size: 1.25rem; // 20px

  @media (max-width: 809px) {
    font-size: 1.125rem; // 18px
  }
`.withComponent("h5");

export const H6 = styled(Heading)`
  font-size: 1rem; // 16px
`.withComponent("h6");

export const Caption = styled.p`
  font-size: 0.875rem; // 14px

  @media (max-width: 809px) {
    font-size: 0.75rem; // 12px
  }
`;
