// @flow

import React, { Component } from 'react';
import { Card, CardBlock, CardHeader } from 'reactstrap';
import { injectSheet } from '../Jss';

@injectSheet({
  card: { marginBottom: 10, marginTop: 15 },
  header: { padding: 5, paddingLeft: 10 }
})
export class CardWithHeader extends Component {
  render() {
    const { classes, children, schema } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader className={classes.header}>{schema.title}</CardHeader>

        <CardBlock className={classes.cardblock}>
          {children}
        </CardBlock>
      </Card>
    );
  }
}
