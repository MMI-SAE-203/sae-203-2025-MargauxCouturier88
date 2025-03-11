/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select3019482895",
    "maxSelect": 1,
    "name": "catergorie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Enfant",
      "Adulte"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // remove field
  collection.fields.removeById("select3019482895")

  return app.save(collection)
})
