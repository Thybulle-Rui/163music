import ZHDiscover from '@/pages/discover'
import ZHFriend from '@/pages/friend'
import ZHMine from '@/pages/mine'
import ZHAlbumn from "@/pages/discover/c-pages/albumn"
import ZHArtust from "@/pages/discover/c-pages/artist"
import ZHDjRadio from "@/pages/discover/c-pages/djradio"
import ZHRanking from "@/pages/discover/c-pages/ranking"
import ZHRecommend from "@/pages/discover/c-pages/recommend"
import ZHSongs from '@/pages/discover/c-pages/songs'

import React from 'react'
import { Redirect } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: '/discover',
    component: ZHDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: '/discover/recommend',
        component: ZHRecommend
      },
      {
        path: '/discover/artist',
        component: ZHArtust
      },
      {
        path: '/discover/rannking',
        component: ZHRanking
      },
      {
        path: '/discover/djradio',
        component: ZHDjRadio
      },
      {
        path: '/discover/albumn',
        component: ZHAlbumn
      },
      {
        path: '/discover/songs',
        component: ZHSongs
      }
    ]
  },
  {
    path: '/mine',
    component: ZHMine
  },
  {
    path: '/friend',
    component: ZHFriend
  }
]

export default routes