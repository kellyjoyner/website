import React, {PropTypes} from "react"
import Helmet from "react-helmet"
import { BodyContainer, joinUri } from "phenomic"
import Loading from "../../components/Loading"
import Icon from '../../components/Icon'

import LinkedIn from '../../assets/icons/linkedin.svg'

import Github from '../../assets/icons/github.svg'


import styles from "./index.css"

const Homepage = (props, { metadata: { pkg } }) => {


  const { isLoading, __url, head, body, footer, header, children } = props;

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const socialImage = head.hero && head.hero.match("://") ? head.hero
    : joinUri(process.env.PHENOMIC_USER_URL, head.hero)

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:image", content: socialImage },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "twitter:image", content: socialImage },
    { name: "description", content: head.description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      <div
        className={ styles.hero }
        style={ head.hero && {
          background: `#999 url(${ head.hero }) 50% 30% / cover`,
        } } >
        <div className={ styles.wrapper }>
            <div className={ styles.mainHeader }>
              Kelly Joyner
            </div>
            <div className={ styles.subHeader }>
              Front End Developer
            </div>
            <div className={ styles.subHeader2 }>
              Food Lover & Health Nut
            </div>
        </div>
      </div>
      <div className={ styles.wrapper + " " + styles.pageContent }>
        { header }
        <div className={ styles.body }>
          {
            isLoading
              ? <Loading />
              : <BodyContainer>
                <div className={ styles.icons }>
                  <Icon href="https://www.linkedin.com/in/joynerkelly/" icon={LinkedIn}>LinkedIn</Icon>
                  <Icon href="https://github.com/kellyjoyner" icon={Github}>Github</Icon>
                </div>


                { body }
                </BodyContainer>
          }
        </div>
        { children }
        { footer }
      </div>
    </div>
  )
}

Homepage.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
  layout: PropTypes.string,
}

Homepage.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Homepage
