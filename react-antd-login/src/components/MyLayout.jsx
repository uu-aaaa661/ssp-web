import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  EditOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme,Dropdown,message } from 'antd';
import girl from '../assets/xiaomai3.png'
import menu from '../assets/xiaomai.jpg'
import logoutpic from '../assets/xiaomai2.jpeg'
// 引入路由
import { useNavigate } from 'react-router-dom'


const { Header, Sider, Content } = Layout;
// 下拉菜单的menu数据
const items = [
  {
    key: 'userCenter',
    label: (<a >小埋学习中心</a>),
  },
  {
    key: 'logOut',
    label: (<a >退出</a>),
  }
];


const MyLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // 路由跳转
  const navigate = useNavigate()
  // 下拉菜单的点击事件
  const onClick = ({key}) => {
    console.log(key)
    if(key == 'logOut'){
      navigate('/')
    }else{
      message.info('还没开通呢')
    }
  }

  return (
    <Layout style={{width:'100vw' ,height:'100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logoImg" >
            <img src={girl} alt="" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          // 获取传递的key值，传参
          onClick = {({key}) =>{
            console.log(key)
            navigate(key)
          }}
          items={[
            {
              key: '1',
              icon: <EditOutlined />,
              label: '学习',
              children:[{
                label:'学习分类',
                key:'/admin/study_type'
              },{
                label:'学习列表',
                key:'/admin/study_list'
              }]
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '视频',
              children:[{
                label:'视频分类',
                key:'/admin/video_type'
              },{
                label:'视频列表',
                key:'/admin/video_list'
              }]
            },
            {
              key: '/admin/download',
              icon: <UploadOutlined />,
              label: '下载',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <span className='titleDiv'>小埋的学习管理</span>
          <Dropdown
              menu={{
                items,onClick
              }}
            >
            <a onClick={(e) => e.preventDefault()} style={{
              float:"right"
            }}>
                <img src={menu} className='menu-picture'/>
            </a>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MyLayout;