import Notify from "./Notify";
import Client from "./Client";

const client = new Client();
const notify = new Notify(client);

notify.sendEmail();
