import React, { memo, useEffect, useRef, useState } from 'react'
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style'

import { getImageSize, formatDate, getPlaySong } from '@/utils/data_format'
import { Slider } from 'antd'
import { getSongDetailAction } from "../store/actionCreators";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
export default memo(function ZHPlayerBar() {
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongDetailAction(186513))
  }, [dispatch])
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
  }, [currentSong])
  const audioRef = useRef()

  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手"
  const duration = (currentSong.dt) || 0
  const showDuration = formatDate(duration, "mm:ss")
  const showCurrentTime = formatDate(currentTime, "mm:ss")

  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  const timeUpdate = (e) => {
    // console.log(e.target.currentTime)
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress(currentTime / duration * 100)
    }
  }

  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    const currentTime = value / 100 * duration
    setCurrentTime(currentTime)
    setProgress(value)
  }, [duration])

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setIsChanging(false)

    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])

  return (
    <div>
      <PlaybarWrapper className="sprite_playbar">
        <div className="content wrap-v2">
          <Control isPlaying={isPlaying}>
            <button className="prev sprite_playbar"></button>
            <button className="play sprite_playbar" onClick={e => playMusic()}></button>
            <button className="next sprite_playbar"></button>
          </Control>
          <PlayInfo>
            <div className="image">
              <a href="/#">
                <img src={getImageSize(picUrl, 35)} alt="" />
              </a>
            </div>
            <div className="info">
              <div className="song">
                <span className="song-name">{currentSong.name}</span>
                <span className="singer-name">{singerName}</span>
              </div>
              <div className="progress">
                <Slider defaultValue={30} value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
                <div className="name">
                  <span className="now-time">{showCurrentTime}</span>
                  <span className="divider">/</span>
                  <span className="duration">{showDuration}</span>
                </div>
              </div>
            </div>
          </PlayInfo>
          <Operator>
            <div className="left">
              <button className="sprite_playbar btn favor"></button>
              <button className="sprite_playbar btn share"></button>
            </div>
            <div className="right sprite_playbar">
              <button className="sprite_playbar btn volume"></button>
              <button className="sprite_playbar btn loop"></button>
              <button className="sprite_playbar btn playlist"></button>
            </div>
          </Operator>
        </div>
        <audio ref={audioRef} onTimeUpdate={timeUpdate}  />
      </PlaybarWrapper>
    </div>
  )
})
