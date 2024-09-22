import Image from "react-bootstrap/Image";
import PropTypes from 'prop-types';

export default function Avatar({ image, width, height, className }) {
  return (
    <>
      <Image
        src={image}
        width={width}
        height={height}
        roundedCircle
        className={className}
      />
    </>
  );
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};
