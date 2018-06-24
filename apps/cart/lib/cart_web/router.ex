defmodule CartWeb.Router do
  use CartWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", CartWeb do
    pipe_through :api
  end
end
