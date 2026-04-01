import { ComButton } from '~/shared/ui/';
import { useState } from 'react';
import {
  IconGardenCart,
  IconChevronDown,
  IconChevronRight,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandXFilled,
  IconMenu,
  IconX,
} from '@tabler/icons-react';
import Logo from '../../../public/images/logo.svg?react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const showMenu = () => {
    setIsOpen('menu');
  };

  return (
    <>
      <div className="header">
        <div className="header-bar">
          <div className="title"></div>
          <div className="icons">
            <IconBrandInstagram color="white" />
            <IconBrandFacebookFilled fill="white" />
            <IconBrandXFilled fill="white" />
          </div>
          <div className="title"></div>
        </div>
        <div className="header-body">
          <div className="header-body-content">
            {/* <img src="/images/logo.png" alt="" className="logo" /> */}
            <Logo className="logo light" />
            <div className="mobile-menu-button" onClick={showMenu}>
              <IconMenu className="light" />
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
                <p>САЛБАРУУД</p>
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
              <p>САЛБАРУУД</p>
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
