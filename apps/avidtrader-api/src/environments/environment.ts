/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license
 * that can be found at http://neekware.com/license/MIT.html
 */

import { SecurityConfig } from '@fullerstack/nsx-auth';
import { I18nConfig } from '@fullerstack/nsx-i18n';
import { MailerConfig } from '@fullerstack/nsx-mailer';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { NestApplicationOptions } from '@nestjs/common';
import { ConfigModuleOptions } from '@nestjs/config';

const serverConfig: NestApplicationOptions = {
  logger: ['error', 'warn', 'log', 'debug', 'verbose'],
};

const appConfig: ConfigModuleOptions = {
  isGlobal: true,
};

const securityConfig: SecurityConfig = {
  accessTokenExpiry: '30s',
  sessionTokenExpiry: '24h',
  bcryptSaltOrRound: 2,
};

const graphqlConfig: ApolloDriverConfig = {
  debug: true,
  playground: true,
  sortSchema: true,
  installSubscriptionHandlers: true,
  autoSchemaFile: 'apps/avidtrader-api/src/prisma/schema.gql',
  buildSchemaOptions: {
    numberScalarMode: 'integer',
  },
  cors: {
    credentials: true,
    origin: 'http://localhost:4200',
  },
  driver: ApolloDriver,
};

const mailerConfig: MailerConfig = {
  providerName: 'postmark',
  host: 'smtp.postmarkapp.com',
  secureConnection: false, // true for 465, false for other ports
  port: 587,
};

const i18nConfig: I18nConfig = {
  defaultLocale: 'en',
  availableLocales: ['de', 'en', 'es', 'fa', 'fr', 'he', 'zh-hans'],
  enabledLocales: ['de', 'en', 'es', 'fa', 'fr', 'he', 'zh-hans'],
  translationDirectory: 'assets/i18n/',
};

export const environment = {
  siteName: 'Avidtrader',
  siteUrl: 'http://localhost:4200',
  siteSupportEmail: 'support@avidtrader-client.co',
  production: false,
  port: 4201,
  prefix: 'avidtrader-api',
  serverConfig,
  appConfig,
  graphqlConfig,
  securityConfig,
  mailerConfig,
  i18nConfig,
} as const;
