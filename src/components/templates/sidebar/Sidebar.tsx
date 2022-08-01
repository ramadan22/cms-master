import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AdminNavbar from '../AdminNavbar';
import Menu from './Menu';
import applicationMenu from '../../../constants/sidebar.json';
import Service from './Service';

const SideBar = () => {
  const { visibility, setVisibility } = Service();

  return (
    <>
      <AdminNavbar />
      <div className="h-screen fixed z-20 top-0 md:left-0 -left-56 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-56 z-10 py-2 transition-all duration-300">
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <span className="mt-2 text-center w-full inline-block">
            <h6>Material Tailwind</h6>
          </span>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />
            <ul className="flex-col min-w-full flex list-none">
              {applicationMenu.map((row: any) => (
                <Menu
                  key={row?.slug}
                  icon={
                    (row?.slug === 'dashboard' && <DashboardIcon />)
                    || (row?.slug === 'settings' && <SettingsIcon />)
                  }
                  slug={row?.slug}
                  text={row?.text}
                  route={row?.route}
                  setVisibility={(value: string) => setVisibility(value)}
                  visibility={visibility}
                  dropdown={row?.child}
                />
              ))}
            </ul>
            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              <li className="px-4">
                <button
                  type="button"
                  className="w-full bg-gradient-to-tr rounded-lg from-purple-500 to-purple-700 gap-4 py-3 px-4 text-white text-sm"
                >
                  LOGOUT
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
