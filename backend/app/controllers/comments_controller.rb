class CommentsController < Sinatra::Base


# POST /movies/:movie_id/comments
# Create a new comment for a movie
post '/movies/:movie_id/comments' do
  content_type :json
  movie = Movie.find_by(id: params[:movie_id])

  if movie
    comment = Comment.new(body: params[:body], movie_id: movie.id)

    if comment.save
      status 201
      comment.to_json
    else
      status 400
      comment.errors.to_json
    end
  else
    status 404
  end
end

# PUT /movies/:movie_id/comments/:id
# Update a comment for a movie
put '/movies/:movie_id/comments/:id' do
  content_type :json
  comment = Comment.find_by(id: params[:id], movie_id: params[:movie_id])

  if comment
    comment.body = params[:body] if params[:body]

    if comment.save
      comment.to_json
    else
      status 400
      comment.errors.to_json
    end
  else
    status 404
  end
end

# DELETE /movies/:movie_id/comments/:id
# Delete a comment for a movie
delete '/movies/:movie_id/comments/:id' do
  content_type :json
  comment = Comment.find_by(id: params[:id], movie_id: params[:movie_id])

  if comment
    comment.destroy
    status 204
  else
    status 404
  end
end
end