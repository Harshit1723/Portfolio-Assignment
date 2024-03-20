import Slider from "react-slick";
import PropTypes from 'prop-types';
import './Carousel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleBlog from "../Blog/SingleBlog";
import SingleReview from "../Review/SingleReview";
import { useSelector } from "react-redux";
import { userData } from "../../redux/DetailSlice";

const Carousel = ({ data }) => {
  const userD = useSelector(userData);
  const reviewInfor = userD.user.testimonials
  const { useFor,informations  ,sliderSetting, sliderImages } = data;

  if (useFor === "blog") {
    return (
      <Slider  {...sliderSetting}>
        {
          informations.map((element, index) => (
            <SingleBlog element={element} key={index} />
          ))
        }
      </Slider >
    )
  } else if (useFor === "review") {
    return (
      <Slider  {...sliderSetting}>
        {
          reviewInfor.map((element, index) => (
            <SingleReview element={element} key={index} />
          ))
        }
      </Slider >
    )
  } else if (useFor === "image-slider") {
    return (
      <Slider {...sliderSetting}>
        {
          sliderImages.map((item, index) => (
            <img src={item.imgLink} key={index} alt="" />
          ))
        }
      </Slider>
    )
  } else {
    <Slider {...sliderSetting}>

    </Slider>
  }
}

Carousel.propTypes = {
  variant: PropTypes.string,
  data: PropTypes.object,
  settings: PropTypes.object,
}

export default Carousel
