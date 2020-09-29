import React from "react";
import Demo from "./Demo";

export default {
  component: Demo,
  title: "Demo"
};

const Template = args => <Demo {...args} />;

export const Default = Template.bind({});
Default.args = {};
