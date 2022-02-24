import "react-multi-carousel/lib/styles.css";
import MuiCard from "./MuiCard";
import { responsive, cardData } from "./constants";
import { StyledCarousel } from "./styled";

const CustomCarousel = () => {
  return (
    <StyledCarousel responsive={responsive} infinite={true} autoPlay={false}>
      {cardData.map((item, i) => (
        <MuiCard mediaCard={item} />
      ))}
    </StyledCarousel>
  );
};
export default CustomCarousel;
