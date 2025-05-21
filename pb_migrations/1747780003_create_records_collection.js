migrate((app) => {
  const collection = new Collection({
    type: "base",
    name: "records",
    listRule: "",
    viewRule: "",
    createRule: "",
    updateRule: null,
    deleteRule: null,
    fields: [
      {
        type: "number",
        name: "meter",
        required: true,
      },
    ],
  });

  app.save(collection);
});
