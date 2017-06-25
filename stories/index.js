import React, { Component, cloneElement } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { Button } from 'reactstrap';
import SchemaVis from 'react-jsonschema-vis';

import inputFields from '../src';

const rootReducers = combineReducers({ form: formReducer });
const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class TestForm extends Component {
  handleSubmit = values => {
    this.props.handleSubmit(values);
  };
  render() {
    const { children } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {React.Children.map(children, child => cloneElement(child))}
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

addDecorator(getStory => (
  <Provider store={store}>
    {getStory()}
  </Provider>
));

storiesOf(
  'Reactstrap Redux-Form Jsonschema Vis',
  module
).add('simple form', () => {
  const schema = {
    type: 'object',
    properties: {
      fullName: {
        id: 'FullName',
        title: 'Full Name',
        type: 'string',
        meta: {
          vis: {
            ordinal: 100,
            editable: true,
            component: 'InputField'
          }
        }
      },
      email: {
        id: 'Email',
        title: 'Email',
        type: 'string',
        format: 'email',
        meta: {
          vis: {
            ordinal: 110,
            editable: true,
            component: 'EmailInputField'
          }
        }
      },
      password: {
        id: 'Password',
        title: 'Password',
        type: 'string',
        meta: {
          vis: {
            ordinal: 120,
            editable: true,
            component: 'PasswordInputField'
          }
        }
      },
      dob: {
        id: 'DOB',
        title: 'DOB',
        type: 'string',
        format: 'date',
        meta: {
          vis: {
            ordinal: 130,
            editable: true,
            component: 'DateInputField'
          }
        }
      },
      numChildren: {
        id: 'Children',
        title: '# of Children',
        type: 'integer',
        min: 0,
        meta: {
          vis: {
            ordinal: 140,
            editable: true,
            component: 'NumberInputField'
          }
        }
      },
      favColor: {
        id: 'FavColor',
        title: 'Favorite Color',
        type: 'string',
        meta: {
          vis: {
            ordinal: 150,
            editable: true,
            component: 'ColorInputField'
          }
        }
      },
      gender: {
        id: 'Gender',
        title: 'Gender',
        type: 'string',
        oneOf: [
          { const: 'Male' },
          { const: 'Female' },
          { const: 'Non-binary/ third gender' },
          { const: 'Prefer not to say' }
        ],
        meta: {
          vis: {
            ordinal: 160,
            editable: true,
            component: 'SelectInputField'
          }
        }
      },
      comments: {
        id: 'Comments',
        title: 'Comments',
        type: 'string',
        meta: {
          vis: {
            ordinal: 180,
            editable: true,
            component: 'TextAreaInputField'
          }
        }
      }
    }
  };

  const ReduxTestForm = reduxForm({ form: 'test' })(TestForm);

  return (
    <ReduxTestForm onSubmit={data => action('form submit')(data)}>
      <SchemaVis
        className="container"
        schema={schema}
        components={inputFields}
      />
    </ReduxTestForm>
  );
});
