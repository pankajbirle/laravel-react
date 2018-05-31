import LocalizedStrings from 'react-localization';
import {english} from './lang/en';
import {spanish} from './lang/sp';
import {reactLocalStorage} from "reactjs-localstorage";
import config from './surveyConfig';
import _ from 'lodash';

var englishLanguage = english[config.defaultBrand];
var spanishLanguage = spanish[config.defaultBrand];

const langs = new LocalizedStrings({
    en: englishLanguage,
    sp: spanishLanguage
});

 //const currentLang = !_.isEmpty(reactLocalStorage.getObject("user_auth_details")) ? 'en' : 'en';

 let currentLang = reactLocalStorage.get("defaultLanguage");
 if(typeof currentLang == 'undefined'){
    currentLang = 'en';
 }
 console.log("currentLang", currentLang);
langs.setLanguage(currentLang);

export default langs;