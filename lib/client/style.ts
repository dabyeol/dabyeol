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

export const Description = styled.span`
  font-weight: 500;
  color: #999999;
`;

export const Caption = styled.p`
  font-size: 0.875rem; // 14px

  @media (max-width: 809px) {
    font-size: 0.75rem; // 12px
  }
`;
