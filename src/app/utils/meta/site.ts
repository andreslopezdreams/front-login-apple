import { Metadata } from 'next';
import { enviroment } from '../contants/enviroment';
import { match } from 'ts-pattern';

export const metadataSite = (): Metadata =>
  match(enviroment.APP_PROJECT_NAME)
    .with('Kiboo', () => ({}))
    .otherwise(() => ({}));
