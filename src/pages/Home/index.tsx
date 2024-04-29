import React, { useContext } from "react";
import { RefContext } from "src/context/ref";
import { RefContextType } from "src/types/ref";
import Mission from "./components/Mission";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import Brand from "./components/Brand";
import Careers from "./components/Careers";
import Environment from "./components/Environment";
import Products from "./components/Products";
import Slogan from "./components/Slogan";
import "./style.scss";

const Home: React.FC = () => {
  const { refList } = useContext(RefContext) as RefContextType;
  const components = [
    { id: 1, component: <Banner />, layoutFullWidth: true },
    {
      id: 2,
      component: <Mission />,
      path: "mission",
    },
    {
      id: 3,
      component: <Products />,
      path: "products",
    },
    {
      id: 4,
      component: <Slogan />,
      layoutFullWidth: true,
    },
    {
      id: 5,
      component: <Environment />,
      layoutFullWidth: true,
    },
    {
      id: 6,
      component: <Careers />,
      path: "careers",
    },
    {
      id: 8,
      component: <Brand />,
    },
    {
      id: 7,
      component: <Blogs />,
    },
  ];

  return (
    <div id="home">
      {components.map((item) => {
        return (
          <div
            key={item.id}
            ref={item?.path && refList[item.path].value}
            className={`home__component ${
              !item.layoutFullWidth && "home__layout"
            }`}
          >
            {item.component}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
