import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Abpwordpress',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44339/',
    redirectUri: baseUrl,
    clientId: 'Abpwordpress_App',
    responseType: 'code',
    scope: 'offline_access Abpwordpress',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44339',
      rootNamespace: 'Abpwordpress',
    },
  },
} as Environment;
