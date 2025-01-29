/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import React, { useEffect, useState } from 'react';
import { Table, Image, Space, Grid } from 'antd';
import axios from 'axios';


const { useBreakpoint } = Grid;

const Product = () => {
    const [data, setData] = useState([]);
    const screens = useBreakpoint();
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching the data", error);
            });
    }, []);


    const columns = [
        {
            title: 'Product',
            dataIndex: 'title',
            key: 'title',
            render: (text: string, record: any) => (
                <Space style={{ gap:screens.xs ?'8px' :'16px'}}>
                    <Image
                        width={screens.xs ? 50 : screens.sm ? 40 : screens.md ? 60 : 80}
                        height={screens.xs ? 50 : screens.sm ? 40 : screens.md ? 60 : 80}
                        src={record.image}
                        alt={text}
                    />
                    <div>
                        <span>{text}</span>
                        <p style={{ color: 'GrayText' }}> ui8.net/product/product-link</p>
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
                style={{marginTop:'10px'}}
                columns={columns}
                dataSource={data}
                rowKey="id"
                pagination={{ pageSize: 5 }}
            />
    );
};

export default Product;
