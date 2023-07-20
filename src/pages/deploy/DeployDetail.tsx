import {useEffect, useState} from "react";


import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import NginxConfig from "../../components/NginxConfig.tsx";

interface Project {
    id?: number,
    title: string,
    cnTitle: string,
    gitUrl: string,
    branch?: string,
    packageDir?: string,
    packageCmd?: string,
    deployDir?: string,

}

interface Config {
    id?: number,
    title: string,
    cnTitle: string,
}

export default function DeployDetail() {
    const params = useParams();
    // TODO: projects到时候从后端获取数据
    const [projects] = useState<Array<Project>>([
        {
            id: 1,
            title: "boom-home",
            cnTitle: "个人主页前端",
            gitUrl: "",
            branch: "",
        },
        {
            id: 2,
            title: "codeploy",
            cnTitle: "聚合部署平台前端",
            gitUrl: "",
            branch: "",
        }
    ])
    const [selectedId, setSelectId] = useState<number>(1)
    const [editProject, setEditProject] = useState<Project>(projects[0])
    const {handleSubmit, register} = useForm<Project>({
        values: {
            ...editProject
        }
    })
    const [configs] = useState<Array<Config>>([
        {
            id: 1,
            title: "nginx_config",
            cnTitle: "Nginx配置",
        }
    ])


    const [group, setGroup] = useState<string>("")
    useEffect(() => {
        console.log(params.dtype)
    }, [])

    const doSubmit = (data: Project) => {
        console.log(data)
    }

    return (
        <div className={"h-full flex"}>
            <aside className="flex flex-col bg-transparent h-full w-60  border-r-2">
                <ul className="menu p-2 text-base-content ">
                    <div className={"divider mb-1"}>项目</div>
                    {
                        projects.map(project => {
                            return (
                                <li className="" key={project.title}>
                                    <div
                                        className={"hover:text-black hover:bg-gray-300 font-bold text-l " + ((group === "project" && selectedId === project.id) ? "active" : "")}
                                        key={project.title}
                                        onClick={() => {
                                            setSelectId(project.id ? project.id : 1)
                                            setEditProject(project)
                                            setGroup("project")
                                        }}>
                                        {/*{menuItem.icon}*/}
                                        {"> " + project.cnTitle}
                                    </div>
                                </li>
                            )
                        })
                    }
                    <div className={"divider mb-1"}>配置</div>

                    {
                        configs.map(config => {
                            return (
                                <li className="" key={config.id}>
                                    <div
                                        className={"hover:text-black hover:bg-gray-300 font-bold text-l " + ((group === "config" && selectedId === config.id) ? "active" : "")}
                                        onClick={() => {
                                            // setTitle(menuItem.title);
                                            // 将manage profile改为manage/profile
                                            // navigate(menuItem.path)
                                            // // @ts-ignore
                                            // document.getElementById("menu-control").click()
                                            setSelectId(config.id ? config.id : 1)
                                            setGroup("config")
                                        }}>
                                        {/*{menuItem.icon}*/}
                                        {"> Nginx配置"}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>

            {
                group === "project" ?
                    <div className={"content h-full flex-grow"}>
                        <div className={"flex flex-col h-full w-full items-center"}>
                            <form onSubmit={handleSubmit(doSubmit)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">项目名称</span>
                                    </label>
                                    <input type="text" placeholder="" {...register("title", {required: true})}
                                           className="input input-bordered w-full max-w-xs"/>
                                </div>
                            </form>
                        </div>
                    </div> : <NginxConfig/>
            }


        </div>
    )
}