// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import Slider from "react-slick";
import "./testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientTestimonials = () => {
  const images = [
    {
      img: "../../../testimonials/testimonials.png",
      title: "James Haklen",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut mattis tellus leo at venenatis, mauris. Et semper convallis lacinia porttitor habitant  vel id dolor. Dictumst sit viverra id eu odio lacus et nunc. Convallis habitasse sit pellentesque semper. In enim orci massa curabitur pretium,mauris nunc. Netus porttitor vel leo facilisi eget. Eget vulputate vel netus nunc leo velit, porttitor dignissim. Eu dignissim duis sem erat. Elit blandit",
    },
    {
      img: "../../../testimonials/testimonials.png",
      title: "James Haklen",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut mattis tellus leo at venenatis, mauris. Et semper convallis lacinia porttitor habitant  vel id dolor. Dictumst sit viverra id eu odio lacus et nunc. Convallis habitasse sit pellentesque semper. In enim orci massa curabitur pretium,mauris nunc. Netus porttitor vel leo facilisi eget. Eget vulputate vel netus nunc leo velit, porttitor dignissim. Eu dignissim duis sem erat. Elit blandit",
    },
    {
      img: "../../../testimonials/testimonials.png",
      title: "James Haklen",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut mattis tellus leo at venenatis, mauris. Et semper convallis lacinia porttitor habitant  vel id dolor. Dictumst sit viverra id eu odio lacus et nunc. Convallis habitasse sit pellentesque semper. In enim orci massa curabitur pretium,mauris nunc. Netus porttitor vel leo facilisi eget. Eget vulputate vel netus nunc leo velit, porttitor dignissim. Eu dignissim duis sem erat. Elit blandit",
    },
    {
      img: "../../../testimonials/testimonials.png",
      title: "James Haklen",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut mattis tellus leo at venenatis, mauris. Et semper convallis lacinia porttitor habitant  vel id dolor. Dictumst sit viverra id eu odio lacus et nunc. Convallis habitasse sit pellentesque semper. In enim orci massa curabitur pretium,mauris nunc. Netus porttitor vel leo facilisi eget. Eget vulputate vel netus nunc leo velit, porttitor dignissim. Eu dignissim duis sem erat. Elit blandit",
    },
  ];

  const [imgIndex, setImgIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next),
  };

  //   const NextArrow = ({ onClick }) => {
  //     return (
  //       <div className="arrow next" onClick={onClick}>
  //         <FaArrowRight />
  //       </div>
  //     );
  //   };

  //   const PrevArrow = ({ onClick }) => {
  //     return (
  //       <div className="arrow prev" onClick={onClick}>
  //         <FaArrowLeft />
  //       </div>
  //     );
  //   };

  return (
    <div className="client-testimonials">
      <h3 className="OctaHeaderlight centered flex-column">
        TESTIMONIALS
        <p className="second-tit">TESTIMONIALS</p>
      </h3>

      <p className="Testimonialstext">
        We Develop Enterprise-Grade Software Solutions For Businesses.
      </p>
      <Slider {...settings}>
        {images.map((item, idx) => (
          <div
            className={
              idx === imgIndex
                ? "slide activeSlide testimonials"
                : "slide testimonials"
            }
          >
            <img className="test-img" src={item.img} alt={idx} />
            <h1 className="testimonial-tit">{item.title}</h1>
            <p className="testimonial-para">{item.para}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ClientTestimonials;
