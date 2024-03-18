import "dotenv/config";

module.exports = {
    name: 'Kuis-Wakanda',
    version: '1.0.0',
    extra: {
        clerkPublishableKey: process.env.PUBLISH_KEY,
    },
};