import React from "react";
import { moneyMask } from "../TransactionCard";
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTrasaction,
} from "./styles";

interface HighlightCardPros {
  title: string;
  icon: string;
  amount: string | number;
  lastTransaction: string;
}

export const HighlightCard = ({
  title,
  icon,
  amount,
  lastTransaction,
}: HighlightCardPros) => {
  return (
    <Container type={title}>
      <Header>
        <Title type={title}>{title}</Title>
        <Icon name={icon} type={title} />
      </Header>
      <Footer>
        <Amount type={title}>R$ {moneyMask(amount)}</Amount>
        <LastTrasaction type={title}>{lastTransaction}</LastTrasaction>
      </Footer>
    </Container>
  );
};
