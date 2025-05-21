/// <reference path="../pb_data/types.d.ts" />

onBootstrap((e) => {
  e.next();
  console.log("App initialized!");
});

routerAdd("GET", "/records", (e) => {
  // TODO
  return e.json(200, [
    { id: 1, meter: 15 },
    { id: 2, meter: 24 },
  ]);
});

routerAdd("POST", "/records", (e) => {
  // TODO
  return e.json(201, {});
});
