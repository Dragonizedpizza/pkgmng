import { exec } from "promisify-child-process";
import type { PacmanInstallOptions } from "../types";
import { PacmanFlags } from "../constants";

export const Pacman = {
	async install(packages: string[], options: PacmanInstallOptions) {
		let query = ["pacman", "-S"],
			addFlag = ({ k, v, e = true }: { k: string; v?: string; e?: any } = {} as any) => {
                if (!e) return;
                
                let newQuery = k;
                if (v) newQuery += `=${v}`;

                query.push(newQuery);

			};

		addFlag({ k: PacmanFlags.databasePath, v: options.databasePath, e: options.databasePath });
        addFlag({ k: PacmanFlags.NoDependencyChecks, e: options.noDependencyChecks });
        addFlag({ k: PacmanFlags.root, v: options.root, e: options.root });


        exec(query.join(" "));
	},
};
