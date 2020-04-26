import { select } from "squel";
import { InitQuery } from "./InitQuery";
import { navigate } from "@reach/router";
import { table, dbPath } from '../dbUtils';
import { Database } from "sqlite3";

const initDatabase = () => {
  const db = new Database(dbPath);
  db.get(
    select()
      .from(table.user)
      .toString(),
    (err: { message: any; }, row: null) => {
      if (err) {
        db.run(InitQuery.sqlUser);
        db.run(InitQuery.sqlPage);
        db.run(InitQuery.sqlCategorie);
        db.run(InitQuery.sqlCategoriePage);
        db.close();
        navigate("/initUser");
        return console.error(err.message);
      } else if (row != null) {
        db.close();
        if (window.location.pathname !== "/") {
          navigate("/");
        }
      }
    }
  );
};

export { initDatabase };
