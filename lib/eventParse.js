const eventParse = (evt) => {
  const eventObj = {};
  const eventSplit = evt.split('=');
  eventObj[eventSplit[0]] = eventSplit[1];
  return eventObj;
};

module.exports = eventParse;
