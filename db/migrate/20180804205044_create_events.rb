class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :sub_title
      t.text :body
      t.text :image
      t.integer :index
      t.string :date
      t.text :link
      t.string :link_text

      t.timestamps
    end
  end
end
