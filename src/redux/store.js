import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reduers'

let middleware=applyMiddleware(thunk);
if(process.env.NODE_NEV==="development"){
  middleware=composeWithDevTools(middleware)
}
const store=createStore(reducers,middleware)
export default store;