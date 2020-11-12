const main = (sentence) => {
    sentence = sentence.trim();
    if (!sentence) {
        return false, 'Form cannot be blank';
    }
    if (sentence.split(' ').length <= 1) {
        return false, 'Please enter at least two words';
    }

    return wordCaseConvert(
        shuffle(
            sentenceChop(sentence)).join(' '));
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

const wordCaseConvert = sentence => {
    sentence = sentence.toLowerCase();
    sentence = sentence + '.';
    return sentence[0].toUpperCase() + sentence.slice(1)
}

const formValidation = sentence => {
}