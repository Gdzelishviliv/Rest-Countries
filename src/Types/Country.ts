export interface CountryTs{
    [x: string]: any
    name:string,
    nativeName:string,
    population:number,
    region:string,
    subregion:string,
    capital:string,
    flags: {
        png: string;
      };
    topLevelDomain:[
        string
    ],
    currencies:[
        {
            name:string
        }
    ],
    languages:[
        {
            name:string
        }
    ],
    borders:[
        string
    ]
}