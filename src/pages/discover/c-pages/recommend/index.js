import React, { memo } from 'react'
import { RecommendWrapper } from "./style";
import ZHTopBanners from './c-cpns/top-banners'

function ZHRecommend() {
  return (
    <div>
      <RecommendWrapper>
        <ZHTopBanners></ZHTopBanners>
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
