class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.text :comment
      t.references :movie, foreign_key: true
    end

    add_foreign_key :comments, :movies
  end
end
