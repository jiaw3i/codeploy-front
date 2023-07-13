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
        <div>
            {/*<h1>{params.dtype}</h1>*/}
            <aside className="flex flex-col bg-base-200 h-full w-80 rounded-tr-2xl rounded-br-2xl">
                {/*<div className="w-60">*/}
                <ul className="menu p-4 text-base-content ">
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
                                        {project.cnTitle}
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