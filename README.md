# Mongodb Appender for log4js-node

Stores log events in a [Redis](https://redis.io) database. Plugin for log4js > 2.x
```bash
npm install log4js-mongodb-pan
```

## Configuration

The appender will use the Redis PUBLISH command to send the log event messages to the channel.

## Example

```javascript
log4js.configure({
  appenders: {
    redis: { type: '@log4js-node/redis', channel: 'logs' }
  },
  categories: { default: { appenders: ['redis'], level: 'info' } }
});
```

This configuration will publish log messages to the `logs` channel on `127.0.0.1:6379`.
