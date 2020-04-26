export const InitQuery = {
  sqlPage:
    "CREATE TABLE if not exists Content(" +
    "id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ," +
    "contenu       TEXT ," +
    "titre         TEXT" +
    ");",
    sqlCategoriePage:
    "CREATE TABLE if not exists CategorieContent(" +
    "id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ," +
    "contentid       INTEGER ," +
    "categorieid       INTEGER "+
    ");",
    sqlCategorie:
    "CREATE TABLE if not exists Categorie(" +
    "id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ," +
    "libelle       TEXT " +
    ");",
  sqlUser:
    "CREATE TABLE if not exists User(" +
    "id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ," +
    "login          TEXT ," +
    "password       TEXT ," +
    "url TEXT" +
    ")"
};
