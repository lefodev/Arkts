import * as React from "react";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import ContentLayout from '../components/contentlayout';


const IndexPage = () => {
    const query = useStaticQuery(graphql`
    query {
        dataYaml {
            title
            keywords
            description
            nav {
            title
            url
            children {
                title
                url
            }
            }
        }
    }
    `);

    const { dataYaml } = query;
    const { title, keywords, description } = dataYaml;
    return (
            <ContentLayout content={dataYaml.title} ></ContentLayout>
    );
};

export default IndexPage;

// Move the Head component inside the IndexPage component
// export const Head: HeadFC = () => (
//     <title>111111</title>
// );
