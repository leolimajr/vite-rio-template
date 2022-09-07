/* eslint-disable no-undef */
import * as Sentry from '@sentry/browser';
import { config } from '../../config';

if (import.meta.env.PROD) {
    // version and environment are defined in the webpack.define plugin
    const release = config.serviceVersion;
    const environment = config.serviceEnvironment;

    // should have been called before using it here
    // ideally before even rendering your react app
    Sentry.init({
        dsn: config.sentryToken,
        environment,
        release,
    });
}

export const reportErrorToSentry = (...args: [any, any?]) => {
    Sentry.captureException(...args);
};
