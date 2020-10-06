import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import { reducer as playReducer } from '@/pages/player/store'
const combinedReducer = combineReducers({
  recommend: recommendReducer,
  player: playReducer
})

export default combinedReducer

