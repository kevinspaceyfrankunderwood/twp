class Api::BlogsController < ApplicationController
  def index
    blogs = HTTParty.get('https://public-api.wordpress.com/rest/v1.1/sites/wildflowerproject.wordpress.com/posts/')
    single = blogs["posts"][0]
      render json: single
  end

  def events
    blogs = HTTParty.get('https://public-api.wordpress.com/rest/v1.1/sites/wildflowerproject.wordpress.com/posts/')
    all = blogs["posts"][0...5]
      render json: all
  end
end
