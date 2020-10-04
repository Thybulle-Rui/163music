import React, { memo } from 'react'
import PropTypes from "prop-types";
import { HeaderWrapper } from "./style";

const ZHThemeHeaderRCM = memo(function (props) {
  const { title, keywords } = props
  return (
    <div>
      <HeaderWrapper className="sprite_02">
        <div className="left">
          <p className="title">{title}</p>
          <div className="keyword">
            {
              keywords && keywords.map((item, index) => {
                return (
                  <div className="item" key={item}>
                    <a href="">{item}</a>
                    <span className="divider">|</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="right">
          <a href="">更多</a>
          <i className="icon sprite_02"></i>
        </div>
      </HeaderWrapper>
    </div>
  )
})

ZHThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

ZHThemeHeaderRCM.defaultProps = {
  keywords: []
}

export default ZHThemeHeaderRCM
