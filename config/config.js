module.export = {
  development: {
    username: "postgres",
    password: "g9HRoXPZnBCZoSbx",
    // password: "PostgressPwd",
    database: "postgres",
    host: "db.izdpcjumjhpsswbrcnzb.supabase.co",
    //  host: "localhost",
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
