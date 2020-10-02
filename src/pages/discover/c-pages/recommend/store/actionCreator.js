import { getTopBanners } from "@/services/recommend";
import { CHANGE_TOP_BANNERS } from "./constants";

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
