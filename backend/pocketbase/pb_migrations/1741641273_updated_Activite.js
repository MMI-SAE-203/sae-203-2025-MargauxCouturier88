/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // update field
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
      "Adulte",
      "Pour tous"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // update field
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
})
