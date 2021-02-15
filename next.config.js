module.exports = {
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: `https://welbi.org/api/graphql?token=${process.env.TOKEN}`,
      },
    ];
  },
};
