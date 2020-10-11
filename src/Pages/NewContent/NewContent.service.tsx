import { insert } from "squel";
import { table, dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";

const ContentService = (content: string, title: string) => {
  const db = new Database(dbPath);
  const AddContent = insert()
    .into(table.content)
    .set("contenu", content)
    .set("titre", title)
    .toString();
  db.run(AddContent);
  db.close();
};

export { ContentService };
