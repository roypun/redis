export interface MongodbAppender {
        type: 'log4js-mongodb-pan';
        // (defaults to 127.0.0.1) - the location of the redis server
        connectionString?: string;
        // (defaults to messagePassThroughLayout) - the layout to use for log events.
        layout?: Layout;
}

export type Appender = Appender | MongodbAppender;
