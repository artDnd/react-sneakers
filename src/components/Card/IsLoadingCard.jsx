import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    className=" mb-20 mt-15 "
    speed={2}
    width={250}
    height={250}
    viewBox="0 0 200 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="130" rx="4" ry="4" width="93" height="15"/>
    <rect x="0" y="171" rx="8" ry="8" width="80" height="20"/>
    <rect x="103" y="155" rx="8" ry="8" width="48" height="37"/>
    <rect x="0" y="0" rx="10" ry="10" width="150" height="90"/>
    <rect x="0" y="101" rx="4" ry="4" width="150" height="15"/>
  </ContentLoader>
)

export default MyLoader
