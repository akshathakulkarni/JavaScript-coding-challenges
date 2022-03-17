let instance;

class ConfigerValues {
  constructor(values) {
    this.xpoint = 0 || values.xpoint;
    this.ypoint = 0 || values.ypoint;
    this.shape = null || values.shape;
  }
}

function getConfiguration (values) {
  if (!instance) {
    instance = new ConfigerValues(values);
  }
  return instance;
 }

console.log(getConfiguration({ xpoint: 8, ypoint : 9, shape : "rectangle" })); //first call

console.log(getConfiguration({ xpoint : 2, ypoint : 4, shape : "circle" })); //second call

