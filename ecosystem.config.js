module.exports = {
    apps : [
        {
          name: "Nuevas-Carreras",
          script: "./node_modules/nuxt/bin/nuxt-start",
          env: {
              "HOST": "127.0.0.1",
              "PORT": 3030,
              "NODE_ENV": "production",
          },
          watch:true,
        }
    ]
  }