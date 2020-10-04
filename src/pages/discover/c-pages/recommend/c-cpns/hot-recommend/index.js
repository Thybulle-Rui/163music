import React, { memo, useEffect } from 'react'
import { HotRecommendWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import ZHThemeHeaderRCM from "@/components/theme-header-rcm";
import ZHSongsCover from '@/components/songs-cover'
import { getHotRecommendAction } from '../../store/actionCreator';

export default memo(function ZHHotRecommend() {
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])
  return (
    <div>
      <HotRecommendWrapper>
        <ZHThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
        <div className="recommend-list">
          {
            hotRecommends.map((item, index) => {
              return (
                <ZHSongsCover key={item.id} info={item} />
              )
            })
          }
        </div>
      </HotRecommendWrapper>
    </div>
  )
})
