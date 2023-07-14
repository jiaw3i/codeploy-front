import {useEffect, useState} from "react";


import {useParams} from "react-router-dom";
// import {MenusData} from "../../data/menus.tsx";

type Project = {
    id?: number,
    title: string,
    cnTitle: string,
    gitUrl: string,
    branch?: string,
}
export default function DeployDetail() {
    const params = useParams();
    const [projects] = useState<Array<Project>>([
        {
            id: 1,
            title: "boom-home",
            cnTitle: "个人主页前端",
            gitUrl: "",
            branch: "",
        }
    ])
    useEffect(() => {
        console.log(params.dtype)
    }, [])
    return (
        <div className={"h-full"}>
            {/*<h1>{params.dtype}</h1>*/}
            <aside className="flex flex-col bg-transparent h-full w-60  border-r-2">
                <ul className="menu p-2 text-base-content ">
                    <div className={"divider mb-0"}>项目</div>
                    {
                        projects.map(project => {
                            return (
                                <li className="" key={project.title}>
                                    <div
                                        className={"hover:text-black hover:bg-gray-300 font-bold text-l"}
                                        key={project.title}
                                        onClick={() => {
                                            // setTitle(menuItem.title);
                                            // 将manage profile改为manage/profile
                                            // navigate(menuItem.path)
                                            // // @ts-ignore
                                            // document.getElementById("menu-control").click()
                                        }}>
                                        {/*{menuItem.icon}*/}
                                        {"> " + project.cnTitle}
                                    </div>
                                </li>
                            )
                        })
                    }
                    <div className={"divider mb-0"}>配置</div>
                    <li className="">
                        <div
                            className={"hover:text-black hover:bg-gray-300 font-bold text-l"}
                            onClick={() => {
                                // setTitle(menuItem.title);
                                // 将manage profile改为manage/profile
                                // navigate(menuItem.path)
                                // // @ts-ignore
                                // document.getElementById("menu-control").click()
                            }}>
                            {/*{menuItem.icon}*/}
                            {"> Nginx配置"}
                        </div>
                    </li>
                </ul>
            </aside>
        </div>
    )
}