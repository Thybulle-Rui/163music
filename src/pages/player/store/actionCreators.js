import { getSongDetail } from "@/services/player";
import { CHANGE_SONG_DETAIL } from "./constants";

const changeSongDetailAction = (song) => ({
  type: CHANGE_SONG_DETAIL,
  song
})

export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeSongDetailAction(res.songs[0]))
    })
  }
}