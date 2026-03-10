import { ComButton } from '~/shared/ui/';
import {
  IconGardenCart,
  IconChevronDown,
  IconChevronRight,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
} from '@tabler/icons-react';

export const Header = () => {
  return (
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
  );
};
