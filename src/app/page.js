import Image from "next/image";
import Navbar from "../pages/component/Navbar";
import Top from "../pages/component/Top";
import Photo from "../pages/component/Photo";
import Photo1 from "../pages/component/Photo1";
import Heading from "../pages/component/Heading";
import Selling from "../pages/component/Selling";
import Browser from "../pages/component/Browser";
import Our from "../pages/component/Our";
import Stay from "../pages/component/Stay";

export default function Home() {
  return (
    <div>
      <Top/>
      
      <Photo/>
      <Photo1/>
      <Heading/>
      <Selling/>
      <Browser/>
      <Our/>
      
    </div>
  );
}



