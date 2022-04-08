export const Regexes = {
    RemoveServerEquals: /^Server = (.*)$/,
};

export function GlobalRegex(regex: RegExp): RegExp {
    return new RegExp(regex.source, regex.flags + "g");
};

export const PacmanFlags = {
    NoDependencyChecks: "--nodeps",
    databasePath: "--dbpath",
    root: "--root",
    search: "--search",
    verbose: "--verbose",
    arch: "--arch",
    asDependencies: "--asdeps",
    asExplicit: "--asexplicit",
    assumeInstalled: "--assume-installed",
    cacheDir: "--cachedir",
    color: "--color",
    config: "--config",
    debug: "--debug",
    databaseOnly: "--dbonly",
    disableDownloadTimeout: "--disable-download-timeout",
    gpgDirectory: "--gpgdir",
    hookDirectory: "--hookdir",
    ignorePackages: "--ignore",
    ignoreGroups: "--ignoregroups",
    logFile: "--logfile",
    noReinstallUptoDate: "--nodeps",
    noScriptlet: "--noscriptlet",
    printFormat: "--print-format",
    systemRoot: "--sysroot",
    refresh: "--refresh",
    forceRefresh: "-yy",
    
};