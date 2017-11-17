import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import Button from 'terra-button';
import ReadMe from 'terra-status-view/docs/README.md';
import { version } from 'terra-status-view/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import StatusViewSrc from '!raw-loader!terra-status-view/src/StatusView';

// Example Files
import StatusViewDefault from './StatusViewDefault';

const StatusExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={StatusViewSrc} />
    <h2 id="default">StatusViewDefault</h2>
    <StatusViewDefault />
  </div>
);

export default StatusExamples;
