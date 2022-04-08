export interface PacmanInstallOptions {
	databasePath?: string;
	noDependencyChecks?: boolean;
	root?: string;
	search?: RegExp | string;
	verbose?: boolean;
	arch?: boolean;
	asDependencies?: boolean;
	asExplicit?: boolean;
	assumeInstalled?: [string, string][];
	cacheDir?: string;
	color?: string;
	config?: string;
	debug?: boolean;
	databaseOnly?: boolean;
	disableDownloadTimeout?: boolean;
	gpgDirectory?: string;
	hookDirectory?: string;
	ignorePackages?: string[];
	ignoreGroups?: string[];
	logFile?: string;
	noReinstallUptoDate?: boolean;
	noScriptlet?: boolean;
	printFormat?: string;
	systemRoot?: string;
}
