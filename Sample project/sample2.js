function count(str){
    let words= str.trim().split(/\s+/);
    let wordCount=words.length;
    console.log(`Word count:${wordCount}`);

}
count("javaScript is a fun language");