import chalk from "chalk";

type typeMsg = "error" | "warn" | "info";

interface msgErrors {
  msg: string;
  type: typeMsg;
}

export function showMsg({ msg, type }: msgErrors) {
  if (type === "error") {
    console.error(chalk.bold.red(`:::::---${msg}---:::::`));
  }

  if (type === "warn") {
    console.warn(chalk.bold.yellow(`:::::---${msg}---:::::`));
    return;
  }

  if (type === "info") {
    console.info(chalk.bold.blue(`:::::---${msg}---:::::`));
  }
}
