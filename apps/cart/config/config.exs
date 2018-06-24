# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :cart,
  namespace: Cart,
  ecto_repos: [Cart.Repo]

# Configures the endpoint
config :cart, CartWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "rG56LZIlAY2RLLGTvblvkXO6xvfsTGXabgjzl5wUfV5MpTgBEjZpalHQtYYEzi4m",
  render_errors: [view: CartWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Cart.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"