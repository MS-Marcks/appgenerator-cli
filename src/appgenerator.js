import { program } from 'commander';
import { readJSONInternal } from "./utils/read.js";

import {
    command_version,
    command_create_project
} from './commands/index.js';

program.version(readJSONInternal('package.json').version);

program
    .command('version')
    .description('Mostrar la versión del cliente')
    .action(command_version)

program
    .command('new')
    .description('Crear un nuevo proyecto')
    .action(command_create_project)

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

program.parse(process.argv);