import React, { useRef } from 'react';
import { RefContextType } from 'src/types/ref';

type Props = {
  children: React.ReactNode;
};

export const RefContext = React.createContext<RefContextType>({});
const RefProvider: React.FC<Props> = ({ children }) => {
  const homeRef = useRef();
  const missionRef = useRef();
  const productsRef = useRef();
  const careersRef = useRef();
  const refList = {
    mission: {
      value: missionRef
    },
    home: {
      value: homeRef
    },
    products: {
      value: productsRef
    },
    careers: {
      value: careersRef
    }
  };

  return <RefContext.Provider value={{ refList }}>{children}</RefContext.Provider>;
};

export default RefProvider;
