module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
      startServerCommand: 'http-server . -p 8080',
      url: ['http://localhost:8080'],
      settings: {
        onlyCategories: [
          'performance',
          'accessibility',
          'best-practices',
          'seo',
        ],
        skipAudits: ['installable-manifest', 'service-worker'],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
