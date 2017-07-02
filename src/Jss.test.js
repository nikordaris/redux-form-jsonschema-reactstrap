import React, { Component } from 'react';
import { injectSheet } from './Jss';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

class Foo extends Component {
  render() {
    const { classes } = this.props;

    return <p className={classes.test}>test</p>;
  }
}

const StyledFoo = injectSheet({ test: { background: 'black' } })(Foo);

describe('Inject JSS', () => {
  it('should inject stylesheet', () => {
    const wrapper = renderer.create(<StyledFoo />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should update styles', () => {
    const wrapper = shallow(<StyledFoo />);
    wrapper.setProps({ styles: { test: { background: 'white' } } });
    expect(wrapper.getNode().props.styles.test.background).toEqual('white');
  });

  it('should update props', () => {
    const wrapper = shallow(
      <StyledFoo styles={{ test: { color: prop => prop.foo } }} />
    );
    wrapper.setProps({ foo: 'red' });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
