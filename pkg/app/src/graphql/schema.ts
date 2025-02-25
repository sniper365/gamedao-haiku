import { gql } from 'apollo-server-micro'

export const typeDefs = gql`

  enum Environment {
    DEVELOPMENT
    STAGING
    PRODUCTION
  }

  type Link {
    id: String
    title: String
    description: String
    url: String
    category: String
    imageUrl: String
    users: [String]
  }

  type Features {
    DEBUG: Boolean,
    SHOW_HEADER: Boolean,
    SHOW_HEADER_NAV: Boolean,
    SHOW_FOOTER: Boolean,
    SHOW_FOOTER_NAV: Boolean,
    SHOW_APPLY: Boolean,
    SHOW_CAMPAIGNS: Boolean,
    SHOW_FX: Boolean
  }

  type Config {
    SITE_NAME: String
    SITE_TITLE: String
    SITE_DESCRIPTION: String
    SITE_IMAGE: String
    TW_SITE_NAME: String
    TW_SITE_CREATOR: String
    CONTACT: String
    UNSPLASH_KEY: String
    UNSPLASH_SECRET: String
    CRYPTOCOMPARE: String
    INFURA_MODE: String
    INFURA_KEY: String
    INFURA_SECRET: String
    INFURA_MAINNET: String
    INFURA_TESTNET: String
    AWS_REGION: String
    AWS_USERPOOL_ID: String
    AWS_USERPOOL_WEBCLIENT_ID: String
    GQL_URI: String
    GQL_KEY: String
    ETH_URI: String
    SUB_URI: String
    IPFS_URI: String
    SUBZERO_URI: String
    SUBZERO_PORT: String
  }

  type Query {
    version: String!
    links: [Link]!
    config( env: Environment! ): Config!
    features( env: Environment! ): Features!
  }

`