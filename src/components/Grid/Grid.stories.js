import React from "react";
import Grid from "./Grid";

export default {
  component: Grid,
  title: "Grid"
};

const Template = args => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {};
