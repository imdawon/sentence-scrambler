const main = (sentence) => {
    let choppedSentenceArr = sentenceChop(sentence);
    console.log(shuffle(choppedSentenceArr).join(' '));
}

const sentenceChop = sentence => {
    let choppedSentenceArr = sentence.split(' ');
    return choppedSentenceArr;
}

const generateWordFlip = choppedSentence => {
    return shuffle(choppedSentence);
}

const shuffle = array => {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array;
}

main('I can do that hold my beer')