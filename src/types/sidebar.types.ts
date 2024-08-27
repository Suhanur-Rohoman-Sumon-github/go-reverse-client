import { ReactNode } from "react";

export type TSidebarItem = {
    key: string;
    label: ReactNode;
    icon: ReactNode;
    path?:string
  };

export type TUserPaths = {
    index?:boolean
    key?: string;
    label: ReactNode;
    icon?: ReactNode; 
    element:ReactNode
    path?:string
    
}