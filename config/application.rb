require_relative 'boot'

require 'rails/all'
require "active_model_serializers"
require 'omniauth-facebook'
require 'dotenv/load'
require 'faker'
require 'ddtrace'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
# Bundler.require(*Rails.groups)

# config.assets.initialize_on_precompile = false

module Restaurant
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # config.autoload_paths += %W(#{config.root}/lib)

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
