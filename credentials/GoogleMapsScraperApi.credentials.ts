import {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class GoogleMapsScraperApi implements ICredentialType {
    name = 'googleMapsScraperApi';
    displayName = 'Google Maps Scraper API';
    documentationUrl = 'https://github.com/conor-is-my-name/google-maps-scraper';
    properties: INodeProperties[] = [
        {
            displayName: 'URL',
            name: 'url',
            type: 'string',
            default: 'http://localhost:8001',
        },
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            default: '',
            typeOptions: {
                password: true,
            },
        },
    ];

    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                'X-API-KEY': '={{$credentials.apiKey}}',
            },
        },
    };

    test: ICredentialTestRequest = {
        request: {
            baseURL: '={{$credentials?.url}}',
            url: '/',
        },
    };
}
