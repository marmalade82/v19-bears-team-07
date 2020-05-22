import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import AppGrid from "../components/AppGrid/AppGrid"
import UserContext from "../shared/UserContext"
import getMyApps from "../shared/fetchActions/getMyApps"
import * as forFrontend from "../shared/convertForFrontend"

const ManageAppsPage = () => {
  const { userId, loggedIn } = React.useContext(UserContext)
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    // Fetches all the apps that are authenticated for this user.
    ;(async () => {
      const appData = await getMyApps()
      console.log(appData)
      const apps = appData.map(forFrontend.convertApp)
      setApps(apps)
    })()
  }, [userId])

  if (!userId || !loggedIn) {
    return (
      <Layout>
        <SEO title="Manage Apps" />
        <h1>You are not authorized</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="Manage Apps" />
      <h1>manage apps</h1>
      <RenderApps apps={apps}></RenderApps>
    </Layout>
  )
}

const RenderApps = ({ apps }) => {
  if (apps && apps.length > 0) {
    const appUrls = apps.map(app => app.manageUrl)
    return <AppGrid apps={apps} appUrls={appUrls}></AppGrid>
  } else {
    return <h2>You do not have any apps</h2>
  }
}

export default ManageAppsPage
