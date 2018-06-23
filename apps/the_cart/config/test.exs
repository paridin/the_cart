use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :the_cart, TheCartWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :the_cart, TheCart.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "developing",
  password: "demosapp1!",
  database: "the_cart_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
