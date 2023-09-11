
const neo4j = require('neo4j-driver')
(async () => {
  var neo4j = require('neo4j-driver')

  // URI examples: 'neo4j://localhost', 'neo4j+s://xxx.databases.neo4j.io'
  const URI = '<neo4j+s://f8c2de3d.databases.neo4j.io>'
  const USER = '<neo4j>'
  const PASSWORD = '<Mkej6cgKukSLhWzb3BoyLjnULpUOkowLmkVuKIwtQTM>'
  let driver

  try {
    driver = neo4j.driver(URI,  neo4j.auth.basic(USER, PASSWORD))  
    const serverInfo = await driver.getServerInfo()  
    console.log('Connection estabilished')
    console.log(serverInfo)
  } catch(err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
    await driver.close()
    return
  }

  // Use the driver to run queries

  await driver.close()  
})();