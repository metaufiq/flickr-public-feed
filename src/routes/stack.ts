import { StackNavigationOptions } from "@react-navigation/stack";
import { ComponentClass, FunctionComponent } from "react";
import FeedDetail from "../layouts/pages/FeedDetail";
import Home from "../layouts/pages/Home";

interface StackRoute {
    name: string;
    options?: StackNavigationOptions;
    component: ComponentClass<any, any> | FunctionComponent<any>;
  }
const stack: StackRoute[] = [
{name:'Home',
component:Home
},
{name:'FeedDetail',
component:FeedDetail
}

]
export default stack;
