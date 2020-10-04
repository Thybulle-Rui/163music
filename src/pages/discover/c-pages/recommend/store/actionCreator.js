import { getTopBanners, getHotRecommends, getNewAlbum, getTopList } from "@/services/recommend";
import hotRecommend from "../c-cpns/hot-recommend";
import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM, CHANGE_NEW_RANKING, CHANGE_UP_RANKING, CHANGE_ORIGIN_RANKING } from "./constants";

const changeBannerAction = (res) => ({
  type: CHANGE_TOP_BANNERS,
  banners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeBannerAction(res));
    })
  }
}

const changeHotRecommendAction = (res) => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const changeNewAlbumAction = (res) => ({
  type: CHANGE_NEW_ALBUM,
  newAlbum: res.albums
})

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

const changeUpRankingAction = (res) => ({
  type: CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res))
          break;
        case 2:
          dispatch(changeNewRankingAction(res))
          break;
        case 3:
          dispatch(changeOriginRankingAction(res))
          break;
        default:
          console.log("处理其他数据");
      }
    })
  }
}