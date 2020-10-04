import React, { memo, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ZHThemeHeaderRCM from "@/components/theme-header-rcm";
import { useEffect } from 'react';
import { getNewAlbumAction } from '../../store/actionCreator'
import { AlbumWrapper } from './style';
import { Carousel } from 'antd';
import ZHAlbumCover from '@/components/album-cover'

export default memo(function ZHNewAlbum() {
  const { newAlbum } = useSelector(state => ({
    newAlbum: state.getIn(["recommend", "newAlbum"])
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  const pageRef = useRef()
  return (
    <div>
      <AlbumWrapper>
        <ZHThemeHeaderRCM title="新碟上架" />
        <div className="content">
          <button className="arrow arrow-left sprite_02" onClick={e => {
            pageRef.current.prev()
          }}></button>
          <div className="album">
            <Carousel ref={pageRef}>
              {
                [0, 1].map((item, index) => {
                  return <div key={item} className="page">
                    {
                      newAlbum.slice(item * 5, (item + 1) * 5).map(albumItem => {
                        return <ZHAlbumCover key={item.id} info={albumItem} size={100} width={118} bgp="-570px" />
                      })
                    }
                  </div>
                })
              }
            </Carousel>
          </div>
          <button className="arrow arrow-right sprite_02" onClick={e => {
            pageRef.current.next()
          }}></button>
        </div>
      </AlbumWrapper>
    </div>
  )
})
