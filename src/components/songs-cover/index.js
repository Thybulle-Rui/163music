import React, { memo } from 'react'
import { SongsCoverWrapper } from "./style";
import { getCount, getImageSize } from "@/utils/data_format";

export default memo(function ZHSongsCover(props) {
  const { info } = props
  return (
    <div>
      <SongsCoverWrapper>
        <div className="cover-top">
          <img src={getImageSize(info.picUrl, 100)} alt="" />
          <div className="cover sprite_covor">
            <div className="info sprite_covor">
              <span>
                <i className="sprite_icon erji"></i>
                {getCount(info.playCount)}
              </span>
              <i className="sprite_icon play"></i>
            </div>
          </div>
        </div>
        <div className="cover-bottom text-nowrap">
          {info.name}
        </div>
        <div className="cover-source">
          by {info.copywriter || info.creator.nickname}
        </div>
      </SongsCoverWrapper>
    </div>
  )
})
