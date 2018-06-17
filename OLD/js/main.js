window.onload = function() {

/**
 * 
 * @param {*string} url Url naar de online Database
 * @param {*function} successHandler Functie die uitgevoerd wordt bij succesvol laden DB
 * @param {*function} errorHandler Functie die uitgevoerd wordt bij falen laden DB
 */
function getJSON(url, successHandler, errorHandler){
    var xhr = typeof XMLHttpRequest != 'undefined'
        ? new XMLHttpRequest()
        : new ActiveXObject('Microsoft.XMLHTTP');

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4){
            if (xhr.status == 200) {
                var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
                successHandler && successHandler(data);
            } else {
                errorHandler && errorHandler(status);
            }
        }
    };
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.send();

}

/*
imgElements = document.getElementsByClassName('thumbnail'); //selecteert de elementen die thumbnail zijn
console.log(imgElements);
urlVideo = [];
var videoIdArray = [];
var x = 0;



for (i = 0; i < imgElements.length; i++){ //for-loop over de verschillende thumbnails, de image wordt er in geïntegreerd
    
    videoId = imgElements[i].getAttribute("id"); //de id van de video wordt uit de id-attribute van de thumbnail gehaald
     //deze id wordt in de API van Vimeo gestoken om hieruit de afbeelding te halen
    urlVideo.push("http://vimeo.com/api/v2/video/"+videoId+".json");
    console.log(urlVideo);
    videoIdArray[i] = videoId;
    console.log(videoIdArray[i]);

    getJSON("http://vimeo.com/api/v2/video/"+videoIdArray[i]+".json",
        function(data) {
                console.log(data);
                for (i=0; i<videoIdArray.length; i++){
                    document.getElementById(videoIdArray[i]).setAttribute('src',data[0].thumbnail_medium);
                    console.log(data[0].thumbnail_medium);
                }
    
    
        },
        function(status) {
            console.log(status);
    });
}
*/

imgElements = document.getElementsByClassName('thumbnail'); //selecteert de elementen die thumbnail zijn
var thumbnailObject = {};
urlVideo = [];
var videoIdArray = [];
var thumbnailArray = [];

for (i = 0; i < imgElements.length; i++){ //for-loop over de verschillende thumbnails, de image wordt er in geïntegreerd
    
    videoId = imgElements[i].getAttribute("id"); //de id van de video wordt uit de id-attribute van de thumbnail gehaald
     //deze id wordt in de API van Vimeo gestoken om hieruit de afbeelding te halen
    urlVideo.push(videoId);
    console.log(urlVideo);
    videoIdArray[i] = videoId;
    console.log(videoIdArray[i]);

    getJSON("http://vimeo.com/api/v2/video/"+videoIdArray[i]+".json",
        function(data) {
                console.log(data);
                thumbnailObject.id = urlVideo;
                thumbnailArray.push(data[0].thumbnail_medium)
                thumbnailObject.url = thumbnailArray;
                console.log(thumbnailObject.id[0]);
                document.getElementById(thumbnailObject.id[0]).setAttribute('src',thumbnailObject.url[0]);
                
    
    
        },
        function(status) {
            console.log(status);
    });
}

/*async function placeThumbnail (){
    var asyncObj = await getJSON("http://vimeo.com/api/v2/video/"+videoIdArray[i]+".json",
    function(data) {
            console.log(data);
            thumbnailObject.id = urlVideo;
            thumbnailArray.push(data[0].thumbnail_medium)
            thumbnailObject.url = thumbnailArray;
            console.log(thumbnailObject);
            return thumbnailObject;                


    },
    function(status) {
        console.log(status);
});
    for (i=0; i < thumbnailObject.length; i ++){
        document.getElementById(thumbnailObject.id[i]).setAttribute('src',thumbnailObject.url[i]);
        console.log(thumbnailObject.id[i]);
    }
};*/

    






}