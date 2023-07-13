export interface IDeployCard {
    title: string,
    cnTitle: string,
    path: string,
    desc: string,
    // icon: any,
    isShow: boolean
}

const DeployCardData: Array<IDeployCard> = [
    {
        title: "to_nginx",
        cnTitle: "部署到Nginx",
        path: "/deploy/nginx",
        desc: "将打包后的前端项目部署到nginx",
        isShow: true,
    },
    {
        title: "to_docker",
        cnTitle: "部署到Docker",
        path: "/deploy/docker",
        desc: "将项目打包为镜像部署在服务器上",
        isShow: true,
    },
]

export {DeployCardData}