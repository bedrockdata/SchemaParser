# SchemaParser

## Getting started


SchemaParser is away for to quickly build up a static schema for ANY CONNECTOR!! The example that we choose to use for SchemaParser was Quickbooks which is an accounting, invoice and payments system. Please look at the example def, which reflects a static schema with fields that are missing additional metadata.


### Installation:

npm install

#### Defs:

The schema reflects the def fields that need attention.

```
  const schema = defs.ADDITIONAL_FIELDS;
  ```
#### Parsing:

 In our example we use is an index request from Quickbooks (dataType = customer) in order to reflect how to properly form a dataType field.
  (i.e.)

```
  fields: {
    BILL_ADDR_ID: {
      type: 'number',
      label: 'Bill Addr ID',
      path: 'BillAddr/ID'
    },

  The function below function with mutate the data.

  for ( field in jsonData ) {
    fieldData = jsonData[ field ];
    fieldName = fieldNamePrefix + field.toUpperCase();
    path = pathPrefix + field;
    type = fieldData === null ? 'string' : typeof fieldData;
    if ( type !== 'object' || fieldData === null ) {
      if ( type === 'string' ) {
        type = 'text';
      }
      strings = fieldName.toLowerCase().split( '_' );
      iStr = 0;
      while ( iStr < strings.length ) {
        strings[ iStr ] = strings[ iStr ].charAt( 0 ).toUpperCase() + strings[ iStr ].slice( 1 );
        ++iStr;
      }

      ```
#### Results:

      Please use `results.push` in order to fill your desired file (i.e. example_def) which
      holds the ADDITIONAL_FIELDS (MetaData) below this is an example of the process.. using customer
      as the field we want to test in this example.

      ```
      results.push( schema.customer.fields = {

        fieldName: utils.schemaFieldName( fieldName ),

        type: type,
        label: strings.join( ' ' ),
        path: path
      } );
    }
    else {
      results.push( parseSchema( fieldName + '_', path + '/', fieldData ) );
    }
  }
```

  Be sure to `console.log( "RESULTS", results)` in order to see the output after you call node schemaParser.js in the terminal. 
