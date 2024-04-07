import React, { Component } from "react"

import { connect } from 'react-redux';
import "./HomeHeader.scss";
import './Specialized.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnhPhongKham from "../../../imageSrc/bvqt-my.jpg"


class Medical_facility extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 2
    };
    return (

      <div className="div_CONTEN">
        <div className="ckpb">
          
          <div className = "texNN"><h3 >CƠ SỞ Y TẾ</h3></div>
          <div className = "xemthem"><button>Xem thêm</button></div>
        </div>

        <Slider {...settings}>
          <div className="imgHt" >
            <img src={AnhPhongKham} alt="Ảnh Khám bệnh" />
            <h4>Cơ xưng khớp</h4>
          </div><div className="imgHt" >
            <img src={AnhPhongKham} alt="Ảnh Khám bệnh" />
            <h4>Cơ xưng khớp</h4>
          </div><div className="imgHt" >
            <img src={AnhPhongKham} alt="Ảnh Khám bệnh" />
            <h4>Cơ xưng khớp</h4>
          </div><div className="imgHt" >
            <img src={AnhPhongKham} alt="Ảnh Khám bệnh" />
            <h4>Cơ xưng khớp</h4>
          </div><div className="imgHt" >
            <img src={AnhPhongKham} alt="Ảnh Khám bệnh" />
            <h4>Cơ xưng khớp</h4>
          </div><div className="imgHt" >
            <img src={AnhPhongKham} alt="Ảnh Khám bệnh" />
            <h4>Cơ xưng khớp</h4>
          </div><div className="imgHt" >
            <img src={AnhPhongKham} alt="Ảnh Khám bệnh" />
            <h4>Cơ xưng khớp</h4>
          </div>
        </Slider>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    // : state.user.isLoggedIn,

  };
}
const mapDispatchToProps = dispath => {
  return {

  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Medical_facility);
//export default HeaderHome;*/
