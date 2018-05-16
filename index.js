class APICompression {
	constructor(serverless) {
		this.serverless = serverless;
		this.hooks = {
			'package:compileEvents': this.beforeDeployResources.bind(this),
		};
	}

	beforeDeployResources() {
		const apiGateway = this.serverless.service.provider.compiledCloudFormationTemplate.Resources.ApiGatewayRestApi;
		if (!apiGateway || typeof apiGateway !== 'object') {
			return;
		}

		const contentCompression = (this.serverless.service.custom || {}).contentCompression;
		let minimumCompressionSize = 0;
		if (contentCompression === null || contentCompression === false) {
			minimumCompressionSize = { Ref: 'AWS::NoValue' };
		}

		if (Number.isInteger(contentCompression)) {
			minimumCompressionSize = contentCompression;
		}

		try {
			apiGateway.Properties.MinimumCompressionSize = minimumCompressionSize;
		} catch (error) {
			this.serverless.cli.log(error);
		}
	}
}

module.exports = APICompression;
