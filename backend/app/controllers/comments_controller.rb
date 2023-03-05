class CommentsController < ApplicationController

get "/comments" do
    comments = Comment.all
    comments.to_json
end

delete "/comments/:id" do
    count_comments = Comment.where(id: params[:id]).count()
        if count_comments>0
            comment = Comment.find(params[:id])
            comment.destroy
            message = {:success => "comment deleted"}
            message.to_json
        else
            message = {:error => "comment does not exist"}
            message.to_json
        end
end

post "/comments" do 
    comment = params[:comment]
    movie = params[:movie_id]

    if (comment.present? && movie.present?)
        comment = Comment.create(comment: comment, movie_id: movie)
        if comment
            message = {:success => "comment created success"}
            message.to_json
        else
            message = {:error => "error saving comment"}
            message.to_json
        end
    else
        message = {:error => "fill all fields"}
        message.to_json
    end

end
end