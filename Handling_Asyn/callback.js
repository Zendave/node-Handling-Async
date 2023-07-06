const userleft=false
const userWatchingCatMeme=true
function wathTutorialCallback(callback,errorCallback)
{
    if(userleft){
        errorCallback(
            {
                name:'User Left',
                message:'Soory:('
            })
        }
            else if(userWatchingCatMeme)
            {
                errorCallback({
                    name:'User watching Cat Meme',
                    message:'webDevSimplified<cat'
                })
            }
            else{
                callback('Thumbs up and Subscribe')
            }
    }
    wathTutorialCallback((message)=>{
        console.log("Success "+message)
    },(error)=>{
        console.log(error.name+''+error.message)
    })