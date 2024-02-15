import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { HeaderLayout, configData } from './headlayout';

const { Header, Content, Footer } = Layout;

const {title,keywords,description} = configData;

const ContentLayout = ({ content }: { content: any }) => {
  
  return (
    <html>
      <head>
          <title>{title}</title>
          <meta name="keywords" content={keywords} />
          <meta name="description" content={description} />
          {/* 其他 meta 标签和头部信息 */}
      </head>
    <body>
    <Layout>
      <HeaderLayout key={'header'}/>
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
    </body>
    </html>
  );
};

export default ContentLayout;
