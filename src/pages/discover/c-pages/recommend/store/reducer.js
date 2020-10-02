import { CHANGE_TOP_BANNERS } from "./constants";
import { Map } from 'immutable'
const initialState = Map({
  topBanners: [],
})

const recommendReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.banners)
    default:
      return state
  }
}

export default recommendReducer