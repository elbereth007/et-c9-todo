Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # next 2 lines added 13 jul 17 for static page/tasks api (lesson 4)
  root 'static_pages#index'
  resources :tasks
  
end
