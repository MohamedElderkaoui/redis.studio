const redis = require('redis');
const client = redis.createClient({ host: '127.0.0.1', port: 6379 });

function connectToRedis() {
    
    return new Promise((resolve, reject) => {
        client.on('connect', () => {
            console.log(",m<");
            console.log('Connected to Redis');
            resolve();
        });

        client.on('error', (err) => {
            console.error('Redis connection error:', err);
            reject(err);
        });
    });
}

  function main() {
     try {
        console.log("DikDS");
         connectToRedis();

        // Your code here after successful connection
    } catch (err) {
        // Handle the error
        console.error(`Error occurred while connecting to Redis: ${err}`);
    }
}

main();
