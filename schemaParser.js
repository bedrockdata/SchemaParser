const defs = require('./defs');
const Agent = require('./agent');
const rp = require('request-promise');
const Cursor = require('./cursor');
const utils = require('./utils');


function parseSchema(fieldNamePrefix, pathPrefix, jsonData) {

  const schema = defs.ADDITIONAL_FIELDS;

  var field, fieldData, fieldName, iStr, path, results, strings, type;
  results = [];
  for (field in jsonData) {
    fieldData = jsonData[field];
    fieldName = fieldNamePrefix + field.toUpperCase();
    path = pathPrefix + field;
    type = fieldData === null ? 'string' : typeof fieldData;
    if (type !== 'object' || fieldData === null) {
      if (type === 'string') {
        type = 'text';
      }
      strings = fieldName.toLowerCase().split('_');
      iStr = 0;
      while (iStr < strings.length) {
        strings[iStr] = strings[iStr].charAt(0).toUpperCase() + strings[iStr].slice(1);
        ++iStr;
      }
      // console.log('FIELD', fieldData);
      // console.log('FIELD DATA', jsonData[field]);
      // console.log('schemmmaa', schema.customer.fields)

      results.push(schema.vendor.fields[fieldName] = {

        fieldName: utils.schemaFieldName(fieldName),

        type: type,
        label: strings.join(' '),
        path: path
      });
    } else {
      results.push(parseSchema(fieldName + '_', path + '/', fieldData));
    }
  }
  console.log(results)
  return results;
};


const data = {

  // fill in with data that you wish the parse then run in node
  "TxnDate": "2017-12-19",
  "NameOf": "Employee",
  "EmployeeRef": {
    "value": "55",
    "name": "Emily Platt"
  },
  "CustomerRef": {
    "value": "21",
    "name": "Rondonuwu Fruit and Vegi"
  },
  "ItemRef": {
    "value": "8",
    "name": "Lighting"
  }
}




parseSchema('', '', data);