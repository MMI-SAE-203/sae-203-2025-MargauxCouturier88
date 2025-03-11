/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_91977388",
    "hidden": false,
    "id": "relation3682027287",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "film_associee",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // remove field
  collection.fields.removeById("relation3682027287")

  return app.save(collection)
})
