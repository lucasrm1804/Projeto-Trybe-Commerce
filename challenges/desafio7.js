db.produtos
  .find(
    { vendidos: { $ne: 50, $lt: 100 }, tags: { $exists: false } },
    { _id: false, nome: true, vendidos: true },
);
