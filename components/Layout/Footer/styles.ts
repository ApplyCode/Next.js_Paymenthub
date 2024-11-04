import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 66px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-right: 1px solid rgba(228, 228, 228, 0.1);
  padding-right: 28px;
  padding-left: 340px;
  flex-shrink: 0;
  z-index: 100;
  background: #121115;
  position: fixed;

  bottom: 0;
  left: 0;

  @media (max-width: 1440px) {
    padding-left: 300px;
  }

  @media (max-width: 768px) {
    padding-left: 30px;
    justify-content: space-between;
  }
  @media (max-width: 477px) {
    justify-content: center;
  }
`;
export const LogoContainerFooter = styled.div`
  display: flex;
  height: 66px;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  @media (max-width: 1440px) {
    font-size: 15px;
    gap: 10px;
  }
  @media (max-width: 477px) {
    display: none;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  height: 66px;
  gap: 30px;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    font-size: 15px;
    gap: 10px;
  }

  @media (max-width: 1440px) {
    font-size: 15px;
    gap: 10px;
  }
  @media (max-width: 768px) {
    hidden;
  }
`;

export const MobileReality = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 900;
  color: #a5a5a5;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 1440px) {
    font-size: 15px;
  }
`;

export const TaxId = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  color: #a5a5a5;
  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 1440px) {
    font-size: 15px;
  }
`;
export const LinkItem = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  color: #a5a5a5;

  @media (max-width: 1440px) {
    font-size: 15px;
  }
`;

export const TaxInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 66px;
  gap: 20px;
  align-items: center;
`;
