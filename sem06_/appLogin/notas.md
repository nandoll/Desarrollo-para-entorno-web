crear un nuevo proyecto
rails new appLogin

agregar la gema de Devise
abrir el archivo Gemfile
agregar: gem 'devise', '~> 4.5.0'

#ejecutar bundle install

rails g devise:install

rails g devise:usuario

rails g devise:views

rails db:migrate
rails s