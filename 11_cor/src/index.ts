import * as readline from "readline";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";
import CheckWeakMiddlePasswordMiddleware from "./middlewares/CheckWeakPasswordMiddleware";

declare var process: { stdin: any; stdout: any };

const server = new Server();

function setPromptQuestions() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Type your e-mail: ", (email: any) => {
    rl.question("Type your password: ", (password: any) => {
      server.logIn(email, password);
      rl.close();
    });
  });

  rl.on("close", () => setPromptQuestions());
}

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
middleware.linkWith(new CheckWeakMiddlePasswordMiddleware())

server.setMiddleware(middleware);

setPromptQuestions();