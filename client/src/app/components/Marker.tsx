import React from "react";
import PropTypes from "prop-types";

interface MarkerProps {
  text: string;
  onClick?: () => void;
}
interface WrapperProps {
  onClick?: () => void;
}

const Wrapper: React.FC<WrapperProps> = ({ onClick }) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 w-18 h-18 bg-black border-2 border-white rounded-full select-none transform -translate-x-1/2 -translate-y-1/2 cursor-${
        onClick ? "pointer" : "default"
      } hover:z-10`}
      onClick={onClick}
    ></div>
  );
};

const Marker: React.FC<MarkerProps> = ({ text, onClick }) => (
  <Wrapper onClick={onClick} />
);

Marker.defaultProps = {
  onClick: undefined,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
