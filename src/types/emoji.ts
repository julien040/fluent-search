/* 
Example type for an emoji object

"Vulcan salute": {
        "name": "Vulcan salute",
        "variant": [
            {
                "3D": "assets/Vulcan salute/Medium-Dark/vulcan_salute_3d_medium-dark.png",
                "Color": "assets/Vulcan salute/Medium-Dark/vulcan_salute_color_medium-dark.svg",
                "Flat": "assets/Vulcan salute/Medium-Dark/vulcan_salute_flat_medium-dark.svg"
            },
            {
                "3D": "assets/Vulcan salute/Medium-Light/vulcan_salute_3d_medium-light.png",
                "Color": "assets/Vulcan salute/Medium-Light/vulcan_salute_color_medium-light.svg",
                "Flat": "assets/Vulcan salute/Medium-Light/vulcan_salute_flat_medium-light.svg"
            },
            {
                "3D": "assets/Vulcan salute/Medium/vulcan_salute_3d_medium.png",
                "Color": "assets/Vulcan salute/Medium/vulcan_salute_color_medium.svg",
                "Flat": "assets/Vulcan salute/Medium/vulcan_salute_flat_medium.svg"
            },
            {
                "3D": "assets/Vulcan salute/Default/vulcan_salute_3d_default.png",
                "Color": "assets/Vulcan salute/Default/vulcan_salute_color_default.svg",
                "Flat": "assets/Vulcan salute/Default/vulcan_salute_flat_default.svg",
                "High Contrast": "assets/Vulcan salute/Default/High Contrast/vulcan_salute_high_contrast_default.svg"
            },
            {
                "3D": "assets/Vulcan salute/Light/vulcan_salute_3d_light.png",
                "Color": "assets/Vulcan salute/Light/vulcan_salute_color_light.svg",
                "Flat": "assets/Vulcan salute/Light/vulcan_salute_flat_light.svg"
            },
            {
                "3D": "assets/Vulcan salute/Dark/vulcan_salute_3d_dark.png",
                "Color": "assets/Vulcan salute/Dark/vulcan_salute_color_dark.svg",
                "Flat": "assets/Vulcan salute/Dark/vulcan_salute_flat_dark.svg"
            }
        ],
        "glyph": "\ud83d\udd96",
        "keywords": [
            "finger",
            "hand",
            "spock",
            "vulcan",
            "vulcan salute"
        ]
    },

*/

// Type for an emoji

export interface Emoji {
  name: string;
  variant: Variant[];
  glyph: string;
  keywords: string[];
}

// Type for a variant of an emoji

export interface Variant {
  [key: string]: string;
}
