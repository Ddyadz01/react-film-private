import { NavLink } from 'react-router-dom';

import { Film, LayoutGrid, TvMinimalPlay } from 'lucide-react';

import '../../styles/Dashboard.scss';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_header">
        <h1>Menu</h1>
      </div>
      <div className="dashboard_list">
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <LayoutGrid />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies">
                <TvMinimalPlay />
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/More">
                <Film />
                More
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="dashboard_footer"></div>
    </div>
  );
};
