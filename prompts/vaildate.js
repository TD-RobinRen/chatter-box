const Ajv = require('ajv');
const Schema = require('./schema/index.json');
const ComponentSchema = require('./schema/components_schema.json');
const data = require('./data.json');

const ajv = new Ajv();
ajv.addSchema(ComponentSchema);

const valid = ajv.validate(Schema, data);
console.log('🚀 ~ file: vaildate.js:8 ~ valid:', valid);
if (!valid) {
  console.log(ajv.errors);
}
