

const set_data =() =>{
    return (dispatch) =>{ 
    console.log("Running..")
    dispatch({type: "SETDATA",
    user : [{name :"ABC",email : "abc@gmail.com"},
             {name: "Arsalan",email:"arsalan@gmail.com"}]
})
    }
    
}

const facebooklogin=() =>{

    
    return(dispatch)=>{
        console.log("facebook login")
    }

}

export {
    set_data,facebooklogin
}