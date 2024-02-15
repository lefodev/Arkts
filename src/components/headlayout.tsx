import React from 'react';
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import { Layout, Menu } from 'antd';

const { Header } = Layout;
import { CodeOutlined, MobileOutlined, BookOutlined, ToolOutlined, SignatureOutlined } from '@ant-design/icons';


export const configData = () => {

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
    const query = useStaticQuery(ql);
    return query.dataYaml;
}

export const HeaderLayout = () => {

    const { nav } = configData();

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



    return <Header style={{ display: 'flex', alignItems: 'center', padding: '0px', backgroundColor: "#fff" }}>
        <a href='/'>
            <div className="demo-logo" >
                <img src="/arkts.svg" alt="SVG Image" />
            </div>
        </a>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1, minWidth: 0 }} items={items} />
    </Header>
}