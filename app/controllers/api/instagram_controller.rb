class Api::InstagramController < ApplicationController
  def single
    instagram = HTTParty.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=",
  	{query:
      {access_token: ENV['INSTAGRAM_ACCESS_TOKEN'],
            count: 	'1'}
          })
      render json: instagram
  end

  def tenGroup
    instagram = HTTParty.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=",
  	{query:
      {access_token: ENV['INSTAGRAM_ACCESS_TOKEN'],
            count: 	'10'}
          })
      render json: instagram
  end
end
