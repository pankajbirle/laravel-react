let years = [];
for (let i = 2007; i > 1900; i--) {
    years.push(i);
}

export const english = {

    survey_title: 'Test Survey',

    intro: `<p>Thanks for visiting the Soap & Glory Garage! We value your thoughts and feedback. Take this survey and you’ll receive a $10 coupon.</p>
    <p>Also, based on your responses, you may be invited to try a brand new technology in which you can provide a response using your device’s webcam/camera and microphone. You will receive an additional incentive for your participation. This is completely optional and you may choose to decline.</p>
    <p>&nbsp;</p>`,
    terms_condition: `<p>No Purchase necessary.  Offer open to all US residents who are 21 years of age or older.   Offer Valid DATES of specific event, 2018 ("Offer Period"). To enter, complete and submit The Nielsen Company survey (“Survey”) and take a screenshot of the Code presented on the Thank You page to a Twisted Tea Crew Member. The Survey is located at INSERT URL and must be completed no later than 11:59 PM ET DATE.  This offer is limited to one (1) Code per person. Entrants must complete the Survey and present the redemption screen code on site during the program.  The offer cannot be redeemed later.   The Code cannot be sold or bought. Void if sold or exchanged for compensation. Any unused value will be forfeited. Code Terms of Use apply and can be found at the Code redemption site: WEBSITE.   Cannot be combined with other offers.  Additional limitations may apply. Void where prohibited by law.  The Nielsen Company reserves the right to discontinue this offer at any time.</p>`,
    terms_condition_label: "Please select the terms & conditions",
    button_name: "Continue",
    back: "Back",
    record_video: "Record Video",
    re_record_video: "Re-record video",
    video_uploaded_success: "Thank you, your video has been added to the survey.",
    re_record_video_message: "If you would like to re-record your video please press the re-record link below. Otherwise press the finish survey button to complete.",

    labels: {
        choose_language: "Please select the language",
        q1: "<span>Q1</span> Are you...?",
        q2: "<span>Q2</span> What year were you born?",
        q3: "<span>Q3</span> Before visiting the Soap &amp; Glory Garage at Bonnaroo, had you ever heard of Soap &amp; Glory?",
        q4: "<span>Q4</span> Before visiting the Soap &amp; Glory Garage at Bonnaroo, have you ever used any of their products before?",
        q5: "<span>Q5</span> Which Soap &amp; Glory products have you used? <em>Please select all that apply.</em>",
        q6: "<span>Q6</span> What did you do in the Soap &amp; Glory tent? <em>Please select all that apply.</em>",
        q7: "<span>Q7</span> Based on the impression that the sponsorship of Bonnaroo gives you about Soap &amp; Glory, how much do you agree or disagree with the following? It makes me think Soap &amp; Glory is…",
        q8: "<span>Q8</span> On a scale of not so unique and different [1] to very unique and different [5], where would you place this brand activation?",
        q9: "<span>Q9</span> If you were buying cosmetics in the next six months, how would this sponsorship of Bonnaroo affect your likelihood of considering Soap &amp; Glory?",
        q10: "<span>Q10</span> How likely are you to recommend to your friends or family to purchase Soap &amp; Glory products?",
        q11: "<span>Q11</span> Which of the following cosmetics have you used in the past month?<em>Please select all that apply</em>",
        q12: `<label><span>Q12</span></label>
        <p>For the next question, we would like to discuss in more detail your perceptions of Soap &amp; Glory.</p>
        <p>We find we get richer responses by having you record a video rather than type out your response.</p>
        <p>While you talk and answer our question, we would like you to use your device’s webcam/camera and microphone to capture your response. Your video responses will be used strictly for the purposes of this research.</p>
        <p>For recording a video response, you will receive an extra incentive.</p>
        <p>To make the recording as clear as possible, we are looking for you to:</p>
        <ul>
            <li>Provide as much detail as you can</li>
            <li>Make sure you have plenty of light so we can clearly see you</li>
            <li>Avoid places with lots of background noise so we can clearly hear you</li>
            <li>Show us - if you can, show us what you mean by holding an item up for us to see</li>
            <li>Relax and have fun!</li>
        </ul>
        <label>Would you like to participate?</label>`,
        q13: `<p>What do you think about Soap &amp; Glory being at Bonnaroo? Tell us in detail about what you did in the Soap &amp; Glory Garage.</p>
        <p>What was your favorite part? If you could tell Soap &amp; Glory one thing about your generation and what beauty means to you -- what would you tell them?</p>`,
    },
    questions: {        
        q1: { type: 'select', values: ['Male', 'Female', 'I don\'t identify with either'] },
        q2: { type: 'select', values: years },
        q3: { type: 'select', values: ['Yes', 'No', 'Not sure / don\'t know'] },
        q4: { type: 'select', values: ['Yes', 'No', 'Not sure / don\'t know'] },
        q5: { type: 'switch', values: ['question one', 'question two'] },
        q6: { type: 'switch', values: ['Had my makeup done', 'Used the photo booth', 'Sampled the products', 'Entered the sweepstakes', 'Engaged with the brand ambassador', 'Other', 'None of the above'] },

        q7a: { type: 'radio', title: 'For someone like me', values: ['Agree strongly', 'Agree slightly', 'Neither agree nor disagree', 'Disagree slightly', 'Strongly disagree'] },
        q7b: { type: 'radio', title: 'Authentic', values: ['Agree strongly', 'Agree slightly', 'Neither agree nor disagree', 'Disagree slightly', 'Strongly disagree'] },
        q7c: { type: 'radio', title: 'Fun', values: ['Agree strongly', 'Agree slightly', 'Neither agree nor disagree', 'Disagree slightly', 'Strongly disagree'] },
        q7d: { type: 'radio', title: 'Cool', values: ['Agree strongly', 'Agree slightly', 'Neither agree nor disagree', 'Disagree slightly', 'Strongly disagree'] },
        q7e: { type: 'radio', title: 'Is a modern brand', values: ['Agree strongly', 'Agree slightly', 'Neither agree nor disagree', 'Disagree slightly', 'Strongly disagree'] },
        q7f: { type: 'radio', title: 'Has innovative products', values: ['Agree strongly', 'Agree slightly', 'Neither agree nor disagree', 'Disagree slightly', 'Strongly disagree'] },

        q8: { type: 'select', values: ['1. Not so unique and different', '2', '3. Somewhat unique and different', '4', '5. Very unique and different'] },
        q9: { type: 'select', values: ['More likely to consider Soap & Glory', 'Less likely to consider Soap & Glory', 'Makes no difference', 'Less likely to consider Soap & Glory'] },
        q10: { type: 'select', values: ['Very likely', 'Somewhat likely', 'Neither likely nor unlikely', 'Somewhat unlikely', 'Very unlikely'] },
        q11: { type: 'switch', values: ['Mascara', 'Blush', 'Foundation', 'Lipstick', 'Lip Gloss', 'Bronzer', 'Body Wash', 'Other', 'None of these'] },
        q12: { type: 'select', values: ['Sounds good, let’s continue', 'No thank you'] }
    },
    thank: 'Thank you',
    thankyou: `Thank you for completing the Soap & Glory survey, here is your Live Nation Festival Cash Code. Please screengrab it for use at a later date.`,
    coupon_error: 'Sorry you have reached your maximum allowed coupons.'
};