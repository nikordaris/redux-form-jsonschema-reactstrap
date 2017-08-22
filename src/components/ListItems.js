import React, { Component } from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import { get } from 'lodash';

import { templateStrings } from '../utils';
import { injectSheet } from '../Jss';

const SCHEMA_TEMPLATE = 'template';

@injectSheet({
  listItem: {
    display: 'inline-flex',
    width: '100%',
    borderTop: '1px solid #DDD'
  },
  removeItem: {
    float: 'right',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 10,
    marginLeft: 10,
    padding: [7, 12, 7, 12],
  },
  '@global': {
    '.list-group-item': {
      borderTop: 'none'
    }
  }
})
export class ListItemTemplate extends Component {
  props: {
    idx: number | string,
    data: any,
    schemaVis: any,
    removeBtnProps: { [string]: any, onClick: () => void },
    selectBtnProps: { [string]: any, onClick: () => void }
  };

  getItemMetaTemplate() {
    const { schemaVis: { prefix, schema } } = this.props;
    return get(get(schema, prefix, schema), SCHEMA_TEMPLATE);
  }

  render() {
    const { classes, data, removeBtnProps, selectBtnProps } = this.props;
    return (
      <div className={classes.listItem}>
        <ListGroupItem action {...selectBtnProps}>
          {templateStrings(this.getItemMetaTemplate(), data)}
        </ListGroupItem>
        <Button className={classes.removeItem} id="removeItemBtn" color="danger" size="sm" children="Remove" {...removeBtnProps} />
      </div>
    );
  }
}
