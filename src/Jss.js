// @flow
/*
react-jss doesn't merge styles properly for overriding child components
this simple jss HOC will merge the styles but doesn't implement the other
advanced features of react-jss since they are not needed for this library
*/

import React, { Component } from 'react';
import { merge, isEqual } from 'lodash';
import { create } from 'jss';
import preset from 'jss-preset-default';

const jss = create();
jss.setup(preset());

export default jss;

export const injectSheet = (styles: { [string]: any }) => (
  WrappedComponent: string
) => {
  class StyledComponent extends Component {
    state = {
      sheet: undefined,
      classes: undefined
    };
    props: {
      sheet: any,
      styles: { [string]: any },
      classes: { [string]: any }
    };
    state: {
      sheet: any,
      classes: { [string]: any }
    };
    wrapped: any;

    componentWillReceiveProps(nextProps: any) {
      const { styles: componentStyles } = this.props;
      const { styles: nextComponentStyles } = nextProps;

      if (!isEqual(componentStyles, nextComponentStyles)) {
        this.updateSheets(merge({}, styles, nextComponentStyles), nextProps);
      } else if (this.state.sheet) {
        this.state.sheet.update(nextProps);
      }
    }

    componentWillMount() {
      const { styles: componentStyles } = this.props;
      this.updateSheets(merge({}, styles, componentStyles), this.props);
    }

    componentWillUnmount() {
      if (this.state.sheet) {
        this.state.sheet.detach();
      }
    }

    updateSheets(styles: any, props: any) {
      const sheet = jss.createStyleSheet(styles).attach();
      if (this.state.sheet) {
        this.state.sheet.detach();
      }

      sheet.update(props);
      this.setState({ sheet, classes: sheet.classes });
    }

    render() {
      const { styles: componentStyles } = this.props;
      const mergedStyles = merge({}, styles, componentStyles);
      return (
        <WrappedComponent
          {...this.props}
          styles={mergedStyles}
          classes={this.state.classes}
          sheet={this.state.sheet}
          ref={elm => {
            this.wrapped = elm;
          }}
        />
      );
    }
  }

  return StyledComponent;
};
