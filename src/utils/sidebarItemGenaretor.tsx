import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPaths } from "../types";
export const sidebarItemsGenerator = (
  items: TUserPaths[],
  collapsed: boolean
) => {
  const sidebarItem = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.icon && item.label) {
      acc.push({
        key: item.path,
        icon: collapsed ? (
          <Tooltip placement="right" title={item.label}>
            {item.icon}
          </Tooltip>
        ) : (
          item.icon
        ),
        label: !collapsed ? (
          <NavLink to={`${item.path}`}>{item.label}</NavLink>
        ) : undefined,
      });
    }
    return acc;
  }, []);
  return sidebarItem;
};
