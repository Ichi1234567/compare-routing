# in config/routes.rb

Rails.application.routes.draw do
  resources :users do
    get 'users', to: 'users#index'
    get 'users/:username', to: 'users#show'
    post 'users', to: 'users#create'
    get 'users/:username/edit', to: 'users#edit'
    patch 'users', to: 'users#update'
    delete 'users/:username', to: 'users#destroy'
  end
end
