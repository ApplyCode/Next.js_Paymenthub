import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const ImageContainer = styled.div`
  display: flex;
  max-width: 50%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 80px;
  background: #f6f8f9;

  @media (max-width: 930px) {
    display: none;
  }
`;

export const WelcomeTitle = styled.div`
  max-width: 525px;
  color: #24232b;
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const FormContainer = styled.div`
  text-align: center;
  //   max-width: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px 160px 0px 48px;
  gap: 85px;

  @media (max-width: 1440px) {
    padding: 100px 48px 0px 48px;
  }

  @media (max-width: 930px) {
    padding: 80px 80px 0px 80px;
    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 50px 30px 0px 30px;
    width: 100%;
  }
`;

export const DescriptionLgBold = styled.div`
  max-width: 525px;
  text-align: center;
  color: #000000;
  line-height: 28px;
  font-size: 20px;
  font-weight: 400;
`;

export const SignTitle = styled.span`
  font-color: #24232b;
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
`;

export const SubmitForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 55px; //64
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const GoogleButton = styled.div`
  color: #24232b;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  vertical-trim: Cap height;
  border: 2px solid #f53103;
  border-radius: 32px;
  background: white;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #f53103;
    color: #ffffff;
  }
`;

export const BothInput = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 1060px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const SignQue = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  color: #24232b;
`;

export const SignLink = styled.a`
  color: #f53103;
  font-size: 20px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

export const QueContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const LetterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
`;

export const MarkContainer = styled.div<{ mb: 0 }>``;
