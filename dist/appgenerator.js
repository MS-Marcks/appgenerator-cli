"use strict";

var _commander = require("commander");
var _read = require("./utils/read.js");
var _index = require("./commands/index.js");
_commander.program.version((0, _read.readJSONInternal)('package.json').version);
_commander.program.command('version').description('Mostrar la versión del cliente').action(_index.command_version);
_commander.program.command('new').description('Crear un nuevo proyecto').action(_index.command_create_project);

/*program
    .command('service')
    .description('Crear un nuevo servicio')
    .action(command_create_service)

program
    .command('api')
    .description('Crear una nueva api')
    .option('-s, --service <value>', 'Servicio a generar la api')
    .action(command_create_api)

program
    .command('controller')
    .description('Crear un nuevo controlador')
    .option('-s, --service <value>', 'Servicio a generar el controlador')
    .option('-a, --api <value>', 'API a generar el controlador')
    .action(command_create_controller)*/

_commander.program.parse(process.argv);
//# sourceMappingURL=appgenerator.js.map