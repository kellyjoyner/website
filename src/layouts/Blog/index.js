import React from "react"
import Helmet from 'react-helmet';

import Page from "../../layouts/Page"

import LatestPosts from '../../components/LatestPosts';

const Blog = props => (
  <Page {...props}>
    <Helmet
      title="Kelly's Blog"
    />
    <LatestPosts numberOfPosts={Infinity}/>
  </Page>
);

export default Blog;
