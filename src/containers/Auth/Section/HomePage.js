import React, { Component } from "react"
import HeaderHome from './HomeHeader'
import { connect } from 'react-redux'
import Specialized from './Specialized'
import SpecialDoctor from './SpecialDoctor'
import MedicalFacility from './MedicalFacility';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <HeaderHome />
                    <Specialized />
                    <MedicalFacility />
                    <SpecialDoctor />
                </div>
                <div style={{ height: '500px' }}>Minh</div>

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
}
const mapDispatchToProps = dispath => {
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
