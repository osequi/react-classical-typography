import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Helmet from "react-helmet";

/**
 * Imports other components and hooks
 */

/**
 * Defines the prop types
 */
const propTypes = {
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  fontSize: "100%",
  lineHeight: "1.25",
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

/**
 * Displays the component
 */
const Grid = (props) => {
  const { fontSize, lineHeight } = props;

  return (
    <Helmet>
      <body style={`font-size: ${fontSize}; line-height: ${lineHeight}`} />
    </Helmet>
  );
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
export { propTypes as GridPropTypes, defaultProps as GridDefaultProps };
