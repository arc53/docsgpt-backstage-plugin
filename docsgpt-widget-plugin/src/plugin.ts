import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const docsgptWidgetPluginPlugin = createPlugin({
  id: 'docsgpt-widget-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const DocsgptWidgetPluginPage = docsgptWidgetPluginPlugin.provide(
  createRoutableExtension({
    name: 'DocsgptWidgetPluginPage',
    component: () =>
      import('./components/DocgptWidget').then(m => m.DocgptWidget),
    mountPoint: rootRouteRef,
  }),
);
