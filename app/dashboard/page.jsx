"use client"
import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    name: 'John Doe',
    age: 30,
    address: '123 Main St',
  },
  {
    key: '2',
    name: 'Jane Smith',
    age: 28,
    address: '456 Elm St',
  },
  // Add more data rows as needed
];

const columns = [
  {
    title: 'Name-dash',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const AntdTableExample = () => {
  return (
    <Table dataSource={dataSource} columns={columns} />
  );
};

export default AntdTableExample;

