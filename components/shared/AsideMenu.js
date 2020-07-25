import Link from 'next/link'
import { Nav } from 'reactstrap';
import Aside from './Aside';

const NavItem = ({title, link}) => <li className="menu-item"><Link href={link} ><a href="#" className="menu-link">{title}</a></Link></li>;

const AsideMenu = () => {
  return (
    <Nav className="aside-links" navbar>
      <NavItem title="Parcels" link="/parcels" />
      <NavItem title="Tractors" link="/tractors" />
      <NavItem title="Proccess Parcel" link="/proccesing" />
      <NavItem title="Reports" link="/reports" />
    </Nav>
  )
}

export default AsideMenu;
