require("colors");

const yargs = require("yargs/yargs"),
	{ argv } = yargs(process.argv.join(" ")),
	{ _ } = argv,
	{ spawn } = require("child_process"),
	possibleFlags = {
		double: ["yay", "no-sync-database", "confirm"],
		single: ["y", "n", "c"],
	};

_.splice(0, 2);

let execArgs = [];

for (const [key, value] of Object.entries(argv)) {
	if (!possibleFlags.double.includes(key))
		for (const flag of key.split("")) argv[flag] = value;
}

function argvHas(...strings) {
	for (const string of strings)
		if (argv[string] ?? Object.keys(argv).includes(string)) return true;

	return false;
}

function add(...string) {
	execArgs.push(...string.filter(Boolean));
}

function boolc(_string) {
	return (string = String(_string)) === "true" ? string.green : string.red;
}

const yay = argvHas("yay", "y"),
	syncDb = !argvHas("no-sync-db", "n"),
	confirm = argvHas("confirm", "c");

if (yay) add("yay");
else add("sudo", "pacman");

if (syncDb) add(`-Sy`, ..._);
else add(..._);

if (!confirm) add("--noconfirm");

function dataLog(title, value, color) {
	console.log(
		title.bold,
		(color ? value[color] : boolc(value)) + "."["" + "bold"],
	); // remove annoying vsc deprecated error
}

dataLog("Running:", execArgs.join(" "), "cyan");
dataLog("Installing With Yay:", yay);
dataLog("Sync Databases:".bold, syncDb);
dataLog("Confirmation:".bold, confirm);
dataLog(
	"Packages To Be Installed:".bold,
	`(${String(_.length).magenta}) ${
		_.join(" ") || "No packages are going to be installed"
	}`,
	"bold",
);

const exec = spawn(execArgs.shift(), execArgs, {
	stdio: "inherit",
});

exec.on("close", (code) => {
	if (code === 0) console.log(`Command successful with code ${code}.`.green);
	else
		console.log(
			`\n Command unsuccessful with ${
				code !== 0 && code ? `error code ${code}.` : `no error code.`
			}.`.red,
		);
});

process.on("SIGINT", () => {});
