import"./settingsMenu.css";
import react from"react";
const SettingsMenu=props=>{
    const[settingsMenuXhovered,setSettingsMenuXhovered]=react.useState(false);
    const[setting1on,setSetting1on]=react.useState(false);
    const[setting2on,setSetting2on]=react.useState(false);
    const[setting3on,setSetting3on]=react.useState(false);
    const[setting4on,setSetting4on]=react.useState(false);
    const[setting5on,setSetting5on]=react.useState(false);
    const[setting6on,setSetting6on]=react.useState(false);
    const[setting7on,setSetting7on]=react.useState(false);
    const[setting8on,setSetting8on]=react.useState(false);
    const[setting9on,setSetting9on]=react.useState(false);
    const[setting10on,setSetting10on]=react.useState(false);
    const[setting11on,setSetting11on]=react.useState(false);
    const[setting12on,setSetting12on]=react.useState(false);
    const[setting13on,setSetting13on]=react.useState(false);
    const[setting14on,setSetting14on]=react.useState(false);
    const[setting15on,setSetting15on]=react.useState(false);
    const[setting1hovered,setSetting1hovered]=react.useState(false);
    const[setting2hovered,setSetting2hovered]=react.useState(false);
    const[setting3hovered,setSetting3hovered]=react.useState(false);
    const[setting4hovered,setSetting4hovered]=react.useState(false);
    const[setting5hovered,setSetting5hovered]=react.useState(false);
    const[setting6hovered,setSetting6hovered]=react.useState(false);
    const[setting7hovered,setSetting7hovered]=react.useState(false);
    const[setting8hovered,setSetting8hovered]=react.useState(false);
    const[setting9hovered,setSetting9hovered]=react.useState(false);
    const[setting10hovered,setSetting10hovered]=react.useState(false);
    const[setting11hovered,setSetting11hovered]=react.useState(false);
    const[setting12hovered,setSetting12hovered]=react.useState(false);
    const[setting13hovered,setSetting13hovered]=react.useState(false);
    const[setting14hovered,setSetting14hovered]=react.useState(false);
    const[setting15hovered,setSetting15hovered]=react.useState(false);
    const[hoverId1,setHoverId1]=react.useState('');
    const[hoverId2,setHoverId2]=react.useState('');
    const[hoverId3,setHoverId3]=react.useState('');
    const[hoverId4,setHoverId4]=react.useState('');
    const[hoverId5,setHoverId5]=react.useState('');
    const[hoverId6,setHoverId6]=react.useState('');
    const[hoverId7,setHoverId7]=react.useState('');
    const[hoverId8,setHoverId8]=react.useState('');
    const[hoverId9,setHoverId9]=react.useState('');
    const[hoverId10,setHoverId10]=react.useState('');
    const[hoverId11,setHoverId11]=react.useState('');
    const[hoverId12,setHoverId12]=react.useState('');
    const[hoverId13,setHoverId13]=react.useState('');
    const[hoverId14,setHoverId14]=react.useState('');
    const[hoverId15,setHoverId15]=react.useState('');

    react.useEffect(()=>{
        if(setting1hovered===true){
            switch(setting1on){
                case true:{
                    setHoverId1("toggle-on");
                    break;
                }
                case false:{
                    setHoverId1("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId1('');
                    break;
                }
            }
        }
        if(setting2hovered===true){
            switch(setting2on){
                case true:{
                    setHoverId2("toggle-on");
                    break;
                }
                case false:{
                    setHoverId2("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId2('');
                    break;
                }
            }
        }
        if(setting3hovered===true){
            switch(setting3on){
                case true:{
                    setHoverId3("toggle-on");
                    break;
                }
                case false:{
                    setHoverId3("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId3('');
                    break;
                }
            }
        }
        if(setting4hovered===true){
            switch(setting4on){
                case true:{
                    setHoverId4("toggle-on");
                    break;
                }
                case false:{
                    setHoverId4("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId4('');
                    break;
                }
            }
        }
        if(setting5hovered===true){
            switch(setting5on){
                case true:{
                    setHoverId5("toggle-on");
                    break;
                }
                case false:{
                    setHoverId5("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId5('');
                    break;
                }
            }
        }
        if(setting6hovered===true){
            switch(setting6on){
                case true:{
                    setHoverId6("toggle-on");
                    break;
                }
                case false:{
                    setHoverId6("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId6('');
                    break;
                }
            }
        }
        if(setting7hovered===true){
            switch(setting7on){
                case true:{
                    setHoverId7("toggle-on");
                    break;
                }
                case false:{
                    setHoverId7("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId7('');
                    break;
                }
            }
        }
        if(setting8hovered===true){
            switch(setting8on){
                case true:{
                    setHoverId8("toggle-on");
                    break;
                }
                case false:{
                    setHoverId8("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId8('');
                    break;
                }
            }
        }
        if(setting9hovered===true){
            switch(setting9on){
                case true:{
                    setHoverId9("toggle-on");
                    break;
                }
                case false:{
                    setHoverId9("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId9('');
                    break;
                }
            }
        }
        if(setting10hovered===true){
            switch(setting10on){
                case true:{
                    setHoverId10("toggle-on");
                    break;
                }
                case false:{
                    setHoverId10("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId10('');
                    break;
                }
            }
        }
        if(setting11hovered===true){
            switch(setting11on){
                case true:{
                    setHoverId11("toggle-on");
                    break;
                }
                case false:{
                    setHoverId11("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId11('');
                    break;
                }
            }
        }
        if(setting12hovered===true){
            switch(setting12on){
                case true:{
                    setHoverId12("toggle-on");
                    break;
                }
                case false:{
                    setHoverId12("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId12('');
                    break;
                }
            }
        }
        if(setting13hovered===true){
            switch(setting13on){
                case true:{
                    setHoverId13("toggle-on");
                    break;
                }
                case false:{
                    setHoverId13("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId13('');
                    break;
                }
            }
        }
        if(setting14hovered===true){
            switch(setting14on){
                case true:{
                    setHoverId14("toggle-on");
                    break;
                }
                case false:{
                    setHoverId14("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId14('');
                    break;
                }
            }
        }
        if(setting15hovered===true){
            switch(setting15on){
                case true:{
                    setHoverId15("toggle-on");
                    break;
                }
                case false:{
                    setHoverId15("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId15('');
                    break;
                }
            }
        }

        if(setting1hovered===false&&setting2hovered===false&&setting3hovered===false&&setting4hovered===false&&setting5hovered===false&&setting6hovered===false&&setting7hovered===false&&setting8hovered===false&&setting9hovered===false&&setting10hovered===false&&setting11hovered===false&&setting12hovered===false&&setting13hovered===false&&setting14hovered===false&&setting15hovered===false){
            setHoverId1('');
            setHoverId2('');
            setHoverId3('');
            setHoverId4('');
            setHoverId5('');
            setHoverId6('');
            setHoverId7('');
            setHoverId8('');
            setHoverId9('');
            setHoverId10('');
            setHoverId11('');
            setHoverId12('');
            setHoverId13('');
            setHoverId14('');
            setHoverId15('');
            
        }
    },[setting1hovered,setting2hovered,setting3hovered,setting4hovered,setting5hovered,setting6hovered,setting7hovered,setting8hovered,setting9hovered,setting10hovered,setting11hovered,setting12hovered,setting13hovered,setting14hovered,setting15hovered]);

    const decideToggleClass=settingIsOn=>{
        if(settingIsOn===true){
            return"toggle";
        }
        else{
            return"darkToggle";
        }
    }

    return(
        <div id={props.settingsIconClicked===false?"hideSettingsMenu":"settingsMenu"}>
            <h2 id="settingsTitle">Settings</h2>
            <div id="settingsXdiv"onMouseEnter={()=>setSettingsMenuXhovered(true)}onMouseLeave={()=>setSettingsMenuXhovered(false)}onClick={()=>props.setSettingsIconClicked(false)}>
                <img id={settingsMenuXhovered===false?"settingsX":"darkSettingsX"}src="https://image.shutterstock.com/image-vector/cancel-cross-close-icon-vector-600w-294801173.jpg"alt="text" />
            </div>
            
            <h2 className="settingsMenuSectionTitles">General</h2>

            <label className="switchDescription"htmlFor="toggleDescription1"onMouseEnter={()=>setSetting1hovered(true)}onMouseLeave={()=>setSetting1hovered(false)}>Confirm before deleting</label>
            <input id={hoverId1}className={decideToggleClass(setting1on)}type="checkbox"name="toggleDescription1"onClick={()=>setSetting1on(!setting1on)} />
            <label className={setting1on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting1hovered(true)}onMouseLeave={()=>setSetting1hovered(false)}>Off</label>
            <label className={setting1on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting1hovered(true)}onMouseLeave={()=>setSetting1hovered(false)}>On</label>

            <label className="switchDescription"htmlFor="toggleDescription2"onMouseEnter={()=>setSetting2hovered(true)}onMouseLeave={()=>setSetting2hovered(false)}>Add new tasks on top</label>
            <input id={hoverId2}className={decideToggleClass(setting2on)}name="toggleDescription2"type="checkbox"onClick={()=>setSetting2on(!setting2on)} />
            <label className={setting2on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting2hovered(true)}onMouseLeave={()=>setSetting2hovered(false)}>Off</label>
            <label className={setting2on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting2hovered(true)}onMouseLeave={()=>setSetting2hovered(false)}>On</label>

            <label className="switchDescription"htmlFor="toggleDescription3"onMouseEnter={()=>setSetting3hovered(!setting3hovered)}onMouseLeave={()=>setSetting3hovered(false)}>Move starred tasks to top</label>
            <input id={hoverId3}className={decideToggleClass(setting3on)}name="toggleDescription3"type="checkbox"onClick={()=>setSetting3on(!setting3on)} />
            <label className={setting3on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting3hovered(!setting3hovered)}onMouseLeave={()=>setSetting3hovered(false)}>Off</label>
            <label className={setting3on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting3hovered(!setting3hovered)}onMouseLeave={()=>setSetting3hovered(false)}>On</label>

            <label className="switchDescription"htmlFor="toggleDescription4"onMouseEnter={()=>setSetting4hovered(!setting4hovered)}onMouseLeave={()=>setSetting4hovered(false)}>Play completion sound</label>
            <input id={hoverId4}className={decideToggleClass(setting4on)}name="toggleDescription4"type="checkbox"onClick={()=>setSetting4on(!setting4on)} />
            <label className={setting4on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting4hovered(!setting4hovered)}onMouseLeave={()=>setSetting4hovered(false)}>Off</label>
            <label className={setting4on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting4hovered(!setting4hovered)}onMouseLeave={()=>setSetting4hovered(false)}>On</label>

            <label className="switchDescription"htmlFor="toggleDescription5"onMouseEnter={()=>setSetting5hovered(!setting5hovered)}onMouseLeave={()=>setSetting5hovered(false)}>Show right-click menus</label>
            <input id={hoverId5}className={decideToggleClass(setting5on)}name="toggleDescription5"type="checkbox"onClick={()=>setSetting5on(!setting5on)} />
            <label className={setting5on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting5hovered(!setting5hovered)}onMouseLeave={()=>setSetting5hovered(false)}>Off</label>
            <label className={setting5on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting5hovered(!setting5hovered)}onMouseLeave={()=>setSetting5hovered(false)}>On</label>

            <label className="switchDescription"htmlFor="toggleDescription6"onMouseEnter={()=>setSetting6hovered(!setting6hovered)}onMouseLeave={()=>setSetting6hovered(false)}>Turn on reminder notifications</label>
            <input id={hoverId6}className={decideToggleClass(setting6on)}name="toggleDescription6"type="checkbox"onClick={()=>setSetting6on(!setting6on)} />
            <label className={setting6on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting6hovered(!setting6hovered)}onMouseLeave={()=>setSetting6hovered(false)}>Off</label>
            <label className={setting6on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting6hovered(!setting6hovered)}onMouseLeave={()=>setSetting6hovered(false)}>On</label>

            <label className="switchDescription"htmlFor="toggleDescription7"onMouseEnter={()=>setSetting7hovered(!setting7hovered)}onMouseLeave={()=>setSetting7hovered(false)}>Show tasks that seem important in My Day</label>
            <input id={hoverId7}className={decideToggleClass(setting7on)}name="toggleDescription7"type="checkbox"onClick={()=>setSetting7on(!setting7on)} />
            <label className={setting7on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting7hovered(!setting7hovered)}onMouseLeave={()=>setSetting7hovered(false)}>Off</label>
            <label className={setting7on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting7hovered(!setting7hovered)}onMouseLeave={()=>setSetting7hovered(false)}>On</label>

            <h2 className="settingsMenuSectionTitles">Smart lists</h2>

            <label className="switchDescription"htmlFor="toggleDescription8"onMouseEnter={()=>setSetting8hovered(!setting8hovered)}onMouseLeave={()=>setSetting8hovered(false)}>Important</label>
            <input id={hoverId8}className={decideToggleClass(setting8on)}name="toggleDescription8"type="checkbox"onClick={()=>setSetting8on(!setting8on)} />
            <label className={setting8on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting8hovered(!setting8hovered)}onMouseLeave={()=>setSetting8hovered(false)}>Off</label>
            <label className={setting8on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting8hovered(!setting8hovered)}onMouseLeave={()=>setSetting8hovered(false)}>On</label>

            <label className="switchDescription"htmlFor="toggleDescription9"onMouseEnter={()=>setSetting9hovered(!setting9hovered)}onMouseLeave={()=>setSetting9hovered(false)}>Planned</label>
            <input id={hoverId9}className={decideToggleClass(setting9on)}name="toggleDescription9"type="checkbox"onClick={()=>setSetting9on(!setting9on)} />
            <label className={setting9on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting9hovered(!setting9hovered)}onMouseLeave={()=>setSetting9hovered(false)}>Off</label>
            <label className={setting9on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting9hovered(!setting9hovered)}onMouseLeave={()=>setSetting9hovered(false)}>On</label>

            <label className="switchDescription"htmlFor="toggleDescription10"onMouseEnter={()=>setSetting10hovered(!setting10hovered)}onMouseLeave={()=>setSetting10hovered(false)}>All</label>
            <input id={hoverId10}className={decideToggleClass(setting10on)}name="toggleDescription10"type="checkbox"onClick={()=>setSetting10on(!setting10on)} />
            <label className={setting10on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting10hovered(!setting10hovered)}onMouseLeave={()=>setSetting10hovered(false)}>Off</label>
            <label className={setting10on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting10hovered(!setting10hovered)}onMouseLeave={()=>setSetting10hovered(false)}>On</label>

            <label className="switchDescription"htmlFor="toggleDescription11"onMouseEnter={()=>setSetting11hovered(!setting11hovered)}onMouseLeave={()=>setSetting11hovered(false)}>Completed</label>
            <input id={hoverId11}className={decideToggleClass(setting11on)}name="toggleDescription11"type="checkbox"onClick={()=>setSetting11on(!setting11on)} />
            <label className={setting11on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting11hovered(!setting11hovered)}onMouseLeave={()=>setSetting11hovered(false)}>Off</label>
            <label className={setting11on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting11hovered(!setting11hovered)}onMouseLeave={()=>setSetting11hovered(false)}>On</label>

            <label className="switchDescription"htmlFor="toggleDescription12"onMouseEnter={()=>setSetting12hovered(!setting12hovered)}onMouseLeave={()=>setSetting12hovered(false)}>Assigned to me</label>
            <input id={hoverId12}className={decideToggleClass(setting12on)}name="toggleDescription12"type="checkbox"onClick={()=>setSetting12on(!setting12on)} />
            <label className={setting12on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting12hovered(!setting12hovered)}onMouseLeave={()=>setSetting12hovered(false)}>Off</label>
            <label className={setting12on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting12hovered(!setting12hovered)}onMouseLeave={()=>setSetting12hovered(false)}>On</label>

            <label className="switchDescription"htmlFor="toggleDescription13"onMouseEnter={()=>setSetting13hovered(!setting13hovered)}onMouseLeave={()=>setSetting13hovered(false)}>Auto-hide empty smart lists</label>
            <input id={hoverId13}className={decideToggleClass(setting13on)}name="toggleDescription13"type="checkbox"onClick={()=>setSetting13on(!setting13on)} />
            <label className={setting13on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting13hovered(!setting13hovered)}onMouseLeave={()=>setSetting13hovered(false)}>Off</label>
            <label className={setting13on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting13hovered(!setting13hovered)}onMouseLeave={()=>setSetting13hovered(false)}>On</label>

            <h2 className="settingsMenuSectionTitles">Connected apps</h2>

            <label className="switchDescription"htmlFor="toggleDescription14"onMouseEnter={()=>setSetting14hovered(!setting14hovered)}onMouseLeave={()=>setSetting14hovered(false)}>Planner</label>
            <input id={hoverId14}className={decideToggleClass(setting14on)}name="toggleDescription14"type="checkbox"onClick={()=>setSetting14on(!setting14on)} />
            <label className={setting14on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting14hovered(!setting14hovered)}onMouseLeave={()=>setSetting14hovered(false)}>Off</label>
            <label className={setting14on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting14hovered(!setting14hovered)}onMouseLeave={()=>setSetting14hovered(false)}>On</label>
            <label className="settingsMenuConnectedAppsSmallLabel">Tasks assigned to you</label>

            <label className="switchDescription"htmlFor="toggleDescription15"onMouseEnter={()=>setSetting15hovered(!setting15hovered)}onMouseLeave={()=>setSetting15hovered(false)}>Flagged email</label>
            <input id={hoverId15}className={decideToggleClass(setting15on)}name="toggleDescription15"type="checkbox"onClick={()=>setSetting15on(!setting15on)} />
            <label className={setting15on===false?"settingsOff":"hide"}onMouseEnter={()=>setSetting15hovered(!setting15hovered)}onMouseLeave={()=>setSetting15hovered(false)}>Off</label>
            <label className={setting15on===true?"settingsOn":"hide"}onMouseEnter={()=>setSetting15hovered(!setting15hovered)}onMouseLeave={()=>setSetting15hovered(false)}>On</label>
            <label className="settingsMenuConnectedAppsSmallLabel">Tasks from messages you've flagged</label>

            <h2 className="settingsMenuSectionTitles">About</h2>

            <a className="settingsMenuThinLinks"href="microsoftprivacy.com">Privacy and cookies</a>
            <a className="settingsMenuThinLinks"href="microsoftexport.com">Export your info</a>
            <a className="settingsMenuFatLinks"href="microsoftpartynotices.com">Third Party Notices</a>
            <div>
                <div id="settingsLogoDiv">
                    <img id="settingsLogo"src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_960_720.png"alt="text" />
                </div>
                <div id="settingsCopyRight">
                    <h3 id="copyRightsHeader">Task Management</h3>
                    <p className="settingsCopyRightText">Copyright &copy; 2022 Task Management</p>
                    <p className="settingsCopyRightText">All rights reserved</p>
                    <p className="settingsCopyRightText">Version 3.19.0</p>
                </div>
            </div>
            <a className="settingsMenuFatLinks"href="microsoftuserid.com">Copy Session and User ID</a>

            <h2 className="settingsMenuSectionTitles">Connect</h2>

            <div>
                <img className="settingsSocialMedias"src="https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-600w-601425683.jpg"alt="text" />
                <a className="settingsMenuSocialLinks"href="www.twitter.com">Follow us on Twitter</a>
            </div>
            <div>
                <img className="settingsSocialMedias"src="https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-600w-593204357.jpg"alt="text" />
                <a className="settingsMenuSocialLinks"href="www.facebook.com">Like us on Facebook</a>
            </div>
            <div>
                <img className="settingsSocialMedias"src="https://image.shutterstock.com/image-vector/letter-heart-logo-icon-design-600w-372064519.jpg"alt="text" />
                <a className="settingsMenuSocialLinks"href="www.twitter.com">Spread the word</a>
            </div>
        </div>
    );
}
export{SettingsMenu};