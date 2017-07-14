// export const variedArraySchema = {};

export const uniformedArraySchmea = {
  id: 'UniformedArray',
  title: 'Uniformed Array Components',
  type: 'object',
  properties: {
    childrenCard: {
      id: 'ChildrenArrayCard',
      title: 'Children with Card Container',
      type: 'array',
      items: {
        id: 'Child',
        title: 'Child',
        type: 'object',
        meta: {
          vis: {
            ordinal: 1,
            component: 'CardItem'
          }
        },
        properties: {
          name: {
            title: 'Name',
            it: 'Name',
            type: 'string',
            meta: {
              vis: {
                ordinal: 1,
                component: 'Text'
              }
            }
          },
          age: {
            id: 'Age',
            title: 'Age',
            type: 'number',
            meta: {
              vis: {
                ordinal: 2,
                component: 'Number'
              }
            }
          }
        }
      },
      meta: {
        vis: {
          ordinal: 180,
          component: 'UniformedArrayCard'
        }
      }
    },
    childrenInlineCard: {
      id: 'ChildrenArrayInlineCard',
      title: 'Children with inline Card Items',
      type: 'array',
      items: {
        id: 'Child',
        title: 'Child',
        type: 'object',
        meta: {
          vis: {
            ordinal: 1,
            component: 'CardItem'
          }
        },
        properties: {
          name: {
            title: 'Name',
            it: 'Name',
            type: 'string',
            meta: {
              vis: {
                ordinal: 1,
                component: 'Text'
              }
            }
          },
          age: {
            id: 'Age',
            title: 'Age',
            type: 'number',
            meta: {
              vis: {
                ordinal: 2,
                component: 'Number'
              }
            }
          }
        }
      },
      meta: {
        vis: {
          ordinal: 180,
          component: 'UniformedArrayInline'
        }
      }
    },
    childrenInline: {
      id: 'ChildrenArrayInline',
      title: 'Children with inline items',
      type: 'array',
      items: {
        id: 'Child',
        title: 'Child',
        type: 'object',
        properties: {
          name: {
            title: 'Name',
            it: 'Name',
            type: 'string',
            meta: {
              vis: {
                ordinal: 1,
                component: 'Text'
              }
            }
          },
          age: {
            id: 'Age',
            title: 'Age',
            type: 'number',
            meta: {
              vis: {
                ordinal: 2,
                component: 'Number'
              }
            }
          }
        }
      },
      meta: {
        vis: {
          ordinal: 180,
          component: 'UniformedArrayInline'
        }
      }
    }
  }
};
