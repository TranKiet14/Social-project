import { Menu } from "antd";
import { UserOutlined, DashboardOutlined, MessageOutlined, SettingOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";

function MenuSider() {
  const items = [
    {
      label: "Nguyen Hai Yen",
      icon: <UserOutlined />,
      key: "name",
    },
    {
      label: "Dashboard",
      icon: <DashboardOutlined />,
      key: "dashboard",
    },
    {
      label: "Message",
      icon: <MessageOutlined />,
      key: "message",
    },
    {
      label: "Settings",
      icon: <SettingOutlined />,
      key: "settings",
    }
  ]
  return (
    <>
      <Menu
        mode="inline"
        items={items}
        defaultSelectedKeys={["name"]}
        defaultOpenKeys={["name"]}
      />
    </>
  );
}
export default MenuSider;
