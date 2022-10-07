import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { HighlightCard } from "../../Components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../Components/TransactionCard";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  UserComplement,
  UserName,
  User,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

interface DataListProps extends TransactionCardProps {
  id: number;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: 1,
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "20000",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
    {
      id: 2,
      type: "negative",
      title: "Hamburgueria Pyzzy",
      amount: "5900",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "13/04/2020",
    },
    {
      id: 3,
      type: "negative",
      title: "Aluguel de apartamento",
      amount: "1200",
      category: {
        name: "Casa",
        icon: "shopping-bag",
      },
      date: "13/04/2020",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/103587328?v=4",
              }}
            />
            <User>
              <UserComplement>Olá, </UserComplement>
              <UserName>Murilo</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          icon="arrow-up-circle"
          amount="170000"
          lastTransaction="Última entrada 21 de maio"
        />

        <HighlightCard
          title="Saída"
          icon="arrow-down-circle"
          amount="170000"
          lastTransaction="21 de maio"
        />

        <HighlightCard
          title="Total"
          icon="dollar-sign"
          amount="1700000"
          lastTransaction="21 de maio"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          renderItem={({ item }: any) => {
            return <TransactionCard data={item} />;
          }}
          keyExtractor={(item: any) => item.id}
        />
      </Transactions>
    </Container>
  );
}
