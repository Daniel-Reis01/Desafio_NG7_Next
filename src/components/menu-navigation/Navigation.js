import  "./Navigation.scss";
import Link from "next/link";
import Image from "next/image";
export default function Navigation() {
  return (
    <nav className="navbar">
      <h1>LOGO</h1>
      <ul className="page-nav">
        <li>
          <Link href="/Dashboard">
            <Image src="/dashboard.png" alt="image-dashboard" width={50} height={50} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="">
            <Image src="/instituiçao.png" alt="image-instituitions" width={50}  height={50} />
            Instituctions
          </Link>
        </li>
        <li >
          <Link href="">
            <Image src="/grafico.png" alt="image-graphic" width={50}  height={50} />
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
  );
}
