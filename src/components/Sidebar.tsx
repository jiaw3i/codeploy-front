// import Footer from "./Footer.tsx";
import {useNavigate} from "react-router-dom";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {MenusData} from "../data/menus.tsx";


export default function Sidebar() {
    // const {title, setTitle} = props;
    // const {theme, setTheme} = props;
    // const [theme, setTheme] = useState("light");
    // const {type, setType} = props;
    const navigate: NavigateFunction = useNavigate();
    return (
        <div className="drawer-side flex-shrink-0  h-screen max-h-screen no-scrollbar">
            <label htmlFor="my-drawer-menu" className="drawer-overlay"></label>
            <aside className="flex flex-col bg-base-200 h-full w-80 rounded-tr-2xl rounded-br-2xl">
                {/*<div className="w-60">*/}
                <ul className="menu p-4 text-base-content ">
                    {
                        MenusData.map(menuItem => {
                            return (
                                <li className="" key={menuItem.title}>
                                    <div
                                        className={"hover:text-black hover:bg-gray-300 font-bold text-l"}
                                        key={menuItem.title}
                                        onClick={() => {
                                            // setTitle(menuItem.title);
                                            // 将manage profile改为manage/profile
                                            navigate(menuItem.path)
                                            // @ts-ignore
                                            document.getElementById("menu-control").click()
                                        }}>
                                        {menuItem.icon}
                                        {menuItem.cnTitle}
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </aside>
        </div>
    )
}