const app = require('fastify')({ logger: false });
const keys = new Set(['input_key_here', 'input_key_here', 'input_key_here']);

app.register(require('@fastify/formbody'));
app.register(require('@fastify/compress'), { global: true });
app.register(require('@fastify/helmet'), {
  contentSecurityPolicy: true,
});

// Global Configs
app.register(require('@fastify/bearer-auth'), { keys });
app.register(require('@fastify/multipart'), {
  limits: {
    files: 1,
  },
}); // Multipart Files Support

// Global API Routes
app.register(require('./Routes/v1.js'), { prefix: '/api' });
app.register(require('./Routes/beta.js'), { prefix: '/beta' });

// Specific Version Routes
app.register(require('./Routes/v1.js'), { prefix: '/v1' }); // Active

const start = async () => {
  try {
    await app.listen(8081, '0.0.0.0');
    console.log(`[ ShareX Server: ONLINE ] Website Listening On Port 8081...`);
  } catch (err) {
    console.error(err);
  }
};
start();
