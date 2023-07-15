import {useEffect, useState} from "react";


import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

type Project = {
    id?: number,
    title: string,
    cnTitle: string,
    gitUrl: string,
    branch?: string,
    packageDir?: string,
    packageCmd?: string,
    deployDir?: string,

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
    useEffect(() => {
        console.log(params.dtype)
    }, [])

    const doSubmit = (data: Project) => {
        console.log(data)
    }

    return (
        <div className={"h-full flex"}>
            <aside className="side flex flex-col bg-base-200 h-full w-80">
                <ul className="menu p-4 text-base-content ">
                    <div className={"divider font-bold font-mono m-0"}>项目列表</div>
                    {
                        projects.map(project => {
                            return (
                                <li className="" key={project.title}>
                                    <div
                                        className={"hover:text-black hover:bg-gray-300 font-bold text-l " + (selectedId === project.id ? "active" : "")}
                                        key={project.title}
                                        onClick={() => {
                                            // setTitle(menuItem.title);
                                            // 将manage profile改为manage/profile
                                            // navigate(menuItem.path)
                                            // // @ts-ignore
                                            // document.getElementById("menu-control").click()
                                            setSelectId(project.id ? project.id : 1)
                                            setEditProject(project)
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
            </div>
        </div>
    )
}