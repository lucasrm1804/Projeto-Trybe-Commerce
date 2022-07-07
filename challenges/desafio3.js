db.produtos
  .find({}, { nome: true, vendidos: true, _id: false })
  .limit(1);
