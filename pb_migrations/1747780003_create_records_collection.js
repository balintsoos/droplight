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
        name: "meter",
        type: "number",
        required: true,
      },
      {
        name: "created",
        type: "autodate",
        onCreate: true,
      },
    ],
  });

  app.save(collection);
});
