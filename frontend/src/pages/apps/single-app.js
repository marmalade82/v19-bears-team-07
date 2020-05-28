import React from "react"
import AppCarousel from "../../components/AppCarousel/AppCarousel"
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Container } from "reactstrap"
import ShareSocial from "../../components/share-social"
import PaginatedComments from "../../components/Comments/PaginatedComments"
import * as forFrontend from "../../shared/convertForFrontend"
import getSingleApp from "../../shared/fetchActions/getSingleApp"
import ViewRating from "../../components/Ratings/Rating"

export const SingleApp = ({ appId }) => {
  const [app, setApp] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const appData = await getSingleApp(appId)
      const app = forFrontend.convertApp(appData)
      console.log(app)
      setApp(app)
    })()
  }, [appId])

  if (app) {
    const { name, description, score, ratings } = app
    return (
      <div className="AnAppPage-container">
        <AppCarousel items={[app]} />
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">{name}</h1>
            <p className="lead">{description}</p>
            <ShareSocial></ShareSocial>
          </Container>
          <ViewRating value={score} distribution={ratings}></ViewRating>
        </Jumbotron>
        <PaginatedComments comments={exampleComments}></PaginatedComments>
      </div>
    )
  }

  return null
}

export default SingleApp

let ex = [
  {
    username: "Micah",
    text: "Left FB for this",
    timestamp: new Date(),
    avatar:
      "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png",
    user_id: 2,
  },
  {
    username: "Jeremiah",
    text: "Left FB for this",
    timestamp: new Date(),
    avatar:
      "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png",
    user_id: 2,
  },
  {
    username: "Michael",
    text: "Left FB for this",
    timestamp: new Date(),
    avatar:
      "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png",
    user_id: 2,
  },
  {
    username: "Jeremiad",
    text: "Left FB for this",
    timestamp: new Date(),
    avatar:
      "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png",
    user_id: 2,
  },
  {
    username: "Mica",
    text: "Left FB for this",
    timestamp: new Date(),
    avatar:
      "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png",
    user_id: 2,
  },
  {
    username: "Jeremy",
    text: "Left FB for this",
    timestamp: new Date(),
    avatar:
      "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png",
    user_id: 2,
  },
]

const exampleComments = ex.concat(ex).concat(ex).concat(ex).concat(ex)
