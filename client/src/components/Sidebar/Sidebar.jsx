import '../../styles/Sidebar.scss';
import { Bell, Mail } from 'lucide-react';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_profile_info">
        <div className="sidebar_profile_info__left">
          <Mail />
          <Bell />
        </div>

        <div className="sidebar_profile_info__right">
          <h3>Ddyadz</h3>
          <img
            src="https://images.unsplash.com/photo-1522196772883-393d879eb14d?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
