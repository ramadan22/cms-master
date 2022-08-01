import React, { ReactNode } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useHistory, useLocation } from 'react-router-dom';

interface Dropdown {
  text: string;
  slug: string;
  route: string;
}

interface Props {
  icon?: ReactNode;
  text: string;
  route: string;
  slug: string;
  visibility: string;
  setVisibility: (value: string) => void;
  dropdown?: Array<Dropdown>;
}

const Menu = (props: Props) => {
  const location = useLocation();
  const history = useHistory();
  const {
    icon,
    text,
    route,
    slug,
    dropdown,
    visibility,
    setVisibility,
  } = props;

  const condition = !visibility.includes(slug);

  return (
    <li className="">
      <button
        type="button"
        onClick={route !== '' ? () => history.push(route) : () => setVisibility(condition ? slug : '')}
        className={`
          ${location?.pathname?.includes(slug) && 'bg-red-200'}
          flex justify-between items-center w-full px-4 items-center text-sm text-gray-700 font-light py-3
        `}
      >
        <span className="flex items-center gap-4">
          {icon}
          {text}
        </span>
        {(dropdown && dropdown?.length > 0 && (
          condition
            ? <ArrowDropDownIcon />
            : <ArrowDropUpIcon />
        )) || <span />}
      </button>
      {dropdown && dropdown?.length > 0 && (
        <ul className={`${condition && 'hidden'}`}>
          {dropdown?.map((row: any) => (
            <li key={row?.slug} className="">
              <button
                type="button"
                onClick={row?.route !== '' ? () => history.push(row?.route) : () => { }}
                className={`
                  ${location?.pathname?.includes(row?.slug) && 'font-bold'}
                  w-full pl-14 pr-4 flex items-center gap-4 text-sm text-gray-700 font-light py-2
                `}
              >
                {row?.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

Menu.defaultProps = {
  icon: <span />,
  dropdown: [],
};

export default Menu;
