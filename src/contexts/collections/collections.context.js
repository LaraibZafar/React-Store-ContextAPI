import {createContext} from 'react';
import SHOP_DATA from "./shop.data";

//create a context and it's initial state = SHOP_DATA
const CollectionsContext = createContext(SHOP_DATA);
export default CollectionsContext;