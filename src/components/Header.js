import { PageHeader, Button, Input,Space,Badge } from 'antd';
import { useMoralis } from "react-moralis";
import './Header.css'
import Amazon from "../images/logo.png"
import BookStore from "../images/bookstore.png"
import USA from "../images/usa.png"
import {ShoppingCartOutlined, MenuOutlined} from "@ant-design/icons";
import { Link } from 'react-router-dom';
const {Search}= Input;
const categories=["Comics","Dictionaries","Novels","Fantasy","Horror","Adventure"]


const Header = () => {
  const { authenticate,account } = useMoralis();
  return(
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
          <Link to="/"><img src={Amazon} className="logo"  ></img></Link>
          <img style={{}} src={BookStore} className="logo" ></img>
          <Search
          placeholder='Find A Product'
          enterButton
          size='large'
          className='searchBar'
          />
         <Button onClick={()=>authenticate()} size='large' className="login" key="1" type="primary" style={{borderRadius:'12px',marginTop:'4px'}} onClick={() => authenticate()}>
         {account ? <span>{account.slice(0,5)}...</span> : <span>Login</span>}
          </Button>
          <Space size={"large"}>
              
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>
              <Space className="header-buttons" size={"small"}>
                <img style={{marginTop:"-13px"}} src={USA} alt="region" className="flag"></img>
              </Space>
              
            </Space>
          </>
        ]}>
      </PageHeader>
      <div className='site-page-subheader-ghost-wrapper'>
        <Space size={"middle"}>
          <Space size={"small"} style={{fontWeight:"bold"}}>
            <MenuOutlined/>
            Categories
          </Space>
          {
            categories.map((e)=>{
              return(
                <Link to="/categories" state={e} className="categories" >{e}</Link>
              )
            })
          }
        </Space>
      </div>
    </div>
  )
}

export default Header;