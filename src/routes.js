import Home from './pages/Home.vue'
import Benefits from './pages/Benefits.vue'
import Charging from './pages/Charging.vue'
import Ownership from './pages/Ownership.vue'
import Community from './pages/Community.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import CommunityCategory from './pages/CommunityCategory.vue'
import CommunityForum from './pages/CommunityForum.vue'
import CommunityNewThread from './pages/CommunityNewThread.vue'
import MyAccount from './pages/MyAccount.vue'


export default [
  { name: "Home", path: '/', component: Home },
  { name: "Benefits", path: '/benefits', component: Benefits },
  { name: "Charging", path: '/charging', component: Charging },
  { name: "Ownership", path: '/ownership', component: Ownership, props: true},
  { name: "Community", path: '/community', component: Community },
  { name: "Register", path: '/register', component: Register },
  { name: 'Login', path: '/login', component: Login },
  { name: 'CommunityCategory', path: '/community/communityCategory', component: CommunityCategory, props: true },
  { name: 'CommunityForum', path: '/community/communityForum', component: CommunityForum, props: true },
  { name: 'CommunityNewThread', path: '/community/communityNewThread', component: CommunityNewThread, props: true },
  { name: 'MyAccount', path: '/myAccount', component: MyAccount , props: true}
]
