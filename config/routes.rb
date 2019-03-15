Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    get 'blogs/events'
    get 'instagram/single'
    get 'instagram/tenGroup'
    resources 'blogs'
    resources 'events'
    # resources 'instagram'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
