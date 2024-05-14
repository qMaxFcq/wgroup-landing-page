import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Picpmay from '../../../pic/pmay.png';
import Picpta from '../../../pic/pta.png';
import Picptan from '../../../pic/ptan.png';

export default function DetailThird() {
  // setting react-slick
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    // nextArrow: <ArrowNext />,
    // prevArrow: <ArrowPrev />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container m-auto">
      <div className="font-bold text-4xl mb-10 text-center underline underline-offset-8">
        <h2> We Have Professional Leader</h2>
      </div>

      <Slider {...settings}>
        {/* detail c level */}
        <div>
          <div className="flex justify-center p-5 relative">
            <div className="group">
              <img
                src={Picpmay}
                className="max-w-[250px] rounded-full transition-transform transform 
              group-hover:scale-105 group-hover:filter group-hover:brightness-50"
              />
              <div
                className="card-body absolute top-0 left-0 w-full h-full flex items-center 
            justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <div className="flex gap-11 ">
                  <div className="">
                    <FaFacebookF className="size-9 text-white hover:text-blue-500 duration-200" />
                  </div>
                  <div>
                    <FaInstagram className="size-9 text-white hover:text-pink-500 duration-200" />
                  </div>
                  <div>
                    <FaXTwitter className="size-9 text-white hover:text-slate-900 duration-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center mt-5 text-2xl">
            <h3 className="text-2xl">Metavee Sukumpeeranon</h3>
            <p className="text-base font-light">
              CEO - Chief Executive Officer
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-center p-5 relative">
            <div className="group">
              <img
                src={Picptan}
                className="max-w-[250px] rounded-full transition-transform transform 
              group-hover:scale-105 group-hover:filter group-hover:brightness-50"
              />
              <div
                className="card-body absolute top-0 left-0 w-full h-full flex items-center 
            justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <div className="flex gap-11 ">
                  <div className="">
                    <FaFacebookF className="size-9 text-white hover:text-blue-500 duration-200" />
                  </div>
                  <div>
                    <FaInstagram className="size-9 text-white hover:text-pink-500 duration-200" />
                  </div>
                  <div>
                    <FaXTwitter className="size-9 text-white hover:text-slate-900 duration-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center mt-5 ">
            <h3 className="text-2xl">Suppasit Wetprasit</h3>
            <p className="text-base font-light">
              COO - Chief Operating Officer
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-center p-5 relative">
            <div className="group">
              <img
                src={Picpta}
                className="max-w-[250px] rounded-full transition-transform transform 
              group-hover:scale-105 group-hover:filter group-hover:brightness-50"
              />
              <div
                className="card-body absolute top-0 left-0 w-full h-full flex items-center 
            justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <div className="flex gap-11 ">
                  <div className="">
                    <FaFacebookF className="size-9 text-white hover:text-blue-500 duration-200" />
                  </div>
                  <div>
                    <FaInstagram className="size-9 text-white hover:text-pink-500 duration-200" />
                  </div>
                  <div>
                    <FaXTwitter className="size-9 text-white hover:text-slate-900 duration-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center mt-5 ">
            <h3 className="text-2xl">Worachart Pirunruk</h3>
            <p className="text-base font-light">CPO - Chief Product Officer</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
