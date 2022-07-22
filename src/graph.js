import { graphConfig } from "./authConfig";

/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */
export async function callMsGraphForUser(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphMeUserEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}
// The links below were for accessing the tokens in the function directly under them:
// https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0

export async function callMsGraphForPhoto(accessToken){
    const headers=new Headers();
    const bearer=`Bearer ${accessToken}`;
    headers.append("Authorization",bearer);
    headers.append("Content-Type","image/jpg");
    const options={
        method:"GET",
        headers:headers
        };
    return fetch(graphConfig.graphMePhotoEndpoint,options)
    .then(response=>response.blob())
    .then(blob=>blob)
    .catch(error=>console.log(error));
}

export function callMsGraphForLists(accessToken){
    return fetch(graphConfig.graphMeListsEndpoint, {
        method:"GET",
        headers:{ "Authorization":`Bearer ${accessToken}`}
    })
    .then(response=>response.json())
    .catch(error=>console.log(error));
}

export function callMsGraphForCreateList(accessToken,str){
    return fetch(graphConfig.graphMeCreateListEndpoint, {
        method:"POST",
        headers:{ 
            "Authorization":`Bearer ${accessToken}`,
            "Content-Type":"application/json"
            },
        body:JSON.stringify({displayName:str})
    });
}

export async function callMsGraphForListTasks(accessToken){
    const headers=new Headers();
    const bearer=`Bearer ${accessToken}`;
    headers.append("authorization",bearer);
    const options={
        method:"GET",
        headers:headers
    };
    return fetch(graphConfig.graphMeListTasksEndpoint,options)
    .then(response=>response.json())
    .catch(error=>console.log(error));
}

export async function callMsGraphForCreateTask(accessToken,string){
    return fetch(graphConfig.graphMeCreateTaskEndpoint,{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${accessToken}`,
            "content-Type":"application/json"
        },
        body:JSON.stringify({title:string})
    });
}