'use client';
import React from 'react';
import { Avatar, Grid, Row, Typography, Space, Flex, Button } from 'antd';
import TextEditor from './texteditor';
import { PlusOutlined, MessageOutlined } from '@ant-design/icons';


const { useBreakpoint } = Grid;
const { Title, Paragraph } = Typography;

const Profile = () => {
    const screens = useBreakpoint();

    const getAvatarSize = () => {
        if (screens.xs) return 60;
        if (screens.sm) return 80;
        if (screens.md) return 100;
        if (screens.lg) return 120;
        return 150;
    };

    return (
        <Space direction='vertical' style={{ width: '100%' }}>
            <Row align="middle" justify="space-between" style={{ width: '100%' }}>
                <Flex align='center' gap={screens.xs || screens.sm ? 12 : 20}>
                    <Avatar src={'/dp.jpg'} size={getAvatarSize()} />
                    <Space direction="vertical" size={screens.xs || screens.sm ? 4 : 8}>
                        <Title level={screens.xs ? 5 : 4} style={{ margin: 0, fontSize: screens.xs ? '14px' : '18px' }}>
                            Chelsie Haley
                        </Title>
                        <Paragraph style={{ margin: 0, color: '#888', fontSize: screens.xs ? '12px' : '14px' }}>
                            @chelsiehaley
                        </Paragraph>
                    </Space>
                </Flex>
                <Flex gap={screens.xs || screens.sm ? 8 : 16}>
                    <Button>
                        Follow <PlusOutlined />
                    </Button>
                    <Button>
                        Message <MessageOutlined />
                    </Button>
                </Flex>
            </Row>
            <h1 style={{ fontWeight: 'bold' }}> Private note</h1>

            <TextEditor />
        </Space>
    );
};

export default Profile;
