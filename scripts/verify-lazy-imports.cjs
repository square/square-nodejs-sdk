const assert = require("node:assert/strict");

const apiIndex = require.resolve("../dist/api/index.js");
const serializers = require.resolve("../dist/serialization/index.js");

const { SquareClient, SquareEnvironment } = require("../dist/lightweight.js");
assert.equal(typeof SquareClient, "function");
assert.equal(typeof SquareEnvironment.Sandbox, "string");
assert.equal(require.cache[apiIndex], undefined);
assert.equal(require.cache[serializers], undefined);

const client = new SquareClient({ auth: false });
assert.equal(typeof client.payments.create, "function");
assert.equal(require.cache[apiIndex], undefined);
assert.equal(require.cache[serializers], undefined);

const root = require("../dist/index.js");
assert.equal(root.SquareClient, SquareClient);
assert.equal(require.cache[serializers], undefined);
const payment = root.serialization.Payment;
assert.equal(require.cache[serializers], undefined);
assert.ok(Object.keys(root.serialization).includes("Payment"));
assert.equal(require.cache[serializers], undefined);
const eagerSerializers = require("../dist/serialization/index.js");
assert.equal(payment, eagerSerializers.Payment);
assert.deepEqual(Object.keys(root.serialization).sort(), Object.keys(eagerSerializers).sort());
