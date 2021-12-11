import * as React from 'react'
import { graphql } from 'gatsby'
import { SliceZone } from '@prismicio/react'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import { components } from '../slices'
import styled from 'styled-components'
// import media from '../styles'

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Header = styled.h2`
  text-align: center;
`

const HomeTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicHomepage.data
  const footerData = data.prismicFooter.data

  return (
    <Layout isHomepage footerData={footerData}>
      <Seo title="Home" />
      <HomepageBanner
        title={doc.banner_title.text}
        description={doc.banner_description.text}
        backgroundUrl={doc.banner_background.url}
      />
      <Header id="portfolio">Portfolio</Header>
      <ProjectContainer>
        <SliceZone slices={doc.body} components={components} />
      </ProjectContainer>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  prismicHomepage {
    data {
      banner_title {
        text
      }
      banner_description {
        text
      }
      banner_background {
        url
      }
      body {
        ... on PrismicSliceType {
          slice_type
        }
        ... on PrismicHomepageDataBodyAlternateGrid {
          id
          primary {
            source_url {
              url
            }
            source_url_2 {
              url
            }
            demo_url {
              url
            }
            description {
              text
            }
            image_side
            image {
              url
            }
            title {
              text
            }
          }
          items {
            optional_icon {
              url
            }
          }
        }
      }
    }
  }
  prismicFooter {
    data {
      copyright {
        text
      }
      github_link {
        url
      }
      linkedin_link {
        url
      }
      mailto_link {
        url
      }
    }
  }
}


`

export default withPrismicPreview(HomeTemplate)