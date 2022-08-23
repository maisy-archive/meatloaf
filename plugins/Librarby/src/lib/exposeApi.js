import * as webpack from "./webpack";

export default function exposeApi() {
    window.Librarby = {
        webpack: { 
            ...webpack,
            findByAll: (filter) => { 
                const found = [];

                for (const m of Object.values(webpack)) try { found.push(m(filter)) } catch(e) { found.push(e.message ?? e.toString()) };

                return found;
            },
        },
    }

    return () => { if (window.Librarby) delete window.Librarby };
}