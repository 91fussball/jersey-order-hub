Object.defineProperty(exports, '__esModule', { value: true });

const {
    PrismaClientKnownRequestError,
    PrismaClientUnknownRequestError,
    PrismaClientRustPanicError,
    PrismaClientInitializationError,
    PrismaClientValidationError,
    NotFoundError,
    decompressFromBase64,
    getPrismaClient,
    sqltag,
    empty,
    join,
    raw,
    Decimal,
    Debug,
    objectEnumValues,
    makeStrictEnum,
    Extensions,
    warnOnce,
    defineDmmfProperty,
} = require('./runtime/library');

const Prisma = {};

exports.Prisma = Prisma;

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
    client: '4.15.0',
    engine: '8fbc245156db7124f997f4cecdd8d1219e360944',
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = () => (val) => val;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
    DbNull: objectEnumValues.classes.DbNull,
    JsonNull: objectEnumValues.classes.JsonNull,
    AnyNull: objectEnumValues.classes.AnyNull,
};

const path = require('path');

/**
 * Enums
 */

exports.Prisma.OrdersScalarFieldEnum = {
    id: 'id',
    back_number: 'back_number',
    is_paid: 'is_paid',
    jersey_type: 'jersey_type',
    jersey_name: 'jersey_name',
    name: 'name',
    payment: 'payment',
    phone_number: 'phone_number',
    longsleeve: 'longsleeve',
    size: 'size',
    created_at: 'created_at',
    updated_at: 'updated_at',
};

exports.Prisma.QueryMode = {
    default: 'default',
    insensitive: 'insensitive',
};

exports.Prisma.SortOrder = {
    asc: 'asc',
    desc: 'desc',
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
});

exports.Prisma.ModelName = {
    orders: 'orders',
};
/**
 * Create the Client
 */
const config = {
    generator: {
        name: 'client',
        provider: {
            fromEnvVar: null,
            value: 'prisma-client-js',
        },
        output: {
            value: '/Users/tamagossi/Works/next/jersey-order-hub/prisma/generated/client',
            fromEnvVar: null,
        },
        config: {
            engineType: 'library',
        },
        binaryTargets: [
            {
                fromEnvVar: null,
                value: 'darwin-arm64',
                native: true,
            },
        ],
        previewFeatures: [],
        isCustomOutput: true,
    },
    relativeEnvPaths: {
        rootEnvPath: '../../../.env',
        schemaEnvPath: '../../../.env',
    },
    relativePath: '../..',
    clientVersion: '4.15.0',
    engineVersion: '8fbc245156db7124f997f4cecdd8d1219e360944',
    datasourceNames: ['db'],
    activeProvider: 'postgresql',
    dataProxy: false,
};

const fs = require('fs');

config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
    config.dirname = path.join(process.cwd(), 'prisma/generated/client');
    config.isBundled = true;
}

config.runtimeDataModel = JSON.parse(
    '{"models":{"orders":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"back_number","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"is_paid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"jersey_type","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"NON-GK","isGenerated":false,"isUpdatedAt":false},{"name":"jersey_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"-","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"","isGenerated":false,"isUpdatedAt":false},{"name":"payment","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"phone_number","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"longsleeve","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"size","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"L","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);

const { warnEnvConflicts } = require('./runtime/library');

warnEnvConflicts({
    rootEnvPath:
        config.relativeEnvPaths.rootEnvPath &&
        path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath:
        config.relativeEnvPaths.schemaEnvPath &&
        path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

path.join(__dirname, 'libquery_engine-darwin-arm64.dylib.node');
path.join(
    process.cwd(),
    'prisma/generated/client/libquery_engine-darwin-arm64.dylib.node',
);
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), 'prisma/generated/client/schema.prisma');
