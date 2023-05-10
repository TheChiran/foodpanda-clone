import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import City from "../components/City/Index";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

interface City {
  id?: number;
  name: string;
  url?: string;
}

const city_list: City[] = [
  {
    id: 1,
    name: "Dhaka",
    url: "dhaka"
  },
  {
    id: 2,
    name: "Rajshahi"
  },
  {
    id: 3,
    name: "Pabna"
  },
  {
    id: 4,
    name: "Khulna",
    url: "khulna"
  },
  {
    id: 5,
    name: "Sylhet",
    url: "sylhet"
  },
  {
    id: 6,
    name: "Mymensingh",
    url: "mymensingh"
  }
];

function renderCityList(swiperEnabled = false) {
  return (
    <React.Fragment>
      {city_list?.map((city) => {
        return !swiperEnabled ? (
          <City name={city.name} urlPathName={city?.url} />
        ) : (
          <SwiperSlide>
            <City name={city.name} urlPathName={city?.url} />
          </SwiperSlide>
        );
      })}
    </React.Fragment>
  );
}

function CityView() {
  const [sliderPerView, setSlidesPerView] = useState<number>(1);

  const changeSlidesPerView = () => {
    if (window.innerWidth <= 550) {
      setSlidesPerView(1);
      return;
    }

    if (window.innerWidth <= 767) {
      setSlidesPerView(2);
      return;
    }

    if (window.innerWidth <= 990) {
      setSlidesPerView(3);
      return;
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 990) {
      changeSlidesPerView();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", changeSlidesPerView);
    return () => {
      window.removeEventListener("resize", changeSlidesPerView);
    };
  }, [window.innerWidth]);

  return (
    <React.Fragment>
      <h2 className="cities-overlay">Cities</h2>
      <Grid item lg={12} md={12} xs={12}>
        <h2 className="city-title">Find us in these cities and many more!</h2>
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <div className="city-list">{renderCityList()}</div>
        <div className="city-list-mbl">
          <Swiper
            spaceBetween={10}
            slidesPerView={sliderPerView}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {renderCityList(true)}
          </Swiper>
        </div>
      </Grid>
    </React.Fragment>
  );
}

export default CityView;
