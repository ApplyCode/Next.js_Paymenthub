import React from "react";
import { FAQContainer, QuestionAndAnswers } from "./styles";
import { DescriptionMdBold, Question, DescriptionSm } from "../Common/Text";
import { QueType } from "@/types";

interface FrequentlyAskedQuestionsProps {
  mb?: 0;
}

const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsProps> = ({
  mb = 0,
}) => {
  return (
    <>
      <Question mb={16} width={325}>
        Frequently Asked Questions
      </Question>
      <FAQContainer mb={mb}>
        {QuestionAndAnswers.map((item: QueType, key: number) => (
          <div key={key}>
            <DescriptionMdBold>{item.que}</DescriptionMdBold>
            <DescriptionSm>{item.aws}</DescriptionSm>
          </div>
        ))}
      </FAQContainer>
    </>
  );
};

export default FrequentlyAskedQuestions;
