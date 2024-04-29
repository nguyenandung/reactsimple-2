import { Drawer } from 'antd';
import { memo, ReactNode, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BlogsMobile } from 'src/assets/icons/blogs-mobile.svg';
import { ReactComponent as CareersMobile } from 'src/assets/icons/careers-mobile.svg';
import { ReactComponent as ContactsMobile } from 'src/assets/icons/contacts-mobile.svg';
import { ReactComponent as HomeMobile } from 'src/assets/icons/home-mobile.svg';
import { ReactComponent as Logo } from 'src/assets/icons/logo.svg';
import { ReactComponent as Menu } from 'src/assets/icons/menu.svg';
import { ReactComponent as ProductsMobile } from 'src/assets/icons/products-mobile.svg';
import { RefContext } from 'src/context/ref';
import { useRouter } from 'src/hooks';
import { RefContextType } from 'src/types/ref';
import { scrollHref } from 'src/utils/scroll';
import MenuC from './components/Menu';
import './style.scss';

export type Tab = {
  id: number;
  icon?: ReactNode;
  title: string;
  path?: string;
};

const tabs: Tab[] = [
  { id: 1, title: 'Trang chủ' },
  { id: 2, title: 'Về chúng tôi', path: 'mission' },
  { id: 3, title: 'Sản phẩm', path: 'products' },
  { id: 4, title: 'Blogs', path: 'blogs' },
  { id: 5, title: 'Tuyển dụng', path: 'careers' },
  { id: 6, title: 'Liên hệ', path: 'contacts' }
];

const menus: Tab[] = [
  { id: 1, icon: <HomeMobile />, title: 'Trang chủ' },
  { id: 3, icon: <ProductsMobile />, title: 'Sản phẩm', path: 'products' },
  { id: 4, icon: <BlogsMobile />, title: 'Blogs', path: 'blogs' },
  { id: 5, icon: <CareersMobile />, title: 'Tuyển dụng', path: 'careers' },
  { id: 6, icon: <ContactsMobile />, title: 'Liên hệ', path: 'contacts' }
];

const Header = () => {
  const router = useRouter();
  const {
    pathname,
    location: { hash },
    query: { id }
  } = router;

  const [open, setOpen] = useState(false);

  const [tabActive, setTabActive] = useState<any>();
  const { refList } = useContext(RefContext) as RefContextType;

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleActiveId = (value: Tab) => {
    setTabActive(value);
  };

  const checkTabRedirect = (value: Tab) => {
    return value.id === 6 ? 'contacts' : value.id === 4 ? 'blogs' : value.path ? `#${value.path}` : '';
  };

  useEffect(() => {
    setTimeout(() => {
      tabActive &&
        scrollHref(
          tabActive.path && refList[tabActive.path] ? refList[tabActive.path].value.current : refList.home.value.current
        );
    }, 300);
  }, [tabActive]);

  useEffect(() => {
    setOpen(false);
    switch (pathname) {
      case '/contacts':
        setTabActive(tabs[5]);
        break;
      case `/blogs/${id}`:
        setTabActive(null);
        break;
      case '/blogs':
        setTabActive(tabs[3]);
        break;
      case '/':
        switch (hash) {
          case '#mission':
            setTabActive(tabs[1]);
            break;
          case '#products':
            setTabActive(tabs[2]);
            break;
          case '#careers':
            setTabActive(tabs[4]);
            break;
          case '':
            setTabActive(tabs[0]);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }, [router]);

  return (
    <header id="header" ref={refList.home.value}>
      <div className="header__left">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__right">
        <ul className="tabs">
          {tabs.map((item: Tab) => {
            return (
              <li
                key={item.id}
                className={`${item?.id === tabActive?.id && 'active'} ${item?.id !== tabActive?.id && 'not-active'}`}
                onClick={() => handleActiveId(item)}
              >
                <Link to={`/${checkTabRedirect(item)}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="header-menu" onClick={toggleDrawer}>
          <Menu />
          <Drawer title="" closable={false} width="60%" open={open} className="header-drawer" onClose={onClose}>
            <ul>
              {menus.map((item: Tab) => {
                return (
                  <li key={item?.id} onClick={() => handleActiveId(item)}>
                    <MenuC value={item} tabActive={tabActive} checkTabRedirect={checkTabRedirect} />
                  </li>
                );
              })}
            </ul>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
