import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { headerLinks } from "@/common/local-data.js";
import { SearchOutlined } from '@ant-design/icons'
import { Input } from "antd"

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

export default memo(function ZHAppHeader() {

  const showSelectItem = (item, index) => {
    return index < 3 ?
      (<NavLink to={item.link} exact>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>)
      :
      (<a href={item.link}>{item.title}</a>)
  }

  return (
    <div>
      <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeft>
            <a href="#/" className="logo sprite_01">网易云音乐</a>
            <div className="select-list">
              {
                headerLinks.map((item, index) => {
                  return (
                    <div key={item.title} className="select-items">
                      {showSelectItem(item, index)}
                    </div>
                  )
                })
              }
            </div>
          </HeaderLeft>
          <HeaderRight>
            <Input placeholder="音乐/视频/电台/用户" suffix={<SearchOutlined />} className="search" />
            <div className="center">创作者中心</div>
            <div>登录</div>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  )
})
