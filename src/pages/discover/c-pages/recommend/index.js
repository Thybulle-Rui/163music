import React, { memo } from 'react'
import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from "./style";
import ZHHotRecommend from "./c-cpns/hot-recommend";
import ZHTopBanners from './c-cpns/top-banners'
import ZHNewAlbum from './c-cpns/new-album'
import ZHRanking from './c-cpns/ranking'
import ZHUserLogin from './c-cpns/user-login'
import ZHSettleSinger from './c-cpns/settle-singer'
import ZHHotAnchor from './c-cpns/hot-anchor'

function ZHRecommend() {
  return (
    <div>
      <RecommendWrapper>
        <ZHTopBanners></ZHTopBanners>
        <Content className="wrap-v2">
          <RecommendLeft>
            <ZHHotRecommend />
            <ZHNewAlbum />
            <ZHRanking />
          </RecommendLeft>
          <RecommendRight>
            <ZHUserLogin />
            <ZHSettleSinger />
            <ZHHotAnchor />
          </RecommendRight>
        </Content>
      </RecommendWrapper>
    </div>
  )
}

export default memo(ZHRecommend)

// import React, { memo, useEffect } from 'react'
// import { connect } from 'react-redux'

// import { getTopBannerAction } from './store/actionCreator'

// function ZHRecommend(props) {
//   const { getBanners, topBanners } = props

//   useEffect(() => {
//     getBanners()
//   }, [])

//   return (
//     <div>
//       {topBanners}
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToprops = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction)
//   }
// })

// export default connect(mapStateToProps, mapDispatchToprops)(memo(ZHRecommend))
