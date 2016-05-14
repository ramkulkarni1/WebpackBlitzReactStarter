var gulp = require('gulp'),
	webpack = require('webpack'),
	devServer = require('webpack-dev-server')
;

var webpackConfig = require('./webpack.config');

function compile() {
	var compiler = webpack(webpackConfig);

	compiler.run(function(err, stat){
		if (err) {
			console.log('Error building application - ', err);
			return;
		} 
		var statJson = stat.toJson();
		if (statJson.errors.length > 0) {
			console.log('Error building application - ', statJson.errors);
			return;
		}

		console.log('Application built successfully !');
	});	
}

function startServer() {
	//Following code is commented because these configurations are already added in webpack-config.js
	// webpackConfig.entry.unshift('webpack-dev-server/client?http://localhost:' + webpackConfig.serverPort + '/', 
	// 	'webpack/hot/dev-server');
	// webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

	var compiler = webpack(webpackConfig);
	var server = new devServer(compiler, webpackConfig.devServer);
	server.listen(webpackConfig.serverPort);	
}

gulp.task('default', function(){
	startServer();
});

gulp.task('build', function() {
	compile();
});