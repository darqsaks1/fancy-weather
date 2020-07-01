import React from 'react';
import Preloader from '../js/control-block/Preloader'
import TestRenderer from 'react-test-renderer';

test('Preloader changed dom tree', () => {
  const component = TestRenderer.create(
    <Preloader />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
