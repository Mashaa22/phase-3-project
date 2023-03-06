class CommentsController < ApplicationController
    # Get all comments
    get "/comments" do
      comments = Comment.all
      comments.to_json
    end
  
    # Create a comment for a specific movie
    post "/movies/:movie_id/comments" do
      movie = Movie.find_by(id: params[:movie_id])
  
      if movie.nil?
        status 404
        return { error: "Movie not found" }.to_json
      end
  
      comment = Comment.new(comment: params[:comment])
      comment.movie = movie
  
      if comment.save
        status 201
        { success: "Comment created" }.to_json
      else
        status 400
        { error: comment.errors.full_messages.join(", ") }.to_json
      end
    end
  
    # Delete a comment
    delete "/comments/:id" do
      count_comments = Comment.where(id: params[:id]).count()
  
      if count_comments > 0
        comment = Comment.find(params[:id])
        comment.destroy
        { success: "Comment deleted" }.to_json
      else
        status 404
        { error: "Comment not found" }.to_json
      end
    end
  end
  