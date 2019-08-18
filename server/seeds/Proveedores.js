exports.seed = function(knex, Promise) {
  // DeletLL existing entries
  return knex('proveedores')
    .then(function () {
     
  

      // Inserts seed entries
      return knex('proveedores').insert([
        {nombre: 'Coca Cola',      contacto: '0988047822', celular: '0988047822',  fijo: '3032811', categoriaid: 2},
        {nombre: 'Cool Tea',       contacto: '086456001',  celular: '0986784574',  fijo: '3032811', categoriaid: 2},
        {nombre: 'Monster',        contacto: '1986321001', celular: '0986789874',  fijo: '3032811', categoriaid: 2},
        {nombre: 'Orangine',       contacto: '1792520001', celular: '0981584574',  fijo: '3032811', categoriaid: 2},
        {nombre: 'Pepsi',          contacto: '0879534001', celular: '0986787898',  fijo: '3032811', categoriaid: 2},
        {nombre: 'Red Bull',       contacto: '0354224001', celular: '0986787894',  fijo: '3032811', categoriaid: 2},
        {nombre: 'Toni',           contacto: '1772152001', celular: '0986784574',  fijo: '3032811', categoriaid: 3},
        {nombre: 'Pronaca',        contacto: '0988047822', celular: '0988047822',  fijo: '3032811', categoriaid: 1},
        {nombre: 'La Favorita',    contacto: '086456001',  celular: '0986784574',  fijo: '3032811', categoriaid: 1},
        {nombre: 'Real',           contacto: '1986321001', celular: '0986784574',  fijo: '3032811', categoriaid: 1},
        {nombre: 'Nestle',         contacto: '1792520001', celular: '0986784574',  fijo: '3032811', categoriaid: 3},
        {nombre: 'Confiteca',      contacto: '0879534001', celular: '0986784574',  fijo: '3032811', categoriaid: 3},
        {nombre: 'Pinguino',       contacto: '0354224001', celular: '0986784574',  fijo: '3032811', categoriaid: 3},
        {nombre: 'Carli Snaks',    contacto: '1772152001', celular: '0986784574',  fijo: '3032811', categoriaid: 3},
        {nombre: 'Hit',            contacto: '0988047822', celular: '0988047822',  fijo: '3032811', categoriaid: 3},
        {nombre: 'Master',         contacto: '086456001',  celular: '0986784574',  fijo: '3032811', categoriaid: 6},
        {nombre: 'Mervisa',        contacto: '1986321001', celular: '0986784574',  fijo: '3032811', categoriaid: 6},
        {nombre: 'Ozz',            contacto: '1792520001', celular: '0986784574',  fijo: '3032811', categoriaid: 6},
        {nombre: 'Mr. Clean',      contacto: '0879534001', celular: '0986784574',  fijo: '3032811', categoriaid: 6},
        {nombre: 'Norteño',        contacto: '0988047822', celular: '0988047822',  fijo: '3032811', categoriaid: 5},
        {nombre: 'Pilsener',       contacto: '086456001',  celular: '0986784574',  fijo: '3032811', categoriaid: 5},
        {nombre: 'Swicth',         contacto: '1986321001', celular: '0986784574',  fijo: '3032811', categoriaid: 5},
        {nombre: 'Piña',           contacto: '1792520001', celular: '0986784574',  fijo: '3032811', categoriaid: 5},
        {nombre: 'Pausterisadora', contacto: '0879534001', celular: '0986784574',  fijo: '3032811', categoriaid: 4},
        
      ]);
    });
};