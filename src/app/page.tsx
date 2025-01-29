import { Card, Space } from "antd";
import Profile from "./components/profile";
import SocialInfo from "./components/social";
import Product from "./components/product";


export default function Home() {
  return (
    <>
      <Card>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Profile />
          <SocialInfo />
          <Product />
        </Space>
      </Card>
    </>
  );
}
