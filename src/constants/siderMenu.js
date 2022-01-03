import {
  DesktopOutlined,
} from '@ant-design/icons-vue'
import * as constRoute from '@/constants/constRoute'

const siderMenu = [
  {
    key: constRoute.DASHBOARD,
    title: 'Dashboard',
    icon: DesktopOutlined,
  },
  {
    key: 'parent1',
    title: 'Parent 1',
    icon: DesktopOutlined,
    children: [
      {
        key: 'child1',
        title: 'Child 1',
      },
      {
        key: 'child2',
        title: 'Child 2',
        children: [
          {
            key: 'child21',
            title: 'child 21',
          },
          {
            key: 'child22',
            title: 'child 22',
          },
        ],
      },
    ],
  },
]

export default siderMenu
