import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getImageSize } from '@/utils/data_format';

import { TopRankingWrapper } from './style';

export default memo(function ZHTopRanking(props) {
  // props and state
  const { info } = props;
  const { tracks = [] } = info;

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(info.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">

      </div>
    </TopRankingWrapper>
  )
})
