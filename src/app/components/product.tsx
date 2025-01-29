/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import React, { useEffect, useState } from 'react';
import { Table, Image, Space, Grid } from 'antd';
import axios from 'axios';

const { useBreakpoint } = Grid;

const Product = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const screens = useBreakpoint();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching the data", error);
            })
            .finally(() => {
                setLoading(false); // Stop loading
            });
    }, []);

    const columns = [
        {
            title: 'Product',
            dataIndex: 'title',
            key: 'title',
            render: (text: string, record: any) => (
                <Space style={{ gap: screens.xs ? '8px' : '16px' }}>
                    <Image
                        width={screens.xs ? 50 : screens.sm ? 60 : screens.md ? 80 : 100}
                        height={screens.xs ? 50 : screens.sm ? 60 : screens.md ? 80 : 100}
                        src={record.image}
                        alt={text}
                    />
                    <div>
                        <span>{text}</span>
                        <p style={{ color: 'GrayText' }}>ui8.net/product/product-link</p>
                    </div>
                </Space>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text: string) => `$${text}`,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: () => new Date().toLocaleDateString(),
        },
    ];

    return (
        <Table
            style={{ marginTop: '10px' }}
            columns={columns}
            dataSource={data}
            rowKey="id"
            pagination={{ pageSize: 5 }}
            loading={loading}
            bordered
            scroll={{ x: 'max-content' }} // Makes sure the table scrolls horizontally on small screens
        />
    );
};

export default Product;
