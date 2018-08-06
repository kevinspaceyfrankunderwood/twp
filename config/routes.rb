Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    get 'blogs/index'
    resources 'events'
  end

  namespace :api do
    get 'blogs/events'
  end

  namespace :api do
    get 'instagram/index'
  end

  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
