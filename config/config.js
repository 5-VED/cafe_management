module.exports = {
  development: {
    username: "postgres.izdpcjumjhpsswbrcnzb",
    password: "g9HRoXPZnBCZoSbx",
    database: "postgres",
    host: "aws-0-ap-south-1.pooler.supabase.com",
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
