const { exec } = require("child_process");

const aliases = {
  "list-aliases": "config --get-regexp '^alias\\.'",
  "undo-last-commit-soft": "reset --soft HEAD~1",
  "undo-last-commit-hard": "reset --hard HEAD~1",
  amend: "commit --amend --no-edit",
  changes: "diff main...HEAD --name-only",
};

const setupGitAliases = () => {
  Object.entries(aliases).forEach(([aliasName, aliasCommand]) => {
    const command = `git config alias.${aliasName} "${aliasCommand}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error setting alias ${aliasName}: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`Error output for ${aliasName}: ${stderr}`);
        return;
      }
      console.log(`Alias ${aliasName} set up successfully.`);
    });
  });
};

setupGitAliases();
