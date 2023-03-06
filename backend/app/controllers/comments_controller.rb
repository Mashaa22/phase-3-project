# class CommentsController < ApplicationController

# get "/comments" do
#     comments = Comment.all
#     comments.to_json
# end

# delete "/comments/:id" do
#     count_comments = Comment.where(id: params[:id]).count()
#         if count_comments>0
#             comment = Comment.find(params[:id])
#             comment.destroy
#             message = {:success => "comment deleted"}
#             message.to_json
#         else
#             message = {:error => "comment does not exist"}
#             message.to_json
#         end
# end

# post "/comments" do 
#     comment = params[:comment]
#     movie = params[:movie_id]

#     if (comment.present? && movie.present?)
#         comment = Comment.create(comment: comment, movie_id: movie)
#         if comment
#             message = {:success => "comment created success"}
#             message.to_json
#         else
#             message = {:error => "error saving comment"}
#             message.to_json
#         end
#     else
#         message = {:error => "fill all fields"}
#         message.to_json
#     end

# end
# end
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
  