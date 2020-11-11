const main = (sentence) => {
    return shuffle(sentenceChop(sentence)).join(' ');
}

const sentenceChop = sentence => {
    return sentence.split(' ');
}

const generateWordFlip = choppedSentence => {
    return shuffle(choppedSentence);
}

const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}