exports.schemaFieldName = function (name) {
  // console.log('NAME', name);
  name = name.replace(/([a-z])([A-Z0-9])/g, '$1 $2');
  name = name.replace(/[-_\/]/g, ' ');
  return name.trim().replace(/\s+/g, '_').toUpperCase();
};