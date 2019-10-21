function filterUndefined(data) {
  for (let i in data) {
    if (data[i] === undefined) {
      delete data[i];
    }
    if (typeof data[i] === 'object') {
      filterUndefined(data[i]);
    }
  }
  return data;
}
