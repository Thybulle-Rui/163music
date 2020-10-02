import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from '@/pages/discover/c-pages/recommend/store/actionCreator'
import { Carousel } from 'antd';

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from "./style";

export default memo(function ZHTopBanners() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)
  const dispatch = useDispatch()

  const bannerRef = useRef()

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  })
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
  return (
    <div>
      <BannerWrapper bgImage={bgImage}>
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel autoplay effect="fade" beforeChange={bannerChange} ref={bannerRef}>
              {
                topBanners.map((item, index) => {
                  return (
                    <div className="banner-item" key={item.imageUrl}>
                      <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                    </div>
                  )
                })
              }
            </Carousel>,
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
            <button className="btn right" onClick={e => bannerRef.current.next()}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  )
})
