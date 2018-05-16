# serverless-content-compression
Serverless plugin that enables/disables content compression setting in API Gateway

## Why 
Currently Serverless Framework does not support `MinimumCompressionSize` settings.
 
Existing plugin [serverless-content-encoding](https://github.com/dong-dohai/serverless-content-encoding) implementation
is not optimal and causing "[Too Many requests](https://github.com/dong-dohai/serverless-content-encoding/issues/2)" error.


## How to use
1. Create `.serverless_plugins` directory if not exists:
 `mkdir .serverless_plugins`
2. Clone this repo into it:
 `git clone https://github.com/evgenykireev/serverless-api-compression.git .serverless_plugins/`
3. Add plugin to your `serverless.yml` config
 ```
 plugins:
    - serverless-api-compression
```

4. Add `contentCompression` attribute to your `custom` section
```
 custom:
  contentCompression: 1024

```

 `contentCompression` value is a MinimumCompressionSize in bytes. Use `0` to enable compression for all responses. 
 Use `null` or `false` to disable it.
 