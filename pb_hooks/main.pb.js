/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/records", (e) => {
  const records = $app.findAllRecords("records");
  return e.json(200, records);
});

routerAdd("POST", "/records", (e) => {
  const recordsCollection = $app.findCollectionByNameOrId("records");
  const record = new Record(recordsCollection);
  const body = e.requestInfo().body;
  record.set("meter", body.meter);
  $app.save(record);
  return e.json(201, record);
});
