import React from "react";
import { Dashboard } from "./src/screens/Dashboard";
import { ThemeProvider } from "styled-components/native"; //envolve toda aplicação no theme global
import theme from "./src/global/styles/theme"; //tema default vindo do global
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  //
  useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  //
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
