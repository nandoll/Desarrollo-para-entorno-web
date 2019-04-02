class Producto < ApplicationRecord
    validates :codigo, :nombre, :cantidad, :precio, presence:true

    validates :codigo, uniqueness:{
        message: 'El DNI ya se encuentra registrado'
    }
    validates :codigo, length:{
        is: 5,
        message: 'El código debe tener 5 dígitos'
    }
    
    validates :nombre,  length:{
        minimum: 5,
        maximum: 10,
        too_short: 'Como mínimo debe tener %{count} caractéres',
        too_long: 'No puede contener más de %{count} caractéres'
    }

    validates :cantidad,  numericality:{
        only_integer: true,        
        greater_than: 1,
        less_than: 20,
        
    }
    
    validates :precio,  numericality:{
         
        greater_than: 1.0,
        less_than: 15.0
    }


end