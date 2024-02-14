import React from "react";
import ContentLayout from '../components/contentlayout';

const MDTemplate = ({ pageContext }) => {
  console.log(pageContext)
  const { frontmatter, html } = pageContext.node;

  const content = (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
  return <ContentLayout content={content} ></ContentLayout>
};

export default MDTemplate;
