export default {
    routes: [
      { // Path defined with a URL parameter
        method: 'POST',
        path: '/catraca/move',
        handler: 'catraca.move',
        config: {
          auth: false,
        },
      },
    ]
  }