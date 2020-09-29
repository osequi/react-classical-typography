import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { ms } from "modularscale-js";

/**
 * Imports other components and hooks
 */
import { H1, H2, H3, H4, H5, H6 } from "@bit/osequi.test.semantic-elements";

/**
 * Defines the text types.
 * Each text type is standalone an unique, defined by a font face, scale, colors etc.
 * Onlye these text types will be accessible from the app.
 * Accessing and styling directly standard tags like '<H1>' is not recommended.
 * @type {Array}
 */
const variants = ["default", "body", "title"];

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * What to display.
   * It's like the `text-style()` mixin from the old framework.
   * Tries to follow the Material UI syntax.
   * @type {string}
   * @see https://github.com/metamn/beat/blob/master/code/framework/design/typography/text-style/text-style.json
   * @see https://material-ui.com/components/typography/#typography
   */
  variant: PropTypes.oneOf(variants),
  /**
   * Setting up the Modular Scale
   * @type {object}
   * @see https://github.com/modularscale/modularscale-js
   */
  scale: PropTypes.shape({
    base: PropTypes.arrayOf(PropTypes.number),
    ratio: PropTypes.number,
  }),
};

/**
 * Defines the default props
 */
const defaultProps = {
  variant: "default",
  /**
   * Perfect fourth
   */
  scale: {
    base: [1],
    ratio: 1.333,
  },
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  default: {
    fontSize: (props) => ms(0, props.scale),
  },

  body: {
    fontSize: (props) => ms(0, props.scale),
  },

  title: {
    fontSize: (props) => ms(1, props.scale),
  },
}));

/**
 * Displays the component
 */
const Typography = (props) => {
  const { default, body, title } = useStyles(props);

  return <div className={clsx("Typography", container)}>Typography</div>;
};

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;
export {
  propTypes as TypographyPropTypes,
  defaultProps as TypographyDefaultProps,
};
