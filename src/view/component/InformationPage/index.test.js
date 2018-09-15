import React from 'react';
import ReactDOM from 'react-dom';
import InformationPage from './index';
import renderer from 'react-test-renderer';


describe('Information Page component', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InformationPage></InformationPage>, div); 
    ReactDOM.unmountComponentAtNode(div); 
  });

  test('has a valid snapshot', () => { 
    const component = renderer.create( <InformationPage />); 
    let tree = component.toJSON(); expect(tree).toMatchSnapshot(); 
  });

})
