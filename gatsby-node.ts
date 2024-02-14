// gatsby-node.ts

import { GatsbyNode, Node } from 'gatsby';
import path from 'path';

interface Frontmatter {
  slug: string;
}

interface MarkdownRemark extends Node {
  frontmatter: Frontmatter;
}

interface QueryResult {
  allMarkdownRemark: {
    nodes: MarkdownRemark[];
  };
}

const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 定义正则表达式数组
  const directories = ['ts', 'tutorials', 'about'];

  // 循环遍历每个目录
  for (const directory of directories) {
    // 构建文件路径正则表达式
    const regex = new RegExp(`/data/${directory}/`);

    // 查询 markdown 数据
    const result: QueryResult = await graphql(`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "${regex}" } }) {
          nodes {
            frontmatter {
              slug
              title
            }
            html
          }
        }
      }
    `);

    // 创建页面
    result.data.allMarkdownRemark.nodes.forEach(node => {
      const page = {
        path: `${directory}/${node.frontmatter.slug}`,
        component: path.resolve('./src/templates/markdown-template.tsx'),
        context: {
          node,
        },
      };
      createPage(page);
    });
  }

};

export { createPages };
