import templateString from 'es6-template-strings';

function _templateString(template, obj) {
  try {
    return templateString(template, obj);
  } catch (err) {
    console.debug(err);
    return null;
  }
}

export function templateStrings(templates, obj) {
  if (templates instanceof Array) {
    return templates.reduce((result, item) => {
      return result || _templateString(item, obj);
    }, null);
  }

  return _templateString(templates, obj);
}