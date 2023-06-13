import React from "react";
import { AndxPrice, AndxPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/AndxPrice",
  component: AndxPrice,
};

const Template: React.FC<AndxPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <AndxPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  andxPriceUsd: 20.0,
};
