json.extract! producto, :id, :codigo, :nombre, :cantidad, :precio, :created_at, :updated_at
json.url producto_url(producto, format: :json)
