Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    resources :person
  end
end
