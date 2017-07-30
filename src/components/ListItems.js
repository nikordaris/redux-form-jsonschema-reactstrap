import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';
import { get } from 'lodash';

import { templateStrings } from '../utils';

const SCHEMA_TEMPLATE = 'template';

export class ListItemTemplate extends Component {
  props: {
    idx: number | string,
    data: any,
    schemaVis: any
  };

  getItemMetaTemplate() {
    const { schemaVis: { prefix, schema } } = this.props;
    return get(get(schema, prefix, schema), SCHEMA_TEMPLATE);
  }

  render() {
    const { data } = this.props;
    return (
      <ListGroupItem>
        {templateStrings(this.getItemMetaTemplate(), data)}
      </ListGroupItem>
    );
  }
}
