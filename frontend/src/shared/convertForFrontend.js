export const convertApp = ({
  name,
  description,
  img,
  app_url,
  github_url,
  id,
  ratings,
  score,
}) => ({
  name,
  description,
  //ratings,
  ratings: {
    1: 0,
    2: 1,
    3: 5,
    4: 3,
    5: 1,
  },
  image: img,
  appUrl: app_url,
  githubUrl: github_url,
  score,

  url: `/apps/${id}`,
  manageUrl: `/manage-apps/${id}/edit`,
  imageUrl: img
    ? ""
    : "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
})

export const convertUser = userData => {
  const {
    name,
    img,
    is_dev,
    dev_bio,
    dev_twitter,
    dev_github,
    dev_linkedin,
    dev_portfolio,
    id,
  } = userData

  return {
    name: name ? name : "",
    image: img
      ? img
      : "https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/Hipster-Developer-Dice.jpg",
    dev: is_dev ? is_dev : "",
    bio: dev_bio ? dev_bio : "",
    twitter: dev_twitter ? dev_twitter : "",
    github: dev_github ? dev_github : "",
    linkedin: dev_linkedin ? dev_linkedin : "",
    website: dev_portfolio ? dev_portfolio : "",
    url: `portfolios/${id}`,
  }
}
