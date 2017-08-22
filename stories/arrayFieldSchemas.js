// export const variedArraySchema = {};

export const variedArraySchema = {
  id: 'VariedArray',
  title: 'Varied Array Components',
  type: 'object',
  properties: {
    fooCard: {
      id: 'FooArrayCard',
      title: 'Foo Card',
      type: 'array',
      items: {
        anyOf: [
          {
            id: 'Bar',
            title: 'Bar',
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
              bar: {
                id: 'Bar',
                title: 'Bar',
                type: 'string',
                meta: {
                  vis: {
                    ordinal: 2,
                    component: 'Text'
                  }
                }
              }
            }
          },
          {
            id: 'Baz',
            title: 'Baz',
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
              baz: {
                id: 'Baz',
                title: 'Baz',
                type: 'number',
                meta: {
                  vis: {
                    ordinal: 2,
                    component: 'Number'
                  }
                }
              }
            }
          }
        ]
      },
      meta: {
        vis: {
          ordinal: 180,
          component: 'VariedArrayCard'
        }
      }
    },
    fooInline: {
      id: 'FooArrayInline',
      title: 'Foo Inline',
      type: 'array',
      items: {
        anyOf: [
          {
            id: 'Bar',
            title: 'Bar',
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
              bar: {
                id: 'Bar',
                title: 'Bar',
                type: 'string',
                meta: {
                  vis: {
                    ordinal: 2,
                    component: 'Text'
                  }
                }
              }
            }
          },
          {
            id: 'Baz',
            title: 'Baz',
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
              baz: {
                id: 'Baz',
                title: 'Baz',
                type: 'number',
                meta: {
                  vis: {
                    ordinal: 2,
                    component: 'Number'
                  }
                }
              }
            }
          }
        ]
      },
      meta: {
        vis: {
          ordinal: 180,
          component: 'VariedArrayInline'
        }
      }
    },
    fooCardsModal: {
      id: 'FooArrayCardsModal',
      title: 'Modal Foo Cards',
      type: 'array',
      items: {
        id: 'FooCard',
        title: 'Foo Card',
        type: 'object',
        meta: {
          vis: {
            component: 'SingleSelect'
          }
        },
        anyOf: [{
          id: 'Bar',
          title: 'Bar',
          type: 'object',
          meta: {
            data: {
              template: '${name} (Bar: ${bar})',
              component: 'ListItemTemplate'
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
            bar: {
              id: 'Bar',
              title: 'Bar',
              type: 'string',
              meta: {
                vis: {
                  ordinal: 2,
                  component: 'Text'
                }
              }
            }
          }
        },
        {
          id: 'Baz',
          title: 'Baz',
          type: 'object',
          meta: {
            data: {
              template: '${name} (Baz: ${baz})',
              component: 'ListItemTemplate'
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
            baz: {
              id: 'Baz',
              title: 'Baz',
              type: 'number',
              meta: {
                vis: {
                  ordinal: 2,
                  component: 'Number'
                }
              }
            }
          }
        }]
      },
      meta: {
        vis: {
          ordinal: 180,
          component: 'ModalVariedArrayCard'
        }
      }
    }
  }
};

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
    },
    childrenModalCard: {
      id: 'ChildrenArrayModalCard',
      title: 'Children Modal Card',
      type: 'array',
      items: {
        id: 'Child',
        title: 'Child',
        type: 'object',
        meta: {
          data: {
            template: '${name} (${age})',
            component: 'ListItemTemplate'
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
          component: 'ModalUniformArrayCard'
        }
      }
    },
    childrenModalInline: {
      id: 'ChildrenArrayModalInline',
      title: 'Children Modal Inline',
      type: 'array',
      items: {
        id: 'Child',
        title: 'Child',
        type: 'object',
        meta: {
          data: {
            template: '${name} (${age})',
            component: 'ListItemTemplate'
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
          component: 'ModalUniformArrayInline'
        }
      }
    }
  }
};
