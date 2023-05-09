//import { useReducer } from 'react';
// loggerMiddleware.js
const loggerMiddleware = (useReducer) => (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const loggerDispatch = (action) => {
      console.log('Previous State:', state);
      console.log('Action:', action);
  
      dispatch(action);
  
      console.log('Next State:', state);
    };
  
    return [state, loggerDispatch];
  };
  
  export default loggerMiddleware;
  