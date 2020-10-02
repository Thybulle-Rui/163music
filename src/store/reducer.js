import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'

const combinedReducer = combineReducers({
  recommend: recommendReducer
})

export default combinedReducer

