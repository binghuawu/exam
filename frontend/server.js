const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');


let config = require("./config/webpack.prod.js");
let compiler = webpack(config);

const port = 9001;

config.entry.unshift(
	"webpack-dev-server/client?http://localhost:" + port + "/", 
	'webpack/hot/dev-server',
	'react-hot-loader/patch');

let server = new WebpackDevServer(compiler, {
	contentBase: config.output.path,
	publicPath:  config.output.publicPath,
  hot: true
});

server.listen(port, 'localhost', () => {
	console.log('Starting server on http://localhost:' + port);
});