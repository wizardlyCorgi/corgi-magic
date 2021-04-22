import Vue from 'vue'
import {
  Pagination,
  Dialog,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Loading,
  MessageBox,
  Message
  //   Notification
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
const { alert, confirm, prompt } = MessageBox
Vue.prototype.$alert = alert
Vue.prototype.$confirm = confirm
Vue.prototype.$prompt = prompt
// Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
