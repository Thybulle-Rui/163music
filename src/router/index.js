import ZHDiscover from '@/pages/discover'
import ZHFriend from '@/pages/friend'
import ZHMine from '@/pages/mine'

const routes = [
 {
   path: '/',
   exact: true,
   component: ZHDiscover 
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