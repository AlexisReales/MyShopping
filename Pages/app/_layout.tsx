import { Tabs } from "expo-router";
import React from "react";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Produtos"
        options={{
          href: 'Produtos',
        }}
      />
      <Tabs.Screen
        name="Comprovantes"
        options={{
          href: 'Comprovantes',
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

//TelaA = sobre | TelaB cadastro