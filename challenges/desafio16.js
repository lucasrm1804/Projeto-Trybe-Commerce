db.produtos.updateMany(
  { nome: "Big Mac" },
  { $addToSet: { ultimaModificacao: new Date() } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: false, nome: true },
);