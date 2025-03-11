/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("text1462424745")

  // remove field
  collection.fields.removeById("text1419297528")

  // update field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor4244734459",
    "maxSize": 0,
    "name": "synopsis",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // update field
  collection.fields.addAt(12, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3709889147",
    "maxSize": 0,
    "name": "bio_realisateur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1462424745",
    "max": 0,
    "min": 0,
    "name": "synopsis",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1419297528",
    "max": 0,
    "min": 0,
    "name": "bio_realisateur",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(14, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor4244734459",
    "maxSize": 0,
    "name": "syn",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // update field
  collection.fields.addAt(15, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3709889147",
    "maxSize": 0,
    "name": "bio",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
})
