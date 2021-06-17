//Importando sqlite3
const sqlite3 = require('sqlite3')
// Importando somente a função open do sqlite
const { open } = require('sqlite')

// Configurando a conexão/abertura do db
module.exports = () => open({
    // Lugar onde ele irá salvar as informações
    filename: './database.sqlite',
    // Aquele que trabalha e guarda as info no arquivo
    driver: sqlite3.Database
});
