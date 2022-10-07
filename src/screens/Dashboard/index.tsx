import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../Components/HighlightCard";
import { TransactionCard } from "../../Components/TransactionCard";

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

export function Dashboard() {
  const data = [
    {
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
      type: "negative",
      title: "Desenvolvimento de site",
      amount: "20000",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
    {
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "20000",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
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
          amount="17000"
          lastTransaction="Última entrada 21 de maio"
        />

        <HighlightCard
          title="Saída"
          icon="arrow-down-circle"
          amount="17000"
          lastTransaction="21 de maio"
        />

        <HighlightCard
          title="Total"
          icon="dollar-sign"
          amount="17000"
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
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: getBottomSpace() }}
        />
      </Transactions>
    </Container>
  );
}
