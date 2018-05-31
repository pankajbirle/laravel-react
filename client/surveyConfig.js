let years = [];
for(let i = 2007; i>1900; i--){
    years.push(i);
}

var Config = {
    defaultBrand: "TwistedTea", /* Default, TwistedTea, JohnnieWalker */

    languages: [{
        name: "English",
        shortCode: "gb",
        value: "en"
    },
    {
        name: "German",
        shortCode: "de",
        value: "gr"
    },
    {
        name: "Hungarian",
        shortCode: "hu",
        value: "hg"
    },
    {
        name: "Italian",
        shortCode: "it",
        value: "it"
    },
    {
        name: "French",
        shortCode: "gf",
        value: "fr"
    }

]
}

export default Config;