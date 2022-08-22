import {
  SearchOutlined,LaptopOutlined
} from '@ant-design/icons';
import { Layout, Input } from 'antd';
import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css'
import { Outlet, Link } from 'react-router-dom';

const {  Footer, Sider, Content } = Layout;

const Logo = styled.div`
  display: flex;
  align-items: center;
`

const Search = styled.div`
  width: 50%;
`
const Header = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 60% 1fr;
  
`
const Menu  = styled.div`
  overflow: hidden;
  padding: 20px 10px;
  cursor: pointer;
`
const Hello = styled.div`
  width: 100%;
`
const Sbar  = styled.div`
  padding: 10px 10px;
  &:hover {
    background: rgb(15 185 202);
    cursor: pointer;
    height: 100%;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
    transform: rotateY(0deg);
    transform-style: preserve-3d;
    transition: all 1s ease-out;
    position: relative;
    }
`

const Img = styled.img`
`
const Navbar = () => {
  return (
    <>
      <Layout >
      <Header  style={{background: 'rgb(15 185 202)', padding: '10px 0px'}}>
        <Logo>
          <Link to='/'><img style={{ width: 128, height: 102, margin: '-49px 20px', position: 'absolute' }} src="https://www.apple.com/ac/globalnav/7/en_VN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg" alt="loi" /></Link>
        </Logo>
        <Search>
          <Input style={{ borderRadius: '20px', height: '35px'}} size="large" prefix={<SearchOutlined />} />
         </Search>
        <Hello>
        <span style={{fontWeight: 'bold', color: 'white', fontSize: '16px'}}>Xin chào Phan Đức Mạnh</span>
        </Hello>
      </Header>
        <Layout>
          <Sider style={{background: 'white'}}>
          <Menu>
            <Link to={`/admin`}><Sbar><Img src="https://cdn-icons-png.flaticon.com/128/244/244210.png" width="25px" height="25px"/><span style={{ color: 'black', fontSize: '13px', margin: '0 10px'}}>product</span></Sbar></Link>
            <Link to={`/admin/category`}> <Sbar><Img src="https://cdn-icons-png.flaticon.com/128/65/65732.png" width="25px" height="25px"/>
            <span style={{ color: 'black', fontSize: '13px', margin: '0 10px'}}>category</span></Sbar></Link>
            <Link to={`/admin/user`}><Sbar><Img src="https://cdn-icons-png.flaticon.com/128/2972/2972413.png" width="25px" height="25px"/>
            <span style={{ color: 'black', fontSize: '13px', margin: '0 10px'}}>HeadPhone</span></Sbar></Link>
            <Sbar><Img src="https://cdn-icons.flaticon.com/png/128/1551/premium/1551233.png?token=exp=1658088591~hmac=6a01b866856410c389eed1d5b455b41a" width="25px" height="25px"/>
            <span style={{ color: 'black', fontSize: '13px', margin: '0 10px'}}>Ipad</span></Sbar>
          </Menu>
          </Sider>
          <Layout style={{backgroundColor: '#f1f2f4'}}>
              <Outlet></Outlet>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
};

export default Navbar