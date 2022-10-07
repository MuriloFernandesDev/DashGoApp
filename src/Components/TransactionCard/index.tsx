import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  CategoryName,
  Icon,
  Date,
} from "./styles";

interface Category {
  name: string;
  icon: string;
}

interface TransactionCardProps {
  data: {
    type: "positive" | "negative";
    title: string;
    amount: string;
    category: Category;
    date: string;
  };
}

export const TransactionCard = ({ data }: TransactionCardProps) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === "negative" ? "- " : ""}R$ {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};