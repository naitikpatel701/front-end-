function getChannels(jsonString){

    let channels=JSON.parse(jsonString);
    return channels;
}

let data='["CodeWithHarry","Apna College","Geeky Shows"]';

console.log(getChannels(data));
