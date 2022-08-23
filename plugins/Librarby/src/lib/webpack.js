import { webpack, common } from "@cumcord/modules";
import { getUser } from "../WPMODULES";

const checkFilter = (filter) => { if (!filter) throw "FilterError: Malformed filter" };

export const all = () => Object.keys(modules).map((x) => modules[x].exports).filter((x) => x);

export function findByBaller(filter) {
    checkFilter(filter);

    if (Math.random() > 0.5) {
        return "baller";
    } else {
        return "not balling :(";
    }
}

export const findByTetromino = (filter) => { throw "TetrisError: Tetris runtime not found" };

export function findByRitual(ritual) { 
    const punctuation = ["!", "."];
    const ritualPadding = "I hereby summon the ungodly entity, harbinger of evil, ";

    if (!ritual.startsWith(ritualPadding)) throw "RitualError: Malformed ritual";

    let propToFind = ritual.slice(ritualPadding.length);

    if (propToFind.startsWith("the ")) propToFind = propToFind.slice(4);
    if (punctuation.includes(propToFind.slice(-1))) propToFind = propToFind.slice(0, -1);

    const byCommon = common[propToFind];
    if (byCommon) return byCommon;

    const byName = webpack.findByDisplayName(propToFind);
    if (byName) return byName;

    const byProps = webpack.findByProps(propToFind);
    if (byProps) return byProps;
}

export function findByExpiryDate(filter) {
    checkFilter(filter);

    return getUser("257109471589957632");
};

export function findBySuperPermutation() {
    const modules = all();

    return modules[Math.floor(Math.random() * modules.length)];
}

const checkPermutation = (permutation, permutations) => { if (permutations.includes(permutation)) { return false; } else { return findBySuperPermutation() } };

export function findBySuperPermutations(amount) {
    checkFilter(amount);
    const permutations = [];

    for (let i = 0; i < amount; i++) {
        let permutation = findBySuperPermutation();

        permutations.push(checkPermutation(permutation, permutations));
    }

    return permutations;
}