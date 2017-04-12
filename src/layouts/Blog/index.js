import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { Link } from "react-router"
import dateFns from 'date-fns';
import Helmet from 'react-helmet';

import Page from "../../layouts/Page"

import styles from "./index.css"

//const numberOfLatestPosts = 6

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
