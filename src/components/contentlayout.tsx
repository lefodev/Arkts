import React from 'react';
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import { Breadcrumb, Layout, Menu } from 'antd';
import { CodeOutlined, MobileOutlined, BookOutlined,ToolOutlined, SignatureOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const ql = (graphql`
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

const ContentLayout = ({ content }: { content: any }) => {

  const query = useStaticQuery(ql);
  const { dataYaml } = query;
  const { nav } = dataYaml;
  const { title, keywords, description } = dataYaml;

  const items = nav.map((item, index) => {
    const key = item.title;
    const icon = <CodeOutlined />;
    let children = undefined;
  
    if (item.children) {
      children = item.children.map((subItem, subIndex) => ({
        label: subItem.url ? (
          subItem.url.startsWith('/') ? (
            <a href={subItem.url}>{subItem.title}</a>
          ) : (
            <a href={subItem.url} target='_blank' rel='noopener noreferrer'>
              {subItem.title}
            </a>
          )
        ) : (
          subItem.title
        ),
        key: key + subIndex,
      }));
    }
  
    const label = item.url ? (
      item.url.startsWith('/') ? (
        <a href={item.url}>{item.title}</a>
      ) : (
        <a href={item.url} target='_blank' rel='noopener noreferrer'>
          {item.title}
        </a>
      )
    ) : (
      item.title
    );
  
    return { label, key, icon, children };
  });
  

  return (
    <html>
      <head>
          <title>{title}</title>
          <meta name="keywords" content={keywords} />
          <meta name="description" content={description} />
          {/* 其他 meta 标签和头部信息 */}
      </head>

    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', padding: '0px', backgroundColor: "#fff" }}>
        <a href='/'>
          <div className="demo-logo" >
            <img src="/arkts.svg" alt="SVG Image" />
          </div>
        </a>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1, minWidth: 0 }} items={ items}/>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <div
          style={{
            minHeight: 480,
            padding: 24,
            borderRadius: 8,
            backgroundColor: '#fff'
          }}
        >
          {content}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Arkts.dev ©{new Date().getFullYear()}
      </Footer>
    </Layout>
    </html>
  );
};

export default ContentLayout;
