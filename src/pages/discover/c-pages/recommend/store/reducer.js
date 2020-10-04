import { CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM, CHANGE_NEW_RANKING, CHANGE_ORIGIN_RANKING, CHANGE_TOP_BANNERS, CHANGE_UP_RANKING } from "./constants";
import { Map } from 'immutable'
const initialState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],
  topRanking: {},
  newRanking: {},
  originRanking: {}
})

const recommendReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.banners)
    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends)
    case CHANGE_NEW_ALBUM:
      return state.set("newAlbum", action.newAlbum)
    case CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking)
    case CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking)
    case CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking)
    default:
      return state
  }
}

export default recommendReducer