import router from './.rs'
const dynamicWrapper = (app, routers) => {
  return {
    component: () => import(`./routes/${routers}`),
    models:() => [
     import(`./routes/${routers}/model`)
    ],
    path:`/${routers}`,
  }
}

const getRouterData = app => {
  return router.menus.map(routers => {
    return dynamicWrapper(app, routers)
  })
}
export default getRouterData
