# firehose track 6, lesson 4 - file created 13 jul 17 for static page/tasks api

class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.boolean :done, default: false
      t.timestamps
    end
  end
end
