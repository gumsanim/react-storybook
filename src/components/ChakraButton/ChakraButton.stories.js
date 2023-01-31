import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-actions";
import { text } from "@storybook/addon-controls";
export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    colorScheme: { control: "text" },
    children: { control: "text" },
    onClick: { action: "clicked" },
    styling: { control: "boolean" },
    cssStyle: { control: "object" },
  },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  colorScheme: "green",
  children: "Success",
};

export const Danger = () => (
  <Button onClick={action("Click handler")} colorScheme="red">
    Danger
  </Button>
);
export const Danger2 = () => (
  <Button {...actions("onClick", "onMouseOver")} colorScheme="red">
    Danger
  </Button>
);

export const Log = () => (
  <Button colorScheme={"blue"} onClick={() => console.log("gd")}>
    Log
  </Button>
);

export const Knobs = Template.bind({});
Knobs.args = {
  disabled: true,
  colorScheme: "gray",
  children: "zzzz",
  onClick: () => {},
  styling: false,
  style: {
    color: "red",
  },
};
