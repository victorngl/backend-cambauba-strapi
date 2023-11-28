module.exports = {
    documentation: {
      enabled: true,
      config: {
        openapi: '3.0.0',
        info: {
          version: '1.0.0',
          title: 'Documentação - REST API',
          description: '',
          termsOfService: '',
          contact: {
            name: 'Time de desenvolvimento da Escola Modelar Cambaúba',
            email: 'dev@cambauba.org.br',
            url: 'cambauba.org.br'
          },
          license: {
            name: '',
            url: ''
          },
        },
        'x-strapi-config': {
          // Leave empty to ignore plugins during generation
            plugins: [],
        },
        servers: [{ url: 'http://localhost:1337/api', description: 'Development server' }],
        externalDocs: {
          description: '',
          url: ''
        },
        security: [ { bearerAuth: [] } ]
      }
    }
  }