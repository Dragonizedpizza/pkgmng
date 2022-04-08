# 📦 👑 PKGMNG

PKGMNG, a wrapper for the Arch Linux package managers `pacman` and `yay`.

## Usage

PKGMNG sychronizes and downloads fresh package databases when installing packages by default. If you run `pkgmng vim exa`, you would be running `sudo pacman -Sy vim exa --noconfirm`.
Ensure you have root permissions, as installing pacman or yay packages on Arch Linux requires root. If pkgmng is not ran with root, it will stop at root prompt, asking for permissions.
PKGMNG has 2 backends, `pacman` and `arch`. Pacman is selected by default. Incase you would like to install through arch, simply add the flag `-y` or `--yay` at the end of the command.

Multiple flags can be used together as shown here: `pkgmng <package> -cyn` or `pkgmng <package> -c -y -n`

### Flags

| Flag Name      | Description                                                                      | Aliases | Usage                                                    |
| -------------- | -------------------------------------------------------------------------------- | ------- | -------------------------------------------------------- |
| --confirmation | Asks for confirmation when installing the packages.                              | `-c`    | `pkgmng <package> -c`, `pkgmng <package> --confirmation` |
| --yay          | Installs package with yay instead of pacman.                                     | `-y`    | `pkgmng <package> -y`, `pkgmng <package> --yay`          |
| --no-sync-db   | When provided, PKGMNG does not synchronize and download fresh package databases. | `-n`    | `pkgmng <package> -n`, `pkgmng <package> --no-sync-db`   |

### Screenshots

Installing vim with confirmation flag.

![Installing vim with confirmation flag.](https://i.imgur.com/FXpbAUz.png)

Installing multiple packages with no flags.

![Installing multiple packages with no flags.](https://i.imgur.com/Kct7QsV.png)

Using multiple flags.

![Using multiple flags.](https://i.imgur.com/iMrkHXs.png)
