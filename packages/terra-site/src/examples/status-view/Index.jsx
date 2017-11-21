import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import StatusView from 'terra-status-view';
import Button from 'terra-button';
import ReadMe from 'terra-status-view/docs/README.md';
import { version } from 'terra-status-view/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import StatusViewSrc from '!raw-loader!terra-status-view/src/StatusView';

// Example Files
import StatusViewExample from './StatusViewExample';

const StatusExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={StatusViewSrc} />
    <h2 id="default">Status View:  All props given</h2>
    <StatusViewExample type="nodata" title="404" message="No data was returned">
      <Button text="OK" key="1" />
      <Button text="Cancel" key="2" />
    </StatusViewExample>
    <br/>
    <h2 id="blank">Status View:  Text Wrapping</h2>
    <div width="400px">
      <StatusViewExample
        type="error"
        title="A 500 error was thrown from the service.  Retry again later when new service is deployed at a later date in the future."
        message="A null pointer exception was thrown from the input parameters.  The params of min and max-value were not present.  They need to be present for verification purposes for keeping the database clean and consistent"
      >
        <Button text="OK, here is some really really long text to make the button take up a bunch of space." key="1" />
        <Button text="Cancel, here is some really really long text to make the button take up a bunch of space." key="2" />
      </StatusViewExample>
    </div>
    <br/>
    <h2 id="blank">Status View:  Glyph Hidden</h2>
    <StatusViewExample type="error" title="500" message="An exception was thrown" isGlyphHidden={true}>
      <Button text="OK" key="1" />
      <Button text="Cancel" key="2" />
    </StatusViewExample>
  </div>
);

export default StatusExamples;
