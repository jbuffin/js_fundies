class CreateExamples < ActiveRecord::Migration
  def change
    create_table :examples do |t|
      t.string :title
      t.text :starting_point
      t.text :available_functions
      t.timestamps
    end
  end
end
