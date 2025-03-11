/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "file1225052706",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photo_realisateur",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(13, new Field({
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

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "select131993918",
    "maxSelect": 1,
    "name": "age_recommande",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("file1225052706")

  // remove field
  collection.fields.removeById("text1419297528")

  // remove field
  collection.fields.removeById("select131993918")

  return app.save(collection)
})
