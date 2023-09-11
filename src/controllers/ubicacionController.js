// ubicacionController.js

const neo4j = require('neo4j-driver');

const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'Mkej6cgKukSLhWzb3BoyLjnULpUOkowLmkVuKIwtQTM'));

async function ejecutarConsulta(cypherQuery) {
  const session = driver.session();

  try {
    if (cypherQuery && typeof cypherQuery === 'string' && cypherQuery.trim() !== '') {
      const result = await session.run(cypherQuery);
      return result.records;
    } else {
      throw new Error('La consulta Cypher proporcionada no es válida');
    }
  } finally {
    session.close();
  }
}

module.exports = {
  ejecutarConsulta,
};
