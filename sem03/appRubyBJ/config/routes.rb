Rails.application.routes.draw do
  root 'proyecto#index'
  get 'bootstrap-con-jquery', to: 'proyecto#jqueryejemplo'
  get 'calculadora-de-sueldo-neto', to: 'proyecto#calcularsueldo'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
