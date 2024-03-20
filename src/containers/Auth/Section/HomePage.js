import React, { Component } from "react"
//import {connect} from 'react-redux'
import HeaderHome from './HomeHeader'

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <HeaderHome />
                </div>

            </React.Fragment>
        )
    }
}

/*const mapStateToProps = state => {
    return{
        isLoggedIn : state.user.isLoggedIn 
    };
}
const mapDispatchToProps = dispath=> {
    return {
        
    };
}
export default  connect (mapStateToProps,mapDispatchToProps)(HomePage);*/

export default HomePage;