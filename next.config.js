const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env:{
        mongodb_user: 'blog_1',
        mongodb_password: '9gItneQCBO0nFX4Q',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-blog-dev'
      },
    };
  }

  return {
    env:{
      mongodb_user: 'blog_1',
      mongodb_password: '9gItneQCBO0nFX4Q',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-blog'
    },
  };
};









