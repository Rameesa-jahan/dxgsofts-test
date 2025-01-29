import { Divider, Flex, Space } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'

const SocialInfo = () => {
    return (
        <Space style={{ width: '100%' }} direction='vertical'>
            <Title style={{ margin: '10px 0px 0px 0px' }} level={5}>
                fahey.designer@roboto.co</Title>
            <Divider style={{ margin: '16px 0px' }} />
            <Flex align='center' gap={16}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M17 2.5h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM12 7.2a4.8 4.8 0 1 0 4.8 4.8A4.8 4.8 0 0 0 12 7.2zm0 6.6a1.8 1.8 0 1 1 1.8-1.8A1.8 1.8 0 0 1 12 13.8z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M12 2.25c5.396 0 9.75 4.354 9.75 9.75s-4.354 9.75-9.75 9.75c-5.396 0-9.75-4.354-9.75-9.75s4.354-9.75 9.75-9.75zM10.68 9.49c-.88 1.56-2.07 4.21-.38 6.48 1.33 1.57 2.65.34 3.15-1.05 1.18-2.74-.91-5.7-2.94-4.88-2.5.92-.65 2.96-1.02 4.5-1.15 4.26-5.01 3.9-6.01 1.18-2.5-3.2-.85-4.5.25-7.1 2.67-.85 3.32 1.75 4.73 2.58 4.78 2.58 0 4.46-1.45 3.43-4.14-.56-1.82-.35-3.45.32-5.09 1.1-1.6 3.88-2.43 5.58-.28z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M22.67 12.31c0-5.81-4.73-10.54-10.54-10.54-5.8 0-10.53 4.73-10.53 10.54 0 5.61 4.32 10.23 9.96 10.53v-7.47h-3.03v-3.06h3.03v-2.26c0-3.01 1.79-4.7 4.56-4.7 1.32 0 2.71.24 2.71.24v2.95h-1.83c-1.8 0-2.37 1.12-2.37 2.24v2.7h3.06l-.49 3.06h-2.57v7.47c5.64-.3 9.96-4.93 9.96-10.53z" />
                </svg>
            </Flex>
            <Divider style={{ margin: '16px 0px' }} />
            <h1> roboto.co</h1>
        </Space>
    )
}

export default SocialInfo