const node = {
  dgram: 'empty',
  fs: 'empty',
  net: 'empty',
  tls: 'empty',
  child_process: 'empty',
};

module.exports = (config) => {
  config.node = Object.assign({}, config.node, node);
  return config;
};
