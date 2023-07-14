import axios from 'axios';
import * as  prismic from '@prismicio/client';

export const repositoryName = 'anastore'
export const api = axios.create({
    baseURL: 'https://anastore.cdn.prismic.io/api/v2/',
    setTimeout: 10000,
    headers: { 'content-type': 'application/json' }
});

export const client = prismic.createClient(repositoryName, {

    accessToken: 'MC5aTEdHWkJFQUFCOEFhX0sz.77-9Lnjvv73vv73vv71777-977-977-977-977-9Pe-_ve-_vTNnZQHvv71377-977-977-977-977-977-977-977-977-977-9Hw',
    routes: [
        {
            type: 'homepage',
            path: '/',
        },
    ],
})