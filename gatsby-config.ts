import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `arkts.dev`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sitemap", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 'gatsby-transformer-yaml', {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/`, // YAML 文件所在的目录
    },
  },  {
    resolve: `gatsby-transformer-remark`,  
      options: {  
        plugins: [  
          {  
            resolve: `gatsby-remark-prismjs`,  
            options: { 
            }, // 这里不需要任何额外的选项，因为我们会使用默认设置  
          },  
        ],  
      },  
  },
]
};

export default config;
