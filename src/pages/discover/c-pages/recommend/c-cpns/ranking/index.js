import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import ZHThemeHeaderRCM from "@/components/theme-header-rcm";
import { getTopListAction } from "../../store/actionCreator";
import ZHTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";
export default memo(function ZHRanking() {
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual);

  console.log("state", state)
  // hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch])
  return (
    <RankingWrapper>
      <ZHThemeHeaderRCM title="榜单" />
      <div className="tops">
        {state.upRanking ? <ZHTopRanking info={state.upRanking} /> : <div></div>}
        {state.newRanking ? <ZHTopRanking info={state.newRanking} /> : <div></div>}
        {state.originRanking ? <ZHTopRanking info={state.originRanking} /> : <div></div>}
      </div>
    </RankingWrapper>
  )
})
