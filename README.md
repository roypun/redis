# Mongodb Appender for log4js-node

```bash
npm install log4js-mongodb-pan
```

## Configuration

The appender will use the Redis PUBLISH command to send the log event messages to the channel.

## Example

```javascript
log4js.configure({
  appenders: {
    mongodb: { type: 'log4js-mongodb-pan', channel: 'logs' }
  },
  categories: { default: { appenders: ['mongodb'], level: 'info' } }
});
```

This configuration will publish log messages to the `logs` channel on `127.0.0.1:6379`.
