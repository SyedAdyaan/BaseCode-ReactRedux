

const INITIAL_STATE = {
users :[
    {
        name :"Adyaan" ,
        email :"adyaanakhtar@gmail.com"
    },
    {
        name : "Abishah" ,
        email: "abishah@gmail.com"
    }


],

    users2 :[
        {
            key :"ififmfmfm",
            id : "1"
        },
            {key :"innuvtcth",
            id : "2"
    }
    ]


}

export default (state=INITIAL_STATE , action)=>{
    console.log("action==>",action)
    switch (action.type){
        case "SETDATA":
            return({
                ...state,
                users:[action.user,...state.users,state.users2]
            })
    }
    return state;
    
}

