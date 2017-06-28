// @flow

import React, { Component } from 'react';
import { Card, CardBlock, CardHeader } from 'reactstrap';
import { injectSheet } from './Jss';

class CardWithHeader extends Component {
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

export default injectSheet({
  card: { marginBottom: 10 },
  header: { padding: 5, paddingLeft: 10 }
})(CardWithHeader);
