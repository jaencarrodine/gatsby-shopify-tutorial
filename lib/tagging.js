const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
deepai.setApiKey('a856d2aa-7615-45f7-b6a2-d8ba2324b116');



const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');
async function tagText() {
    var resp = await deepai.callStandardApi("text-tagging", {
        text:`I was told about this product and how well it worked.  I ordered it after reading a few of the reviews.  When it arrived, I happened to look at the ingredients.  I was shocked to see it is a simple aspirin product.  Each dose of Blowfish delivers 500 mg of aspirin and 60 mg of caffeine.  The second photo (white label) are the ingredients of BC powder.  Each dose delivers 845 mg of aspirin and 65 mg of caffeine.  12 dollars for twelve doses.  Gotta hand it to them, they made money off of this marketing strategy.  Sooooooooo, save your money and go buy some aspirin or alka seltzer.  For those of you that claim this is the most awesomest hangover cure EVER, well....  There's this thing called the placebo effect...`
    });
    console.log(resp);
}

async function clusterText(){

    const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
    const formData = new FormData();
    let txt = fs.readFileSync('./data.txt', 'utf8');
    
    
    formData.append("key", "b05ff5159ca18cd00133c6d68c6e9abf");
    formData.append("lang", "en");
    formData.append("txt", txt);
    
    
    // Make a request for a user with a given ID

    const requestOptions ={
        method: 'POST',
        body: formData,
        redirect: 'follow'
    }

    /*const response = fetch("https://api.meaningcloud.com/clustering-1.1", requestOptions)
  .then(response => {
    console.log(response), 
    console.log(response.json())
  })*/
  
    
   const response = await axios.post('https://api.meaningcloud.com/clustering-1.1',formData, ).then(function (response) {
        console.log(response)
    });
}

clusterText()



