import { select } from "squel";
import { table, dbPath } from "../../../Database/dbUtils";
import { Database } from "sqlite3"
import { AuthMachineContext } from "./AuthMachine";

const db = new Database(dbPath);
export const login = (context: AuthMachineContext) =>
  new Promise((resolve, reject) => {
    const checkUser = select()
      .from(table.user)
      .where("login = ?", context.username)
      .where("password = ?", context.password)
      .toString();
    db.get(checkUser, [], (error, rows) => {
      if (rows != null && rows !== undefined && rows !== []) {
        setTimeout(() => resolve(rows.id), 1000);
      } else {
        setTimeout(() => reject("Username and/or password not found"), 1000);
      }
    });
  });