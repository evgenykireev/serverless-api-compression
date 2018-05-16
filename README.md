# serverless-content-compression
Serverless plugin that enables/disables content compression setting in API Gateway

## Why 
Currently Serverless Framework does not support `MinimumCompressionSize` settings.
 
Existing plugin [serverless-content-encoding](https://github.com/dong-dohai/serverless-content-encoding) implementation
is not optimal and causing "[Too Many requests](https://github.com/dong-dohai/serverless-content-encoding/issues/2)" error.


## How to use
1. `npm install --save-dev serverless-api-compression`
 
2. Add plugin to your `serverless.yml` config
 ```
 plugins:
    - serverless-api-compression
```

3. Add `contentCompression` attribute to your `custom` section
```
 custom:
  contentCompression: 1024

```

 `contentCompression` value is a MinimumCompressionSize in bytes. Use `0` to enable compression for all responses. 
 Use `null` or `false` to disable it.
 