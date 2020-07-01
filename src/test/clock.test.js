// import React from 'react';
// import DayTheme from '../js/control-block/dayTheme'
// import TestRenderer from 'react-test-renderer';

//     test('Prewww', () => {
//         const component = TestRenderer.create(
//           <DayTheme 
//           setDayThemeTrue = {true }
//           setDayThemeFalse= {false }
//             dayTheme = {true}
//             />,
//         );
//         let tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//         tree.props.onClick();
//         tree.props.onClick();
//         tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//       })

import Clock from '../js/main-block/time/time' 

import React from 'react';

import TestRenderer from 'react-test-renderer';

test('Cl', () => {
  const component = TestRenderer.create(
    <Clock />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

})