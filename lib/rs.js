
const puppeteer = require('puppeteer')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function scrapeUrlReviews(url){

    //move browser to argument
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36')
    let allPagesScraped = false
    let pageNumber = 0


    const csvWriter = createCsvWriter({
        path: './cheers-reviews.csv',
        header: [
            {id: 'reviewText', title: 'Review Text'},
            {id: 'reviewTitle', title: 'Review Title'},
            {id: 'reviewRating', title: 'ReviewRating'},
            {id: 'reviewStars', title: 'Review Stars'},
        ]
    });

    //while(!allPagesScraped){
    let allReviews = []
    while(!allPagesScraped){
        pageNumber += 1
        await page.goto(url + pageNumber, {waitUntil: 'networkidle2'})
        console.log(`scraping page ${pageNumber}`)
        let reviews = await page.$$('div.a-section.review.aok-relative')
        let pageReviews = []
        for(const review of reviews){
            let reviewObj = {}
            let reviewText = await review.$eval('span.review-text',el => el.textContent)
            reviewText = reviewText.replace(/(\r\n|\n|\r)/gm, "")
            reviewText = reviewText.trim()
            reviewObj.reviewText = reviewText
 

            let reviewTitle = await review.$eval('a.review-title',el => el.textContent)
            reviewTitle = reviewTitle.replace(/(\r\n|\n|\r)/gm, "")
            reviewTitle = reviewTitle.trim()
            reviewObj.reviewTitle = reviewTitle
            try{
                let reviewRating = await review.$eval('span.cr-vote-text',el => el.textContent)
                reviewRating = reviewRating.replace(/(\r\n|\n|\r)/gm, "")
                reviewRating = reviewRating.trim()
                reviewObj.reviewRating = reviewRating
            }catch(e){
                reviewObj.reviewRating = 'no rating'
            }

            let reviewStars = await review.$eval('span.a-icon-alt',el => el.textContent)
            reviewObj.reviewStars = reviewStars

            allReviews.push(reviewObj)
            pageReviews.push(reviewObj)
            //console.log(pageReviews)
        }

        if(pageReviews.length === 0){
            allPagesScraped = true
        }
        csvWriter.writeRecords(pageReviews)       
            .then(() => {
                console.log('...Done');
            });

    }

    browser.close()
}
    
    
    // get user agent from looking it up on google, prevents pages from detecting the scraper as a robot
    /*
    await page.waitForSelector('section.plp-main.plp-container');
    let boards = await page.$$('div.ui-pl-expandable.js-pl-expandable')
    let company = await board.$eval('span.ui-pl-name-brand.qa-brand-name', el => el.innerText)*/


const url = 'https://www.amazon.com/Cheers-Formerly-Hangover-Dihydromyricetin-Prevention/product-reviews/B079P5DSTK/ref=cm_cr_arp_d_paging_btm_next_2?ie=UTF8&reviewerType=all_reviews&pageNumber='

scrapeUrlReviews(url)
