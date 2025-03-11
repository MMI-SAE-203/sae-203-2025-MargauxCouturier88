/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // add field
  collection.fields.addAt(10, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor2650994303",
    "maxSize": 0,
    "name": "descrip",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // remove field
  collection.fields.removeById("editor2650994303")

  return app.save(collection)
})
