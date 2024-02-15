import React from 'react';
import { Button, Table, Space, App } from 'antd';
import { WindowsFilled, AppleFilled, } from '@ant-design/icons';
import ContentLayout from '../components/contentlayout';

export default function IdePage() {
    const title = 'DevEco Studio 3.1.1 Release';
    const tableData = [
        {
            platform: 'Windows(64-bit)',
            devEcoStudioPackage: 'devecostudio-windows-3.1.0.501.zip',
            size: '843.6M',
            downloadLink: 'https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/81/v3/tgRUB84wR72nTfE8Ir_xMw/devecostudio-windows-3.1.0.501.zip?HW-CC-KV=V1&HW-CC-Date=20230621T074329Z&HW-CC-Expire=315360000&HW-CC-Sign=22F6787DF6093ECB4D4E08F9379B114280E1F65DA710599E48EA38CB24F3DBF2',
            sha256Checksum: 'fbe79d92017d642ee91b2471b36c3e22ff3c186a0df36f3ae683129cfd445d9c',
        },
        {
            platform: 'Mac(X86)',
            devEcoStudioPackage: 'devecostudio-mac-3.1.0.501.zip',
            size: '942.9M',
            downloadLink: 'https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/a3/v3/8W9LiYb8RkqhmvclsZlaTA/devecostudio-mac-3.1.0.501.zip?HW-CC-KV=V1&HW-CC-Date=20230621T074204Z&HW-CC-Expire=315360000&HW-CC-Sign=C41DAC65883B9E09594C31B333704D2ABA325E000648BED86496288182E4A565',
            sha256Checksum: '1a380b8b4a172b0f00af476b3bdcd83ee2dab24937c00b72d20d9121db99f5b7',
        },
        {
            platform: 'Mac(ARM)',
            devEcoStudioPackage: 'devecostudio-mac-arm-3.1.0.501.zip',
            size: '934.8M',
            downloadLink: 'https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_package_901_9/b7/v3/ONY_R_ihQ6-6k8Fnu8Kl2Q/devecostudio-mac-arm-3.1.0.501.zip?HW-CC-KV=V1&HW-CC-Date=20230621T074841Z&HW-CC-Expire=315360000&HW-CC-Sign=FE223D9B6AB5C722096FF8C7BA574555E63638374A3D3543C72D7D9E869AB934',
            sha256Checksum: 'f3e77ba60e596c9e49cd5fc3ab67f3f944efd235f2fa7b298b501abcfc668f04',
        },
    ];

    const columns = [
        {
            title: 'Platform',
            dataIndex: 'platform',
            key: 'platform',
            render: (text) => text.toLowerCase().indexOf('mac') !== -1 ? <Space><AppleFilled/>{text}</Space> : <Space><WindowsFilled/>{text}</Space>,
        },
        {
            title: 'DevEco Studio Package',
            dataIndex: 'devEcoStudioPackage',
            key: 'devEcoStudioPackage',
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: '下载',
            dataIndex: 'downloadLink',
            key: 'downloadLink',
            render: (text) =><Button type="primary"> <a href={text}>下载</a></Button>,
        },
        {
            title: 'SHA-256 Checksum',
            dataIndex: 'sha256Checksum',
            key: 'sha256Checksum',
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

