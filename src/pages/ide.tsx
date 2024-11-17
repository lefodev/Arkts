import React from 'react';
import { Table, Space, App } from 'antd';
import { CodeOutlined, } from '@ant-design/icons';
import ContentLayout from '../components/contentlayout';

export default function IdePage() {
    const title = ' ArkTs.dev';
    const tableData = [
        {   title: 'DevEco Studio',
            url: 'https://developer.huawei.com/consumer/cn/deveco-studio/' 
        },
        {   title: 'Arkts',
            url: 'https://developer.huawei.com/consumer/cn/arkts/'
        },
    ];

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <Space><CodeOutlined/>{text}</Space>,
        },
        {
            title: '路径',
            dataIndex: 'url',
            key: 'url',
            render:(text) =><a href={text}>{text}</a>,
        },
    ];

    const content = (
        <div>
            <div>
                <h1>{title}</h1>
                <Table dataSource={tableData} columns={columns} />
            </div>
        </div>
    );

    return <ContentLayout content={content} />;
}

