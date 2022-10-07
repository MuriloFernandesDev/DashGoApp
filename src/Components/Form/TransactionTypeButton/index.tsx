import React, { useState } from "react";
import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
  isActive: string;
}

export const TransactionTypeButton = ({
  title,
  type,
  isActive,
  ...rest
}: Props) => {
  //verificar isActive
  return (
    <Container {...rest}>
      <Icon name={`arrow-${type}-circle`} type={type} />
      <Title type={type}>{title}</Title>
    </Container>
  );
};
