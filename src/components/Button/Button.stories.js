import React from "react";
import Button from "./Button";
import Center from "../Center/Center";
export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button",
  },
  decorators: [(story) => <Center>{story()}</Center>], // story들을 wrapping하는 역할 (해당스토리에 한정)
};

export const Primary = () => (
  <Center>
    <Button variant={"primary"}>Primary</Button>
  </Center>
);
export const Secondary = () => <Button variant={"secondary"}>Secondary</Button>;
export const Success = () => <Button variant={"success"}>Success</Button>;
export const Danger = () => <Button variant={"danger"}>Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...Primary.args,
  // children: "LongPrimary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
