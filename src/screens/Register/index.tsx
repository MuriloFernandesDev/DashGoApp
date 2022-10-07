import { Container, Header, Title, Form, TransactionsTypes } from "./styles";
import React, { useState } from "react";
import { Input } from "../../Components/Form/Input";
import { Button } from "../../Components/Form/Button";
import { View } from "react-native";
import { TransactionTypeButton } from "../../Components/Form/TransactionTypeButton";

export function Register() {
  const [transactionType, setTransactionType] = useState("");
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <View>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <Input placeholder="Nome" />
          <TransactionsTypes>
            <TransactionTypeButton
              onPress={() => setTransactionType("up")}
              isActive={transactionType}
              title="Income"
              type="up"
            />
            <TransactionTypeButton
              onPress={() => setTransactionType("down")}
              title="OutCome"
              isActive={transactionType}
              type="down"
            />
          </TransactionsTypes>
        </View>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
