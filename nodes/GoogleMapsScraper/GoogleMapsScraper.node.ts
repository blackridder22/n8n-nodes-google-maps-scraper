import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { scrapeFields, scrapeOperations } from './ScrapeDescription';

export class GoogleMapsScraper implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Google Maps Scraper',
        name: 'googleMapsScraper',
        icon: { light: 'file:googleMapsScraper.svg', dark: 'file:googleMapsScraper.svg' },
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with Google Maps Scraper API',
        defaults: {
            name: 'Google Maps Scraper',
        },
    inputs: ['main'],
    outputs: ['main'],
        credentials: [
            {
                name: 'googleMapsScraperApi',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL: '={{$credentials?.url}}',
            url: '',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Scrape',
                        value: 'scrape',
                    },
                ],
                default: 'scrape',
            },

            ...scrapeOperations,
            ...scrapeFields,
        ],
    };
}
