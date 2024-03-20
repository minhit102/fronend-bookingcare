import React, { Component } from "react"
//import {connect} from 'react-redux'
import "./HomeHeader.scss"

class HeaderHome extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-hearder-content">
                        <div className="leftHeader-content">
                            <i className="fa-solid fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>
                        <div className="centerHeader-content">
                            <div className="content-chill">
                                <span><b>Tất cả</b></span>
                            </div>
                            <div className="content-chill">
                                <span><b>Tại nhà</b></span>
                            </div>
                            <div className="content-chill">
                                <span><b>Tại viện </b></span>
                            </div>
                            <div className="content-chill">
                                <span><b>Sống khỏe</b></span>
                            </div>
                        </div>
                        <div className="rightHeader-content">
                            <div className="search-menu">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder="Tìm kiếm" />
                            </div>
                            <div className="Support">
                                <div className="lich-hen">
                                    <i class="fa-solid fa-phone"></i>
                                    <div>Lịch Hẹn</div>
                                </div>
                                <div className="ho-tro">
                                    <i class="fa-solid fa-headset"></i>
                                    <div >Hỗ Trợ</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="home-header-banner">

                    <div className="content-up">
                        <div className="title1">
                            NỀN TẢNG Y TẾ
                        </div>
                        <div className="title2">
                            CHĂM SÓC SỨC KHỎE TOÀN DIỆN
                        </div>
                        <div className="search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Tìm kiếm khám sức khỏe" />
                        </div>

                    </div>
                    <div className="content-down">
                        <div className="options">
                            <div className="option-chill">
                                <div className="icon-chill" >
                                    <i class="fa-solid fa-hospital"></i>
                                </div>
                                <div className="text-chill">
                                    Khám chuyên khoa
                                </div>

                            </div>
                            <div className="option-chill">
                                <div className="icon-chill" >
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div className="text-chill">
                                    Khám từ xa
                                </div>

                            </div>
                            <div className="option-chill">
                                <div className="icon-chill" >
                                    <i class="fa-solid fa-border-all"></i>
                                </div>
                                <div className="text-chill">
                                    Khám tổng quát
                                </div>

                            </div>
                            <div className="option-chill">
                                <div className="icon-chill" >
                                    <i class="fa-solid fa-vials"></i>
                                </div>
                                <div className="text-chill">
                                    Xét nghiệm y học
                                </div>

                            </div>
                            <div className="option-chill">
                                <div className="icon-chill" >
                                    <i class="fa-solid fa-blender-phone"></i>
                                </div>
                                <div className="text-chill">
                                    Sức khỏe tinh thần
                                </div>

                            </div>
                            <div className="option-chill">
                                <div className="icon-chill" >
                                    <i class="fa-solid fa-tooth"></i>
                                </div>
                                <div className="text-chill">
                                    Khám nha khoa
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );
    }
}

/**const mapStateToProps = state => {
    return{
        isLoggedIn : state.user.isLoggedIn 
    };
}
const mapDispatchToProps = dispath=> {
    return {
        
    };
}


export default  connect (mapStateToProps,mapDispatchToProps)(HeaderHome);**/
export default HeaderHome;