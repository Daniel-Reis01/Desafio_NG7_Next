import  "./Navigation.scss";
import Link from "next/link";
import Image from "next/image";


export default function Navigation() {
 
  return (
      <>
    <nav className="navbar">
      <h1>LOGO</h1>
      <ul className="page-nav">
        <li className="dash-navbar">
          <Link href="/">
            <Image src="/dashboard.png" alt="image-dashboard" width={50} height={50} /><br/>
            Dashboard
          </Link>
        </li>
        <li className="instituitions">
          <Link href="">
            <Image src="/instituiçao.png" alt="image-instituitions" width={50}  height={50} /><br/>
            Instituctions
          </Link>
        </li>
        <li className="graphic" >
          <Link href="">
            <Image src="/grafico.png" alt="image-graphic" width={50}  height={50} /><br/>
            KPIs
          </Link>
        </li>
      </ul>

      <div className="settings-nav">
      <img src="engrenagem.png" alt="image-settings" width={40} />
      <img src="sino.png" alt="image-graphic" width={40} />
      <img src="user.png" alt="image-graphic" width={40} />
      </div>
    </nav>
    <div className="menu-icon">
      <img src="menu.png"/>
    </div>
      </>
  );
}
