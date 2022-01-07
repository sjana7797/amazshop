import { banner } from "../../assets/js/banner";

import { Carousel } from "react-responsive-carousel";

function CarouselLists() {
  const bannerItem = (item: string, index: number) => {
    return (
      <div key={index}>
        <img src={item} alt="banner" />
      </div>
    );
  };
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showIndicators={false}
      showArrows={false}
      showThumbs={false}
      width={"100%"}
      showStatus={false}
      className="home__carousel"
    >
      {banner.map((item, index) => bannerItem(item, index))}
    </Carousel>
  );
}

export default CarouselLists;
