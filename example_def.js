exports.MAPPED_TYPES = {
  customer: [ 'Customer' ]
}
exports.ADDITIONAL_FIELDS = {
  customer: {
    relationships: {
      companyCurrency: {
        ref: 'CURRENCY_REF'
      }
    },
    priority: 3000,
    privileges: [ "read" ],
    fields: {
      BILL_ADDR_ID: {
        type: 'number',
        label: 'Bill Addr ID',
        path: 'BillAddr/ID'
      },
      BILL_ADDR_LINE1: {
        type: 'text',
        label: 'Bill Addr Line 1',
        path: 'BillAddr/Line1'
      },
      BILL_ADDR_CITY: {
        type: 'text',
        label: 'Bill Addr City',
        path: 'BillAddr/City'
      },
      COUNTRY_SUBDIVISION_CODE_BILL_ADDR: {
        type: 'number',
        label: 'Country Subdivision Code Bill Addr',
        path: 'CountrySubdivisionCode/BillAddr'
      },
      BILL_ADDR_LAT: {
        type: 'number',
        label: 'Bill Addr Latitude',
        path: 'BillAddr/LAT'
      },
      BILL_ADDR_LONG: {
        type: 'number',
        label: 'Bill Addr Longitude',
        path: 'BillAddr/Long'
      },
      SHIP_ADDR_ID: {
        type: 'number',
        label: 'ID',
        path: 'ShipAddr/ID'
      },
      LINE1: {
        type: 'text',
        label: 'Line 1',
        path: 'Line1/ShipAddr'
      },
      SHIP_ADDR_CITY: {
        type: 'text',
        label: 'Ship Addr City',
        path: 'City/ShipAddr'
      },
      COUNTRY_SUBDIVISION_CODE: {
        type: 'number',
        label: 'Country_Subdivision_Code',
        path: 'CountrySubdivisionCode/ShipAddr'
      },
      SHIP_ADDR_LAT: {
        type: 'number',
        label: 'Ship Addr Latitude',
        path: 'LAT/ShipAddr'
      },
      SHIP_ADDR_LONG: {
        type: 'number',
        label: 'Ship Addr Longitude',
        path: 'Long/ShipAddr'
      },
      SHIP_ADDR_ID: {
        type: 'number',
        label: 'Ship Addr ID',
        path: 'ID/ShipAddr'
      },
      TAXABLE: {
        type: 'boolean',
        label: 'Taxable',
        path: 'Taxable'
      },
      JOB: {
        type: 'boolean',
        label: 'Job',
        path: 'Job'
      },
      BILL_WITH_PARENT: {
        type: 'boolean',
        label: 'Bill With Parent',
        path: 'BillWithParent'
      },
      BALANCE: {
        type: 'number',
        label: 'Balance',
        path: 'Balance'
      },
      BALANCE_WITH_JOBS: {
        type: 'number',
        label: 'Balance With Jobs',
        path: 'BalanceWithJobs'
      },
      DOMAIN: {
        type: 'text',
        label: 'Domain',
        path: 'Domain'
      },
      SPARSE: {
        type: 'boolean',
        label: 'Sparse',
        path: 'Sparse'
      },
      ID: {
        type: 'number',
        label: 'ID',
        path: 'ID'
      },
      SYNC_TOKEN: {
        type: 'number',
        label: 'Sync Token',
        path: 'SyncToken'
      },
      CREATED_TIME: {
        type: 'datetime',
        label: 'Created Time',
        path: 'MetaData/CreatedTime',
        translate: {
          date: {
            format: "YYYY-MM-DDTHH:mm:ssZ"
          }
        }
      },
      DEFINITION_ID: {
        type: 'Text',
        label: 'Definition ID',
        path: 'DefinitionId/CustomField'
      },
      GIVEN_NAME: {
        type: 'Text',
        label: 'Given Name',
        path: 'GivenName'
      },
      FAMILY_NAME: {
        type: 'Text',
        label: 'Family Name',
        path: 'FamilyName'
      },
      FULLY_QUALIFIED_NAME: {
        type: 'Text',
        label: 'Fully Qualified Name',
        path: 'FullyQualifiedName'
      },
      COMAPANY_NAME: {
        type: 'Text',
        label: 'Company Name',
        path: 'CompanyName'
      },
      DISPLAY_NAME: {
        type: 'Text',
        label: 'Display Name',
        path: 'DisplayName'
      },
      PRINT_ON_CHECK_NAME: {
        type: 'Text',
        label: 'Print On Check Name',
        path: 'PrintOnCheck_Name'
      },
      ACTIVE: {
        type: 'boolean',
        label: 'Active',
        path: 'Active'
      },
      FREE_FORM_NUMBER: {
        type: 'number',
        label: 'Free Form Number',
        path: 'FreeFormNumber/PrimaryPhone'
      },
      ADDRESS: {
        type: 'text',
        label: 'Address',
        path: 'Address/PrimaryEmailAddr'
      },
      ACTIVE: {
        type: 'boolean',
        label: 'Active',
        path: 'Active'
      },
      CURRENCY_REF_VALUE: {
        type: 'Text',
        label: 'Currency Ref Value',
        path: 'CurrencyRef/Value'
      },
      CURRENCY_REF_NAME: {
        type: 'Text',
        label: 'Currency Ref Value',
        path: 'CurrencyRef/Name'
      },
      COMPANY_CURRENCY_VALUE: {
        type: 'Text',
        label: 'Company Currency Value',
        path: 'ComapanyCurrency/value'
      }
    }
  }
}