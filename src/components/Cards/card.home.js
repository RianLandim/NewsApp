import React from "react";
import { Card, Paragraph, Title } from "react-native-paper";

const List = [
  {
    title: "Titulo 1",
    content: "Content Here!",
    img: "https://i.imgur.com/andY2Ua.jpg",
  },
  {
    title: "Titulo 2",
    content: "Content Here!",
    img: "https://i.imgur.com/ywQSBL2.jpg",
  },
];

const CardHome = ({ item }) => {
  <Card>
    <Card.Title title={item.title} />
    <Card.Content>
      <Title>{item.title}</Title>
      <Paragraph>{item.content}</Paragraph>
    </Card.Content>
  </Card>;
};

export default CardHome();
