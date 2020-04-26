import { select } from "squel";
import { table, dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";

const HomeService = {
  getContent: (setContents: Function) => {
    const db = new Database(dbPath);

    const ContentQuery = select()
      .from(table.content)
      .field("*")
      .field("GROUP_CONCAT(DISTINCT Categorie.libelle)", "categories")
      .join(
        table.categorieContent,
        undefined,
        "Content.id = CategorieContent.contentid"
      )
      .join(
        table.categorie,
        undefined,
        "Categorie.id = CategorieContent.categorieid"
      )
      .group("Content.id")
      .toString();

    db.all(ContentQuery, (error: Error, rows) => {
      let mappedContent = [];
      mappedContent = rows.map(content => {
        return {
          id: content.id,
          title: content.titre,
          content: content.contenu,
          categories: content.categories.split(",")
        };
      });
      setContents(mappedContent);
    });
    db.close();
  },
  getCategories: (setCategories: Function) => {
    const db = new Database(dbPath);
    const CategoriesQuery = select()
      .from(table.categorie)
      .field("libelle")
      .toString();
    db.all(CategoriesQuery, (error: Error, rows) => {
      setCategories([...rows.map(row => row.libelle)]);
    });
  }
};

export { HomeService };
