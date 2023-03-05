class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
    t.string :title
    t.string :director
    t.integer :year
    t.string :genre
    t.text :description
    t.string :image_url

    t.timestamps
  end
end

