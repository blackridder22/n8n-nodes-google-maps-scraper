import { INodeProperties } from 'n8n-workflow';

export const scrapeOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,

        displayOptions: {
            show: {
                resource: ['scrape'],
            },
        },
        options: [
            {
                name: 'Scrape',
                value: 'scrape',
                description: 'Perform a scrape',
                action: 'Perform a scrape',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/scrape',
                    },
                },
            },
            {
                name: 'Scrape GET',
                value: 'scrapeGet',
                description: 'Perform a scrape using GET',
                action: 'Perform a scrape using get',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/scrape-get',
                    },
                },
            },
        ],
        default: 'scrape',
    },
];

const scrapeFields: INodeProperties[] = [
    {
        displayName: 'Query',
        name: 'query',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                resource: ['scrape'],
                operation: ['scrape', 'scrapeGet'],
            },
        },
        routing: {
            send: {
                type: 'query',
                property: 'query',
            },
        },
    },
    {
        displayName: 'Max Places',
        name: 'max_places',
        type: 'number',
        default: 10,
        displayOptions: {
            show: {
                resource: ['scrape'],
                operation: ['scrape', 'scrapeGet'],
            },
        },
        routing: {
            send: {
                type: 'query',
                property: 'max_places',
            },
        },
    },
    {
        displayName: 'Language',
        name: 'lang',
        type: 'string',
        default: 'en',
        displayOptions: {
            show: {
                resource: ['scrape'],
                operation: ['scrape', 'scrapeGet'],
            },
        },
        routing: {
            send: {
                type: 'query',
                property: 'lang',
            },
        },
    },
    {
        displayName: 'Headless',
        name: 'headless',
        type: 'boolean',
        default: true,
        displayOptions: {
            show: {
                resource: ['scrape'],
                operation: ['scrape', 'scrapeGet'],
            },
        },
        routing: {
            send: {
                type: 'query',
                property: 'headless',
            },
        },
    },
];

export { scrapeFields };
