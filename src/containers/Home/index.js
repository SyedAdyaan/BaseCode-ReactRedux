import React from "react";
import {connect} from 'react-redux';
import { set_data , facebooklogin } from "../../store/action";


class Home extends React.Component{
    render(){
        console.log("props==>",this.props)
       return (
           <div>
            <h1>Home</h1>
            <button onClick={() =>this.props.set_data()}> Set Data </button>
            <button onClick={()=>this.props.facebooklogin()}>FACEBOOK LOGIN</button>
            </div>
        );
    }

} 


const mapStateToProps = (state)=>({
    users : state.users,
    users2: state.users2
})


const mapDispatchToProps = (dispatch) =>({

    set_data: () => dispatch(set_data()),
    facebooklogin: ()=>dispatch(facebooklogin())
})


export default connect(mapStateToProps,mapDispatchToProps)(Home);