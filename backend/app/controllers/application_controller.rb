class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  

  get "/home" do
    'Rest Api'
  end
end



