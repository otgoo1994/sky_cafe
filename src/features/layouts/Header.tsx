import { ComButton } from '~/shared/ui/';
import { useState } from 'react';
import {
  IconGardenCart,
  IconChevronDown,
  IconChevronRight,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
  IconMenu,
  IconX,
} from '@tabler/icons-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const showMenu = () => {
    console.log('=====');

    setIsOpen('menu');
  };

  return (
    <>
      <div className="header">
        <div className="header-bar">
          <div className="title">
            <span>OPENING HOURS: </span> 07:00 AM - 10:00 PM
          </div>
          <div className="icons">
            <IconBrandFacebookFilled fill="white" />
            <IconBrandInstagram color="white" />
            <IconBrandYoutubeFilled fill="white" />
          </div>
          <div className="title">
            <span>ХАЯГ: </span> УЛААНБААТАР, БУЯНТ-УХАА
          </div>
        </div>
        <div className="header-body">
          <div className="header-body-content">
            <img src="/images/logo.png" alt="" className="logo" />
            <div className="mobile-menu-button" onClick={showMenu}>
              <IconMenu />
            </div>
          </div>
          <div className="header-body-content menu-desktop">
            <ul>
              <li>
                <p>НҮҮР</p>
              </li>
              <li>
                <p>БИДНИЙ ТУХАЙ</p>
              </li>
              <li>
                <p>МЕНЮ</p>
              </li>
              <li>
                <p>ХОЛБОО БАРИХ</p>
              </li>
            </ul>
          </div>
          <div className="header-body-content cart">
            <ComButton
              label="Сагс харах"
              variant="warning"
              leftIcon={<IconGardenCart />}
              rightIcon={<IconChevronRight />}
            />
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${isOpen === 'menu' && 'show'}`}>
        <div className="mobile-menu-content">
          <img src="/images/logo.png" alt="" className="logo" />
          <div className="mobile-menu-button" onClick={() => setIsOpen(null)}>
            <IconX />
          </div>
        </div>

        <div className="mobile-menu-list">
          <ul>
            <li>
              <p>НҮҮР</p>
            </li>
            <li>
              <p>БИДНИЙ ТУХАЙ</p>
            </li>
            <li>
              <p>МЕНЮ</p>
            </li>
            <li>
              <p>ХОЛБОО БАРИХ</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
