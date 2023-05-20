import Image from "next/image";
import "./page.module.css";
import Navigation from "@/components/menu-navigation/Navigation";
import Dashboard from "@/pages/Dashboard";


export default function Page() {


  return (
    <>
      <Dashboard />
      <Navigation />
    </>
  );
}
