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

export interface TransactionCardProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export const moneyMask = (value: string | number) => {
  var tmp = value + "";
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
  if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return tmp;
};

export const TransactionCard = ({ data }: Props) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === "negative" ? "- " : ""}R$ {moneyMask(data.amount)}
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
