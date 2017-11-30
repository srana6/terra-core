import React from 'react';
import Button from '../../src/Button';

// Snapshot Tests
it('should render a neutral button', () => {
  const button = shallow(<Button />);
  expect(button).toMatchSnapshot();
});

it('should render a emphasis button', () => {
  const button = shallow(<Button variant="emphasis" />);
  expect(button).toMatchSnapshot();
});

it('should render a de-emphasis button', () => {
  const button = shallow(<Button variant="de-emphasis" />);
  expect(button).toMatchSnapshot();
});

it('should render a button with type equal to button', () => {
  const button = shallow(<Button type="button" />);
  expect(button).toMatchSnapshot();
});

it('should render a button with type equal to reset', () => {
  const button = shallow(<Button type="reset" />);
  expect(button).toMatchSnapshot();
});

it('should render a button with type equal to submit', () => {
  const button = shallow(<Button type="submit" />);
  expect(button).toMatchSnapshot();
});

it('should render an icon', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} size="tiny" />);
  expect(button).toMatchSnapshot();
});

it('should render an icon and a text', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} size="tiny" text="text" />);
  expect(button).toMatchSnapshot();
});

it('should render text then an icon when reversed', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} size="tiny" text="text" isReversed />);
  expect(button).toMatchSnapshot();
});

it('should render a Button with merged attributes', () => {
  const button = shallow(<Button className="TestClass" data-mock="data" style={{ height: '100px' }} />);
  expect(button).toMatchSnapshot();
});

it('should render as an anchor when provided an href', () => {
  const button = shallow(<Button text="href" href="MockHref" />);
  expect(button).toMatchSnapshot();
});

it('should render as disabled when set', () => {
  const button = shallow(<Button text="Disabled" isDisabled />);
  expect(button).toMatchSnapshot();
});

// Prop Tests
it('should have the class neutral', () => {
  const button = shallow(<Button />);
  expect(button.prop('className')).toContain('button neutral');
});

it('should have the class emphasis when variant is set to emphasis', () => {
  const button = shallow(<Button variant="emphasis" />);
  expect(button.prop('className')).toContain('emphasis');
});

it('should have the class tiny when size is set to tiny', () => {
  const button = shallow(<Button size="tiny" />);
  expect(button.prop('className')).toContain('tiny');
});

it('should have the class huge when size is set to huge', () => {
  const button = shallow(<Button size="huge" />);
  expect(button.prop('className')).toContain('huge');
});

it('should have the class block when block is enabled', () => {
  const button = shallow(<Button isBlock />);
  expect(button.prop('className')).toContain('block');
});

it('should have the class de-emphasis when an de-emphasis variant', () => {
  const button = shallow(<Button variant="de-emphasis" />);
  expect(button.prop('className')).toContain('de-emphasis');
});

it('should be disabled when set', () => {
  const button = shallow(<Button isDisabled />);
  expect(button.prop('disabled')).toEqual(true);
});

// Structure
it('should have the class text when a text is provided', () => {
  const button = shallow(<Button text="text" />);
  expect(button.childAt(0).hasClass('text')).toEqual(true);
});

it('should set the span text', () => {
  const button = shallow(<Button text="text" />);
  expect(button.find('.text').text()).toEqual('text');
});

it('should not append a text span without a text', () => {
  const button = shallow(<Button />);
  expect(button.find('.text').length).toEqual(0);
});

it('should render the icon as the first child', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} />);
  expect(button.childAt(0).is('img')).toEqual(true);
});

it('should render in order of text / icon when reverse', () => {
  const testElement = <img alt="icon" />;
  const button = shallow(<Button icon={testElement} isReversed text="text" />);
  expect(button.childAt(0).hasClass('text')).toEqual(true);
});

it('should render as an anchor tag when provided an href', () => {
  const button = shallow(<Button href="MockHref" />);
  expect(button.is('a')).toEqual(true);
});

// Attributes
it('should merge classes passed in with attributes', () => {
  const button = shallow(<Button className="TestClass" />);
  expect(button.prop('className')).toContain('TestClass');
});

it('should append data passed in with attributes', () => {
  const button = shallow(<Button data-terra-button-mock="MockData" />);
  expect(button.prop('data-terra-button-mock')).toContain('MockData');
});

it('should append styles passed in with attributes', () => {
  const button = shallow(<Button style={{ height: '100px' }} />);
  expect(button.prop('style')).toEqual({ height: '100px' });
});
