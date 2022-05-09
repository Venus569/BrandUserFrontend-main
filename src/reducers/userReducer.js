const inititalState = { name: "User 1", age: 23 ,loginStatus:false,
isAuthenticated: null,
loading: true,
user: null,
userType:null};


const addUserReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "CHANGEUSERNAME": {
      return { ...state, name: action.payload };
    }
    case "CHANGEAGE": {
      return { ...state, age: action.payload };
    }
    case "CHANGELOGIN": {
      return { ...state, loginStatus: action.payload };
    }
    
       case "USER_LOADED":{
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };}
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":{
      return {
        ...state,
       
        isAuthenticated: true,
        loading: false,
        user:action.payload
      };}
    case "ACCOUNT_DELETED":
    case "AUTH_ERROR":
    case "LOGOUT":
      {
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };}
      case "SETUSERTYPE":
        {
       return{
          ...state,
          userType:action.payload

        }
      }
    
  }
  return state;
};
export default addUserReducer;
