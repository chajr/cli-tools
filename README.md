cli-tools
=========

Useful console tools

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli-tools.svg)](https://npmjs.org/package/cli-tools)
[![Downloads/week](https://img.shields.io/npm/dw/cli-tools.svg)](https://npmjs.org/package/cli-tools)
[![License](https://img.shields.io/npm/l/cli-tools.svg)](https://github.com/https://github.com/chajr/cli-tools/cli-tools/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli-tools
$ tools COMMAND
running command...
$ tools (-v|--version|version)
cli-tools/0.1.0 darwin-x64 node-v10.16.3
$ tools --help [COMMAND]
USAGE
  $ tools COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tools hello [FILE]`](#tools-hello-file)
* [`tools help [COMMAND]`](#tools-help-command)

## `tools hello [FILE]`

describe the command here

```
USAGE
  $ tools hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ tools hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/chajr/cli-tools/cli-tools/blob/v0.1.0/src/commands/hello.ts)_

## `tools help [COMMAND]`

display help for tools

```
USAGE
  $ tools help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
