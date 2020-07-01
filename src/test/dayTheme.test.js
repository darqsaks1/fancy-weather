

      import React from 'react';
import ThreeDays from '../js/main-block/current/daily-weather';
import TestRenderer from 'react-test-renderer';

    test('Preqqqqwww', () => {
        const component = TestRenderer.create(
          <ThreeDays 
          lang={ 'ru'}
            />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        tree.props.getWeekDaysNameFull();
        
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      })