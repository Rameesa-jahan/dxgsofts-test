import { Divider, Flex, Space } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const SocialInfo = () => {
    return (
        <Space style={{ width: '100%' }} direction='vertical'>
            <Title style={{ margin: '10px 0px 0px 0px' }} level={5}>
                fahey.designer@roboto.co</Title>
            <Divider style={{ margin: '16px 0px' }} />
            <Flex align='center' gap={16}>
                <TwitterOutlined size={18} />
                <InstagramOutlined size={18} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-.34 14.11c-.08.19-.18.34-.31.44a1.34 1.34 0 0 1-1.2.2c-.3-.14-.46-.44-.37-.76.08-.27.21-.52.29-.78.28-.97.75-1.58 1.57-2.12a4.45 4.45 0 0 0 1.18-1.43c.17-.29.3-.62.43-.95.12-.31.17-.65.17-1.02a2.76 2.76 0 0 0-.9-2.08c-.35-.36-.78-.55-1.28-.55-.84 0-1.47.56-1.85 1.46-.3.68-.26 1.4.14 1.98.41.58 1.15.73 1.78.48.07-.03.1-.1.13-.17-.02.01-.04.02-.06.03-.06.06-.13.13-.19.21-.24.24-.43.51-.58.8-.34.54-.53 1.13-.56 1.78-.02.45-.05.89-.07 1.33zm-1.88 2.53c-.43.34-.99.53-1.58.53a2.63 2.63 0 0 1-2.59-2.69 2.61 2.61 0 0 1 2.74-2.56 2.59 2.59 0 0 1 2.45 3.03c-.04.33-.13.66-.26.96z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M22.67 12.31c0-5.81-4.73-10.54-10.54-10.54-5.8 0-10.53 4.73-10.53 10.54 0 5.61 4.32 10.23 9.96 10.53v-7.47h-3.03v-3.06h3.03v-2.26c0-3.01 1.79-4.7 4.56-4.7 1.32 0 2.71.24 2.71.24v2.95h-1.83c-1.8 0-2.37 1.12-2.37 2.24v2.7h3.06l-.49 3.06h-2.57v7.47c5.64-.3 9.96-4.93 9.96-10.53z" />
                </svg>
            </Flex>
            <Divider style={{ margin: '16px 0px' }} />
            <h1> roboto.co</h1>
        </Space>
    )
}

export default SocialInfo