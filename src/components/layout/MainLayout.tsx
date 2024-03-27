import { Button, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import logo from '../../assets/images/christmas_2012-new_3167.jpg';
import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/features/hooks';
import { logout } from '../../redux/features/auth/authSlice';
import ThemeSwitch from '../ui/ThemeSwitchButton';
// import { useState } from 'react'; // Import useState hook

const MainLayout = () => {
  const isLoggedIn = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();
  // const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const handleLogOut = () => {
    dispatch(logout());
  };

  let items;
  if (isLoggedIn) {
    items = [
      {
        key:0,
        label: 
        <div className="demo-logo" style={{ display: 'flex', alignItems: 'center', background: 'transparent',}}>
          <img src={logo} alt="" className='w-16 h-16 object-contain' />
        </div>
      },
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
        label: <Link to='/about-us'>About Us</Link>
      },
      {
        key: 4,
        label: <Link to='/community'>Community</Link>
      },
      {
        key: 5,
        label: <Button className='btn btn-primary' onClick={handleLogOut}>LogOut</Button>
      },
      {
        key: 6,
      label: <ThemeSwitch></ThemeSwitch>
      },
    ];
  } else {
    items = [
      {
        key:0,
        label: 
        <div className="demo-logo" style={{ display: 'flex', alignItems: 'center', background: 'transparent',}}>
          <img src={logo} alt="" className='w-16 h-16 object-contain' />
        </div>
      },
      {
        key: 1,
        label: <Link to='/relief-goods'>Posts</Link>
      },
      
      {
        key: 2,
        label: <Link to='/about-us'>About Us</Link>
      },
      {
        key: 3,
        label: <Link to='/community'>Community</Link>
      },
      {
        key: 4,
        label: <Button className='btn btn-primary'><Link to='/login'>Login</Link></Button>
      },
      {
        key: 5,
        label: <ThemeSwitch></ThemeSwitch>
      }
    ];
  }

  return (
    <div>
      <Layout className='max-w-7xl mx-auto'>
      <Header
  style={{
    position: 'sticky',
    top: 0,
    zIndex: 1,
    padding: '0 0', // Add padding to the left and right
    display: 'flex',
    justifyContent: 'space-between', // Adjust alignment of items
    alignItems: 'center',
    width: '100%', // Make the Header full width
    background: 'transparent', // Optional: Set background color if needed
  }}
>

          <Menu
            // theme={{isDarkMode ? "dark" : "light"} }// Set theme based on isDarkMode state
            mode="horizontal"
            items={items}
            style={{ flex: 1, minWidth: 10 }}
          />
        </Header>
        <Content className='dark:bg-slate-900'> {/* Set background color based on isDarkMode */}
          <div
         
            style={{
           
              minHeight: 380,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default MainLayout;
