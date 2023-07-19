export interface IDeployCard {
    title: string,
    cnTitle: string,
    path: string,
    desc: string,
    group?: string,
    // icon: any,
    isShow: boolean
}

const DeployCardData: Array<IDeployCard> = [
    {
        title: "to_nginx",
        cnTitle: "部署到Nginx",
        path: "/deploy/nginx",
        desc: "将打包后的前端项目部署到nginx",
        group: "project",
        isShow: true,
    },
    {
        title: "to_docker",
        cnTitle: "部署到Docker",
        path: "/deploy/docker",
        desc: "将项目打包为镜像部署在服务器上",
        group: "project",
        isShow: true
    },
    {
        title: "nginx_config",
        cnTitle: "Nginx配置",
        path: "/deploy/nginx/config",
        desc: "Nginx配置文件的详细说明",
        group: "config",
        isShow: true
    }
]

export {DeployCardData}