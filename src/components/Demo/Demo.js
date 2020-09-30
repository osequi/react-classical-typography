import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import Grid from "../Grid";
import Typography from "../Typography";
import Headings from "@bit/osequi.test.headings";
import { H1 } from "@bit/osequi.test.semantic-elements";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

/**
 * Displays the component
 */
const Demo = (props) => {
  const { container } = useStyles(props);

  return (
    <div className={clsx("Demo", container)}>
      <Grid displayVerticalRhytm={true} displayHorizontalRhytm={true} />
      <Typography variant="title" component={Headings}>
        Demo
      </Typography>
    </div>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
