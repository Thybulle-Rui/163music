import { Map } from "immutable";
import { CHANGE_SONG_DETAIL } from "./constants";
const initialState = Map({
  currentSong: {}
})

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case CHANGE_SONG_DETAIL:
      return state.set("currentSong", action.song)
    default:
      return state
  }
}

export default reducer