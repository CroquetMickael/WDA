import { select } from "squel";
import { table, dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";

const SiteService = (setUrl: Function) => {
  const db = new Database(dbPath);
  const UrlQuery = select()
    .from(table.user)
    .field("url")
    .toString();
  db.all(UrlQuery, (error: Error, rows) => {
    const firstElement = rows.shift();
    setUrl(firstElement.url);
  });
  db.close();
};

export { SiteService };
