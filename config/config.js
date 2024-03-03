module.exports = {
  development: {
    username: "postgres",
    password: "g9HRoXPZnBCZoSbx",
    database: "postgres",
    host: "db.izdpcjumjhpsswbrcnzb.supabase.co",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
