import React, { memo } from 'react'

import { AlbumWrapper } from './style'
import { getImageSize } from "@/utils/data_format";

export default memo(function ZHAlbumCover(props) {
  const { info, size = 130, width = 153, bgp = "-845px" } = props
  return (
    <div>
      <AlbumWrapper size={size} width={width} bgp={bgp}>
        <div className="album-image">
          <img src={getImageSize(info.picUrl, size)} alt="" />
          <a href="/todo" className="cover image_cover"></a>
        </div>
        <div className="album-info">
          <div className="name text-nowrap">{info.name}</div>
          <div className="artist">{info.artist.name}</div>
        </div>
      </AlbumWrapper>
    </div>
  )
})
