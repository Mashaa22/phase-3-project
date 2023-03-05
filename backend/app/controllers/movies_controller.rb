class MoviesController < ApplicationController


   get '/movies' do
    content_type :json
    movies = Movie.includes(:comments)
    movies.to_json(include: :comments)
  end

# GET /movies
# Get a list of all movies
get '/movies' do
  content_type :json
  movies = Movie.all
  movies.to_json
end

# POST /movies
# Create a new movie
post '/movies' do
  content_type :json
  movie = Movie.new(title: params[:title], genre: params[:genre], image_url: params[:image_url], description: params[:description])

  if movie.save
    status 201
    movie.to_json
  else
    status 400
    movie.errors.to_json
  end
end

# GET /movies/:id
# Get a single movie by id
get '/movies/:id' do
  content_type :json
  movie = Movie.find_by(id: params[:id])

  if movie
    movie.to_json
  else
    status 404
  end
end

# PUT /movies/:id
# Update a movie by id
put '/movies/:id' do
  content_type :json
  movie = Movie.find_by(id: params[:id])

  if movie
    movie.title = params[:title] if params[:title]
    movie.genre = params[:genre] if params[:genre]
    movie.image_url = params[:image_url] if params[:image_url]
    movie.description = params[:description] if params[:description]

    if movie.save
      movie.to_json
    else
      status 400
      movie.errors.to_json
    end
  else
    status 404
  end
end

# DELETE /movies/:id
# Delete a movie by id
delete '/movies/:id' do
  content_type :json
  movie = Movie.find_by(id: params[:id])

  if movie
    movie.destroy
    status 204
  else
    status 404
  end
end
end
