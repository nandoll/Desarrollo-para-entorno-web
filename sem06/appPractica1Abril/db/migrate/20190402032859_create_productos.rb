class CreateProductos < ActiveRecord::Migration[5.2]
  def change
    create_table :productos do |t|
      t.string :codigo, limit: 5
      t.string :nombre, limit: 10
      t.integer :cantidad
      t.decimal :precio, precision: 15, scale: 2

      t.timestamps
    end
  end
end
