import react from"react";
import"./profileMenu.css";
import{useMsal}from"@azure/msal-react";
import{loginRequest}from"../../../authConfig.js";
import{callMsGraphForPhoto,callMsGraphForUser}from"../../../graph.js";
const ProfileMenu=props=>{

    react.useEffect(()=>{
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForUser(response.accessToken).then(response=>setGraphData(response));
        }).catch(e=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForUser(response.accessToken).then(response=>setGraphData(response));
            });
        });
    },[]);

    react.useEffect(()=>{
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForPhoto(response.accessToken).then(response=>setPhoto((window.URL||window.webkitURL).createObjectURL(response)));
        }).catch(e=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForPhoto(response.accessToken).then(response=>setPhoto((window.URL||window.webkitURL).createObjectURL(response)));
            });
        });
    },[]);


    function handleLogout(instance) {
        instance.logoutRedirect().catch(e => {
            console.error(e);
        });
    }

    const {instance}=useMsal();
    const[graphData,setGraphData]=react.useState(null);
    const{instance:instance2,accounts}=useMsal();
    const[photo,setPhoto]=react.useState(null);
    const name=accounts[0]&&accounts[0].name;

    return(
        <div id={props.profileIconClicked===false?"hideProfMenu":"profMenu"}>
            <div>
                <img id="profLogo"src="https://image.shutterstock.com/image-vector/silhouette-horses-running-blue-background-600w-704541676.jpg"alt="text" />
                <div>
                    <h5 id="signOut"onClick={()=>handleLogout(instance)}>Sign out</h5>
                </div>
            </div>
            <div>
                <img id="profMenuPic"src={photo}alt="text" />
            </div>
            <div id="profMenuData">
                <h3 className="profMenuData">{name}</h3>
                <p id="profMenuEmail"className="profMenuData">{graphData!==null?graphData.userPrincipalName:"userName@email.com"}</p>
                <a className="profMenuData profMenuLinks"href="microsoftAccount.com">My integration account</a>
                <a className="profMenuData profMenuLinks"href="microsoftProfile.com">My profile</a>
            </div>
        </div>
    );
}
export{ProfileMenu};