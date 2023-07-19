// import {useForm} from "react-hook-form";

// import {get} from "../utils/request.tsx";
import {useEffect, useState} from "react";

interface INginxConfig {
    id?: number,
    name: string,
    description: string,
    rootDir: string,
    protocol: string,
    address: string,
    port: number,
}

export default function NginxConfig() {
    // const {handleSubmit, register, setValue} = useForm<INginxConfig>()

    const [nginxConfigs, setNginxConfigs] = useState<Array<INginxConfig>>()

    useEffect(() => {
        queryNginxConfigs()
    }, [])
    // const submitNgxConfig = (data: INginxConfig) => {
    //     console.log(data)
    // }

    const queryNginxConfigs = () => {
        // get("/api/codeploy/nginx/configs", {}).then((res: any) => {
        //     console.log(res)
        //     setNginxConfigs(res.data)
        // })

        setNginxConfigs([
            {
                id: 1,
                name: "dell nginx",
                description: "DELL电脑上的Nginx配置",
                rootDir: "/usr/local/nginx",
                protocol: "ftp",
                address: "ftp://",
                port: 80,
            }, {
                id: 2,
                name: "centos7 config",
                description: "centos7 Nginx配置",
                rootDir: "/usr/local/nginx",
                protocol: "sftp",
                address: "sftp://",
                port: 80,
            },
            {
                id: 3,
                name: "centos8",
                description: "centos8 Nginx配置",
                rootDir: "/usr/local/nginx",
                protocol: "sftp",
                address: "sftp://",
                port: 80,
            }
        ])
    }

    return (
        <div className={"h-full w-full p-10 justify-center"}>
            <div className="flex flex-col w-full h-full items-center">
                <table className={"table w-3/5 "}>
                    <thead>
                    <tr className={"font-mono font-bold text-sm"}>
                        <th>ID</th>
                        <th>名称</th>
                        <th>描述</th>
                        <th>根路径</th>
                        <th>协议</th>
                        <th>地址</th>
                        <th>端口</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        nginxConfigs?.map((config: INginxConfig) => {
                            return (
                                <tr key={config.id}>
                                    <th>{config.id}</th>
                                    <td>{config.name}</td>
                                    <td>{config.description}</td>
                                    <td>{config.rootDir}</td>
                                    <td>{config.protocol}</td>
                                    <td>{config.address}</td>
                                    <td>{config.port}</td>
                                    <td>
                                        <div className={"btn btn-primary btn-sm"}>
                                            编辑
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>

                </table>

            </div>
        </div>
    )
}