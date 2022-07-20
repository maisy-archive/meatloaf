import { addCommand } from "@cumcord/commands";

const registeredCommands = new Map();

// TODO: Arguments are broken, fix them
export function add(name, description, execute, options = []) {
    registeredCommands.set(
        name,
        addCommand({
            name: name,
            description: description,
            args: options,
            handler: execute,
        })
    );
}

export function remove(name) {
    registeredCommands.get(name)();
}
