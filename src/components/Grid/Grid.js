import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Helmet from "react-helmet";
import shortid from "shortid";

/**
 * Imports other components and hooks
 */

/**
 * Defines the prop types
 */
const propTypes = {
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  /**
   * Display horizontal lines?
   */
  displayHorizontalRhytm: PropTypes.bool,
  /**
   * Display vertica lines?
   */
  displayVerticalRhytm: PropTypes.bool,
  /**
   * Number of horizontal lines on the grid
   */
  numberOfHorizontalLines: PropTypes.number,
  /**
   * Number of vertical lines on the grid
   */
  numberOfVerticalLines: PropTypes.number,
  /**
   * The color of the grid line
   */
  lineColor: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  fontSize: "100%",
  lineHeight: "1.25",
  displayHorizontalRhytm: false,
  displayVerticalRhytm: false,
  numberOfHorizontalLines: 100,
  numberOfVerticalLines: 100,
  lineColor: "lightgrey",
};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  rhythmContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },

  verticalRhythmContainer: (props) => ({
    display: props.displayVerticalRhytm ? "flex" : "none",
    flexWrap: "wrap",
  }),

  horizontalRhythmContainer: (props) => ({
    display: props.displayHorizontalRhytm ? "block" : "none",
  }),

  rhythmLine: (props) => ({
    display: "block",
    boxSizing: "border-box",
    borderColor: props.lineColor ? props.lineColor : "transparent",
    borderWidth: 1,
  }),

  verticalRhythmLine: {
    width: "var(--lem)",
    height: "100%",
    borderRightStyle: "solid",
  },

  horizontalRhythmLine: {
    width: "100%",
    height: "var(--lem)",
    borderBottomStyle: "solid",
  },
}));

/**
 * Sets up the typographic grid globally on the `<body>` tag.
 * A bug in Helmet doesn't let setting up the `<body>` with object notation.
 * @see https://github.com/nfl/react-helmet/issues/344
 */
const globalSettings = (props) => {
  const { fontSize, lineHeight } = props;

  return (
    <Helmet>
      <body
        style={`font-size: ${fontSize}; line-height: ${lineHeight}; --lem: 1.25em`}
      />
    </Helmet>
  );
};

/**
 * Draws a set of lines
 */
const drawLines = (props) => {
  const {
    display,
    numberOfLines,
    container,
    line,
    rhythmContainer,
    rhythmLine,
  } = props;

  if (!display) return null;

  const lines = Array.from({ length: numberOfLines }, (v, i) => i).map(
    (item) => {
      return (
        <span
          key={shortid.generate()}
          className={clsx("Line", line, rhythmLine)}
        />
      );
    }
  );

  return (
    <div className={clsx("Container", container, rhythmContainer)}>{lines}</div>
  );
};

/**
 * Displays the component
 */
const Grid = (props) => {
  const {
    displayVerticalRhytm,
    displayHorizontalRhytm,
    numberOfHorizontalLines,
    numberOfVerticalLines,
    lineColor,
    children,
  } = props;

  const {
    verticalRhythmContainer,
    horizontalRhythmContainer,
    verticalRhythmLine,
    horizontalRhythmLine,
    rhythmContainer,
    rhythmLine,
  } = useStyles(props);

  const horizontalLines = drawLines({
    display: displayHorizontalRhytm,
    numberOfLines: numberOfHorizontalLines,
    container: horizontalRhythmContainer,
    line: horizontalRhythmLine,
    rhythmContainer: rhythmContainer,
    rhythmLine: rhythmLine,
  });

  const verticalLines = drawLines({
    display: displayVerticalRhytm,
    numberOfLines: numberOfVerticalLines,
    container: verticalRhythmContainer,
    line: verticalRhythmLine,
    rhythmContainer: rhythmContainer,
    rhythmLine: rhythmLine,
  });

  return (
    <>
      {globalSettings(props)}
      {horizontalLines}
      {verticalLines}
      {children}
    </>
  );
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
export { propTypes as GridPropTypes, defaultProps as GridDefaultProps };
