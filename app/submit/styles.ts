import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 90px;

  @media (max-width: 1024px) {
    gap: 33px;
    transition: 0.3s;
    flex-direction: column;
  }

  @media (max-width: 1440px) {
    gap: 20px;
    transition: 0.3s;
  }
`;

export const FromGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 33px;
`;

export const SubmitContainer = styled.div<{ mb?: 0 }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: ${(props) => props.mb || 0}px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  gap: 5px;
`;
