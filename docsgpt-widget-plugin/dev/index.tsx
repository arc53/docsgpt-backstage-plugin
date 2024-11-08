import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { docsgptWidgetPluginPlugin, DocsgptWidgetPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(docsgptWidgetPluginPlugin)
  .addPage({
    element: <DocsgptWidgetPluginPage />,
    title: 'Root Page',
    path: '/docsgpt-widget-plugin',
  })
  .render();
