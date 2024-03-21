import { Button, Layout, Menu, theme } from 'antd';

import { Content, Header } from 'antd/es/layout/layout';
// import logo from '../../assets/images/RocketLaunch.png'
import logo from '../../assets/images/christmas_2012-new_3167.jpg'
// import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/features/hooks';
import { logout } from '../../redux/features/auth/authSlice';


const MainLayout = () => {
  const isLoggedIn = useAppSelector(state => state.auth.user); // Get authentication status from Redux state
  console.log(isLoggedIn)
  const dispatch = useAppDispatch()
  const handleLogOut=()=>{
    dispatch(logout())
  }
  let items;
  if (isLoggedIn) {
  items = [
    {
        key: 1,
        label: <Link to='/relief-goods'>Posts</Link>
    },
    {
        key: 2,
        label: <Link to='/dashboard'>Dashboard</Link>
    },
    {
        key: 3,
        label: <Button className='text-white' onClick={handleLogOut}>LogOut</Button>
    }
];
} else {
// User is not logged in
items = [
  {
    key: 1,
    label: <Link to='/relief-goods'>Posts</Link>
},
    {
        key: 2,
        label: <button className='text-white'><Link to='/login'>Login</Link></button>
    }
];
}
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
          <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
         
          padding: 24,
          // width: '94%',
          marginLeft:'3%',
          marginRight:'3%',
          display: 'flex',
          justifyItems:"space-between",
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" style={{ display: 'flex',
          alignItems: 'center', marginRight:"70%"}}>
          <img src={logo} alt="" className='w-16 h-16 object-contain'/>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 10 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
     
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
           
          }}
        >
          <Outlet></Outlet>
          
        </div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout> 
        </div>
    );
};

export default MainLayout;