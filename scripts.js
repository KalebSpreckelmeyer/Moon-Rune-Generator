const masterObject = [
    ["To be, or not to be: that is the question:", "Whether ’tis nobler in the mind to suffer", "The slings and arrows of outrageous fortune,", "Or to take arms against a sea of troubles,", "And by opposing end them? To die: to sleep;", "No more; and by a sleep to say we end", "The heart-ache and the thousand natural shocks", "That flesh is heir to, ’tis a consummation", "Devoutly to be wish’d."],
    ["Why did the bike fall over?", "It was too tired", "Why did the golfer get two pairs of pants?", "In case he got a hole in one.", "Why did the man get hit by a bike every day?", "He was in a vicious cycle.", "Why do seagulls fly over the sea?", "If they flew over the bay they would be baygulls."],
    ["Lorem ipsum dolor sit amet,", "consectetur adipiscing elit.", "Nunc pellentesque ipsum in pellentesque viverra.", "Aenean vestibulum lectus ligula,", "a posuere quam sagittis in.", "Quisque ut placerat turpis.", "Vivamus dui velit,", "ullamcorper id orci malesuada,", "suscipit cursus nisi.", "Vivamus ultrices viverra diam,", "sit amet interdum felis aliquet at.", "Sed et tortor non elit gravida aliquam a in risus.", "Nulla tristique cursus imperdiet.", "Sed consequat,", "odio et faucibus blandit,", "nulla augue faucibus tortor,", "non porta sem nibh id ligula.", "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;", "Maecenas feugiat condimentum justo sed vehicula.", "Etiam congue sem non lacus dictum,", "ac rutrum tellus hendrerit.", "Quisque mollis odio sed orci pharetra,", "at accumsan sapien tristique.", "Maecenas nunc erat,", "hendrerit in tempor non,", "lacinia quis felis.", "Morbi rutrum lacinia nisl ut facilisis.", "In hac habitasse platea dictumst."],
    ["The Godfather", "The Dark Knight", "The Shawshank Redemption", "Pulp Fiction", "The Lord of the Rings", "Citizen Kane", "Inception", "Angry Men", "Psycho", "Seven Samurai", "Vertigo", "Gone with the Wind"]
]

const randomnessFunction = (arr, num) => {
    let outputArray = [];
    //Maximum amount of "parts" the resulting string can contain
    let maxParts = 15;
    //Sets the amount of parts that the result will contain, maxing out at the set maximum
    let numOfParts = Math.floor(Math.random() * maxParts);
    for(let i = 0; i < numOfParts; i++){
        //chooses which array to go to this loop
        let randChoiceArr = Math.floor(Math.random() * arr.length);

        //chooses which string inside the chosen array to go to this loop
        let randChoiceItem = Math.floor(Math.random() * arr[randChoiceArr].length);

        //adds the string in question to the output array
        outputArray.push(arr[randChoiceArr][randChoiceItem]);
    }
    //stitches up the strings into a sentence for the return 
    return outputArray.join(" ");
}

console.log(randomnessFunction(masterObject));