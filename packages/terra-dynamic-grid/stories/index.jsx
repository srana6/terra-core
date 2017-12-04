// /* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import DynamicGrid from '../src/DynamicGrid';
// // eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
// import ReadMe from '!raw-loader!../docs/README.md';
//
// const Card = props => (<div
//   style={{
//     backgroundColor: 'rgba(0,0,100,.2)',
//     border: '1px solid rgba(0,0,100,.5)',
//     textAlign: 'center',
//     padding: '20px',
//     borderRadius: '5px',
//     height: '100%',
//     wordWrap: 'break-word',
//     verticalAlign: 'middle',
//   }} {...props}
// />);
//
// const template = {
//   'grid-template-columns': '100px 100px',
//   'grid-template-rows': '100px',
//   'grid-gap': '10px',
// };
//
// const region1 = {
//   'grid-column-start': 1,
//   'grid-row-start': 1,
// };
//
// const region2 = {
//   'grid-column-start': 2,
//   'grid-row-start': 1,
// };
//
// storiesOf('Dynamic Grid', module)
// .addDecorator((story, context) => withInfo(ReadMe)(story)(context))
// .add('One Column', () => (
//   <DynamicGrid defaultTemplate={template}>
//     <DynamicGrid.Region defaultPosition={region1}>
//       <Card>Region 1</Card>
//     </DynamicGrid.Region>
//   </DynamicGrid>
// ))
// .add('Two Column', () => (
//   <DynamicGrid defaultTemplate={template}>
//     <DynamicGrid.Region defaultPosition={region1}>
//       <Card>Region 1</Card>
//     </DynamicGrid.Region>
//     <DynamicGrid.Region defaultPosition={region2}>
//       <Card>Region 2</Card>
//     </DynamicGrid.Region>
//   </DynamicGrid>
// ))
// .add('U Layout', () => (
//   <DynamicGrid defaultTemplate={template}>
//     <DynamicGrid.Region defaultPosition={region1}>
//       <Card>Region 1</Card>
//     </DynamicGrid.Region>
//     <DynamicGrid.Region defaultPosition={region2}>
//       <Card>Region 2</Card>
//     </DynamicGrid.Region>
//     <DynamicGrid.Region defaultPosition={region3}>
//       <Card>Region 3</Card>
//     </DynamicGrid.Region>
//   </DynamicGrid>
// ))
// .add('Dashboard Layout', () => (
//   <DynamicGrid defaultTemplate={template}>
//     <DynamicGrid.Region defaultPosition={leftGutter}>
//       <Card>left gutter</Card>
//     </DynamicGrid.Region>
//     <DynamicGrid.Region defaultPosition={notification}>
//       <Card>notification</Card>
//     </DynamicGrid.Region>
//     <DynamicGrid.Region defaultPosition={rightGutter}>
//       <Card>right gutter</Card>
//     </DynamicGrid.Region>
//     <DynamicGrid.Region defaultPosition={region1}>
//       <Card>r1</Card>
//     </DynamicGrid.Region>
//     <DynamicGrid.Region defaultPosition={region2}>
//       <Card>r2</Card>
//     </DynamicGrid.Region>
//     <DynamicGrid.Region defaultPosition={region3}>
//       <Card>r3</Card>
//     </DynamicGrid.Region>
//   </DynamicGrid>
// ))
// .add('Responsive Grid', () => (
//   <DynamicGrid defaultTemplate={template}>
//     <DynamicGrid.Region {...region1}>
//       <Card>1</Card>
//     </DynamicGrid.Region>
//     <DynamicGrid.Region {...region2}>
//       <Card>2</Card>
//     </DynamicGrid.Region>
//     <DynamicGrid.Region {...region3}>
//       <Card>3</Card>
//     </DynamicGrid.Region>
//     <DynamicGrid.Region {...region4}>
//       <Card>4</Card>
//     </DynamicGrid.Region>
//     <DynamicGrid.Region {...region5}>
//       <Card>5</Card>
//     </DynamicGrid.Region>
//   </DynamicGrid>
// ));
//
// // storiesOf('Badge/Additional Test Cases', module)
// // .add('Long Text', () => (
// //   <div>
// //     <Badge text="A badge with a long string of text within it" />
// //     {' '}
// //     <Badge icon={mockIcon} text="A badge with a long string of text within it" />
// //     {' '}
// //     <Badge icon={mockIcon} isReversed text="A badge with a long string of text within it" />
// //   </div>
// // ));
