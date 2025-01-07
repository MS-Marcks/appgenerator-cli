import "../../utils/colors.js";
import inquirer from 'inquirer';
import path from "path";
import fs from "fs";

import { executeCommand } from "../../utils/exec.js";

const baseDir = path.resolve(".");

export async function command_create_project() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Ingrese nombre del projecto:',
                validate: function (input) {
                    if (input) {
                        const root = path.join(baseDir, input.toLowerCase());
                        if (fs.existsSync(root)) {
                            return "Ya existe el proyecto";
                        }
                        return true;
                    } else {
                        return 'Ingrese un nombre para el proyecto.';
                    }
                }
            },
            {
                type: 'list',
                name: 'Framework',
                message: 'Seleccione el framework que desee usar:',
                choices: ['Angular', 'React js'],
                validate: function (input) {
                    if (input) {
                        return true;
                    } else {
                        return 'Seleccione el framework';
                    }
                }
            }
        ])
        .then(async (answers) => {

            const nameProject = answers.name.toLowerCase();
            const root = path.join(baseDir, nameProject);
            if (fs.existsSync(root)) {
                console.log(`\n\t${red("Ya existe el proyecto")}`)
                return;
            }

            fs.mkdirSync(root);

            await executeCommand(`cd ${root} && ng new ${nameProject} --defaults --routing --style=sass --skip-install --standalone=false --skip-git`)

            /*const initLen = project.length;
            for (let index = 0; index < initLen; index++) {
                const { name, type, content, parent } = project[index];
                if (type === "file") {
                    console.log(green("CREATED FILE"), path.join(parent, name));
                    fs.writeFileSync(path.join(root, parent, name), readFileModule(content).replace(/{{name}}/g, nameProject));
                } else if (type === "folder") {
                    console.log(green("CREATED FOLDER"), path.join(parent, name));
                    fs.mkdirSync(path.join(root, parent, name))
                }
            }
            console.log(blue("## CONFIGURE WEBPACK ##"));
            const { name, type, content, parent } = (answers.bundle === "webpack") ? webpack : esbuild;
            console.log(green("CREATED FILE"), path.join(parent, name));
            fs.writeFileSync(path.join(root, parent, name), readFileModule(content).replace(/{{name}}/g, nameProject));

            let package_file = readJSONFile("package.json", root);
            if (answers.bundle === "webpack") {
                Object.assign(package_file.scripts, JSON.parse(`{"clean": "rm -rf ./dist && mkdir ./dist && rm -rf ./build && mkdir ./build","webpack": "webpack --mode production"}`));
                Object.assign(package_file.devDependencies, webpack_modules.modules);
            } else if (answers.bundle === "esbuild") {
                Object.assign(package_file.scripts, JSON.parse(`{"clean": "rm -rf ./dist && mkdir ./dist && rm -rf ./build && mkdir ./build","esbuild": "node ./esbuild.config.js"}`));
                Object.assign(package_file.devDependencies, esbuild_modules.modules);
            }

            console.log(yellow("UPDATE FILE"), "package.json");
            fs.writeFileSync(path.join(root, "package.json"), jsonFormat(package_file));

            console.log(yellow("UPDATE FILE"), "config.ms.json");
            let config_ms_file = readJSONFile("config.ms.json", root);
            config_ms_file.bundle = answers.bundle;
            fs.writeFileSync(path.join(root, "config.ms.json"), jsonFormat(config_ms_file));

            console.log(blue("## INSTALL MODULES ##"));
            await executeCommand('npm', ['install'], { cwd: root });
            */
        });
}