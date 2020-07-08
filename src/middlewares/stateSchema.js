export default {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "auth": true,
            "chirps": [
                "First chirp",
                "Second chirp"
            ]
        }
    ],
    "required": [
        "auth",
        "chirps"
    ],
    "additionalProperties": true,
    "properties": {
        "auth": {
            "$id": "#/properties/auth",
            "type": "boolean",
            "title": "The auth schema",
            "description": "An explanation about the purpose of this instance.",
            "default": false,
            "examples": [
                true
            ]
        },
        "chirps": {
            "$id": "#/properties/chirps",
            "type": "array",
            "title": "The chirps schema",
            "description": "An explanation about the purpose of this instance.",
            "default": [],
            "examples": [
                [
                    "First chirp",
                    "Second chirp"
                ]
            ],
            "additionalItems": true,
            "items": {
                "anyOf": [
                    {
                        "$id": "#/properties/chirps/items/anyOf/0",
                        "type": "string",
                        "title": "The first anyOf schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "First chirp",
                            "Second chirp"
                        ]
                    }
                ],
                "$id": "#/properties/chirps/items"
            }
        }
    }
}