import Image from "react-bootstrap/Image";

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
