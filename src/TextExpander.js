import "./styles.css";
import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.propTypes = {
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
};

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className = "",
  children,
}) {
  const [textExpanded, setTextExpanded] = useState(expanded);

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "10px",
    color: `${buttonColor}`,
  };

  return (
    <div className={className}>
      <span>
        {textExpanded
          ? children
          : children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."}
      </span>
      <button
        style={buttonStyle}
        onClick={() => setTextExpanded((textExpanded) => !textExpanded)}
      >
        {textExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
