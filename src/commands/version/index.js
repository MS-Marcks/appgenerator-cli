import { readJSONInternal } from "../../utils/read.js";
import { banner } from "../../utils/banner.js";
import { executeCommand } from "../../utils/exec.js";

export async function command_version() {
    console.log("");
    banner("APP GENERATOR");
    console.log(`
    APP GENERATOR CLI: ${readJSONInternal('package.json').version}
    Node: ${process.version}
    `);
    executeCommand("ng version")
}