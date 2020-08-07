class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name
      t.string :surname
      t.string :birth_date
      t.string :gender
      t.string :nationality

      t.timestamps
    end
  end
end
