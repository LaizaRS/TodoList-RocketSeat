import { Outlet } from "react-router";
import Header from "../coreComponentes/header";
import MainComponent from "../coreComponentes/mainContent";
import FooterComponente from "../coreComponentes/footer";

export default function LayoutMain() {
  return (
    <>
    
    <Header />
    <MainComponent>
      <Outlet />
    </MainComponent>

    <FooterComponente />
 
    </>
  );
}