var OxO87c9=["ua","userAgent","isOpera","opera","isSafari","safari","isGecko","gecko","isWinIE","msie","isMac","Mac","compatMode","document","CSS1Compat","XMLHttpRequest","","caller","(","\x0A","attachEvent","on","\x0D\x0A","closeeditordialog","close","top","returnValue","_dialog_returnvalue","opener","_dialog_arguments","dialogArguments","length","element \x27","\x27 not found","all","childNodes","nodeType","UNSELECTABLE","tabIndex","-1","//TODO: event not found? throw error ?","preventDefault","event","arguments","parent","frames","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","which","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","cancelBubble","stopPropagation","buttonInitialized","oncontextmenu","onmouseout","onmousedown","onmouseup","isover","className","CuteEditorButtonOver","CuteEditorButton","CuteEditorButtonDown","CuteEditorDown","border","style","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","onerror","\x0D\x0A\x0D\x0A","href","location","view-source:","?\x26view-source=","_blank","ondblclick","onkeydown","//duplicated?\x0D\x0A","var ","=Window_GetElement(window,\x22","\x22,true);","Text","clipboardData","addEventListener","isdir","path","url","text","return this.getAttribute(\x27","\x27);","prototype","attributes","\x3C","tagName","specified"," ","name","=\x22","value","\x22","\x3E","innerHTML","\x3C/","AREA","BASE","BASEFONT","COL","FRAME","HR","IMG","BR","INPUT","ISINDEX","LINK","META","PARAM","00","0123456789ABCDEF","#","object","undefined","Microsoft.XMLHTTP","head","script","language","javascript","type","text/javascript","src","id","_cpinstalled","1","ResourceDir","/Load.ashx?type=script\x26verfix=1006\x26file=ColorPicker.js","CuteEditorColorPickerInitialize","GET","onreadystatechange","readyState","responseText"," \x0D\x0A window.CuteEditorColorPickerInitialize=CuteEditorColorPickerInitialize","colorScript","oncolorselect","FireUIChanged","onclick","popupColorPicker"];var _Browser_TypeInfo=null;function Browser__InitType(){if(_Browser_TypeInfo!=null){return ;} ;var Ox4={};Ox4[OxO87c9[0]]=navigator[OxO87c9[1]].toLowerCase();Ox4[OxO87c9[2]]=(Ox4[OxO87c9[0]].indexOf(OxO87c9[3])>-1);Ox4[OxO87c9[4]]=(Ox4[OxO87c9[0]].indexOf(OxO87c9[5])>-1);Ox4[OxO87c9[6]]=(!Ox4[OxO87c9[2]]&&Ox4[OxO87c9[0]].indexOf(OxO87c9[7])>-1);Ox4[OxO87c9[8]]=(!Ox4[OxO87c9[2]]&&Ox4[OxO87c9[0]].indexOf(OxO87c9[9])>-1);Ox4[OxO87c9[10]]=navigator[OxO87c9[1]].indexOf(OxO87c9[11])!=-1;_Browser_TypeInfo=Ox4;} ;Browser__InitType();function Browser_IsWinIE(){return _Browser_TypeInfo[OxO87c9[8]];} ;function Browser_IsGecko(){return _Browser_TypeInfo[OxO87c9[6]];} ;function Browser_IsOpera(){return _Browser_TypeInfo[OxO87c9[2]];} ;function Browser_IsSafari(){return _Browser_TypeInfo[OxO87c9[4]];} ;function Browser_UseIESelection(){return _Browser_TypeInfo[OxO87c9[8]];} ;function Browser_IsCSS1Compat(){return window[OxO87c9[13]][OxO87c9[12]]==OxO87c9[14];} ;function Browser_IsIE7(){return _Browser_TypeInfo[OxO87c9[8]]&&window[OxO87c9[15]];} ;function GetStackTrace(){var Ox120=OxO87c9[16];for(var Ox230=GetStackTrace[OxO87c9[17]];Ox230!=null;Ox230=Ox230[OxO87c9[17]]){var Ox231=Ox230+OxO87c9[16];Ox231=Ox231.substr(0,Ox231.indexOf(OxO87c9[18]));Ox120+=Ox231+OxO87c9[19];} ;return Ox120;} ;function Event_Attach(obj,name,Ox233){if(obj[OxO87c9[20]]){if(name.substr(0,2)!=OxO87c9[21]){name=OxO87c9[21]+name;} ;obj.attachEvent(name,Ox233);} else {if(name.substr(0,2)==OxO87c9[21]){name=name.substring(2);} ;obj.addEventListener(name,Ox233,false);} ;} ;var __ISDEBUG=false;function Debug_Todo(msg){if(!__ISDEBUG){return ;} ;throw ( new Error(msg+OxO87c9[22]+Debug_Todo[OxO87c9[17]]));} ;function Window_CloseDialog(Ox238){(top[OxO87c9[23]]||top[OxO87c9[24]])();} ;function Window_SetDialogReturnValue(Ox1a8,Ox4f){var Ox23a=Ox1a8[OxO87c9[25]];Ox23a[OxO87c9[26]]=Ox4f;Ox23a[OxO87c9[13]][OxO87c9[27]]=Ox4f;var Ox23b=Ox23a[OxO87c9[28]];if(Ox23b==null){return ;} ;try{Ox23b[OxO87c9[13]][OxO87c9[27]]=Ox4f;} catch(x){} ;} ;function Window_GetDialogArguments(Ox1a8){var Ox23a=Ox1a8[OxO87c9[25]];try{var Ox23b=Ox23a[OxO87c9[28]];if(Ox23b&&Ox23b[OxO87c9[13]][OxO87c9[29]]){return Ox23b[OxO87c9[13]][OxO87c9[29]];} ;} catch(x){} ;if(Ox23a[OxO87c9[13]][OxO87c9[29]]){return Ox23a[OxO87c9[13]][OxO87c9[29]];} ;if(Ox23a[OxO87c9[30]]){return Ox23a[OxO87c9[30]];} ;return Ox23a[OxO87c9[13]][OxO87c9[29]];} ;function Window_GetElement(Ox1a8,Ox9a,Ox23e){var Ox29=Ox1a8[OxO87c9[13]].getElementById(Ox9a);if(Ox29){return Ox29;} ;var Ox31=Ox1a8[OxO87c9[13]].getElementsByName(Ox9a);if(Ox31[OxO87c9[31]]>0){return Ox31.item(0);} ;if(Ox23e){if(__ISDEBUG){alert(OxO87c9[32]+Ox9a+OxO87c9[33]);} ;throw ( new Error(OxO87c9[32]+Ox9a+OxO87c9[33]));} ;return null;} ;function Element_GetAllElements(p){var arr=[];if(Browser_IsWinIE()){for(var i=0;i<p[OxO87c9[34]][OxO87c9[31]];i++){arr.push(p[OxO87c9[34]].item(i));} ;return arr;} ;Ox240(p);function Ox240(Ox29){var Ox217=Ox29[OxO87c9[35]];var Ox11=Ox217[OxO87c9[31]];for(var i=0;i<Ox11;i++){var Ox27=Ox217.item(i);if(Ox27[OxO87c9[36]]!=1){continue ;} ;arr.push(Ox27);Ox240(Ox27);} ;} ;return arr;} ;function Element_SetUnselectable(element){element.setAttribute(OxO87c9[37],OxO87c9[21]);element.setAttribute(OxO87c9[38],OxO87c9[39]);var arr=Element_GetAllElements(element);var len=arr[OxO87c9[31]];if(!len){return ;} ;for(var i=0;i<len;i++){arr[i].setAttribute(OxO87c9[37],OxO87c9[21]);arr[i].setAttribute(OxO87c9[38],OxO87c9[39]);} ;} ;function Event_GetEvent(Ox243){Ox243=Event_FindEvent(Ox243);if(Ox243==null){Debug_Todo(OxO87c9[40]);} ;return Ox243;} ;function Array_IndexOf(arr,Ox245){for(var i=0;i<arr[OxO87c9[31]];i++){if(arr[i]==Ox245){return i;} ;} ;return -1;} ;function Array_Contains(arr,Ox245){return Array_IndexOf(arr,Ox245)!=-1;} ;function clearArray(Ox248){for(var i=0;i<Ox248[OxO87c9[31]];i++){Ox248[i]=null;} ;} ;function Event_FindEvent(Ox243){if(Ox243&&Ox243[OxO87c9[41]]){return Ox243;} ;if(Browser_IsGecko()){return Event_FindEvent_FindEventFromCallers();} else {if(window[OxO87c9[42]]){return window[OxO87c9[42]];} ;return Event_FindEvent_FindEventFromWindows();} ;return null;} ;function Event_FindEvent_FindEventFromCallers(){var Ox18f=Event_GetEvent[OxO87c9[17]];for(var i=0;i<100;i++){if(!Ox18f){break ;} ;var Ox243=Ox18f[OxO87c9[43]][0];if(Ox243&&Ox243[OxO87c9[41]]){return Ox243;} ;Ox18f=Ox18f[OxO87c9[17]];} ;} ;function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox24c(window);function Ox24c(Ox1a8){if(Ox1a8==null){return null;} ;if(Ox1a8[OxO87c9[42]]){return Ox1a8[OxO87c9[42]];} ;if(Array_Contains(arr,Ox1a8)){return null;} ;arr.push(Ox1a8);var Ox24d=[];if(Ox1a8[OxO87c9[44]]!=Ox1a8){Ox24d.push(Ox1a8.parent);} ;if(Ox1a8[OxO87c9[25]]!=Ox1a8[OxO87c9[44]]){Ox24d.push(Ox1a8.top);} ;if(Ox1a8[OxO87c9[28]]){Ox24d.push(Ox1a8.opener);} ;for(var i=0;i<Ox1a8[OxO87c9[45]][OxO87c9[31]];i++){Ox24d.push(Ox1a8[OxO87c9[45]][i]);} ;for(var i=0;i<Ox24d[OxO87c9[31]];i++){try{var Ox243=Ox24c(Ox24d[i]);if(Ox243){return Ox243;} ;} catch(x){} ;} ;return null;} ;} ;function Event_GetSrcElement(Ox243){Ox243=Event_GetEvent(Ox243);if(Ox243[OxO87c9[46]]){return Ox243[OxO87c9[46]];} ;if(Ox243[OxO87c9[47]]){return Ox243[OxO87c9[47]];} ;Debug_Todo(OxO87c9[48]);return null;} ;function Event_GetFromElement(Ox243){Ox243=Event_GetEvent(Ox243);if(Ox243[OxO87c9[49]]){return Ox243[OxO87c9[49]];} ;if(Ox243[OxO87c9[50]]){return Ox243[OxO87c9[50]];} ;return null;} ;function Event_GetToElement(Ox243){Ox243=Event_GetEvent(Ox243);if(Ox243[OxO87c9[51]]){return Ox243[OxO87c9[51]];} ;if(Ox243[OxO87c9[50]]){return Ox243[OxO87c9[50]];} ;return null;} ;function Event_GetKeyCode(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxO87c9[52]]||Ox243[OxO87c9[53]];} ;function Event_GetClientX(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxO87c9[54]];} ;function Event_GetClientY(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxO87c9[55]];} ;function Event_GetOffsetX(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxO87c9[56]];} ;function Event_GetOffsetY(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxO87c9[57]];} ;function Event_IsLeftButton(Ox243){Ox243=Event_GetEvent(Ox243);if(Browser_IsWinIE()){return Ox243[OxO87c9[58]]==1;} ;if(Browser_IsGecko()){return Ox243[OxO87c9[58]]==0;} ;return Ox243[OxO87c9[58]]==0;} ;function Event_IsCtrlKey(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxO87c9[59]];} ;function Event_IsAltKey(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxO87c9[60]];} ;function Event_IsShiftKey(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxO87c9[61]];} ;function Event_PreventDefault(Ox243){Ox243=Event_GetEvent(Ox243);Ox243[OxO87c9[26]]=false;if(Ox243[OxO87c9[41]]){Ox243.preventDefault();} ;} ;function Event_CancelBubble(Ox243){Ox243=Event_GetEvent(Ox243);Ox243[OxO87c9[62]]=true;if(Ox243[OxO87c9[63]]){Ox243.stopPropagation();} ;return false;} ;function Event_CancelEvent(Ox243){Ox243=Event_GetEvent(Ox243);Event_PreventDefault(Ox243);return Event_CancelBubble(Ox243);} ;function CuteEditor_ButtonOver(element){if(!element[OxO87c9[64]]){element[OxO87c9[65]]=Event_CancelEvent;element[OxO87c9[66]]=CuteEditor_ButtonOut;element[OxO87c9[67]]=CuteEditor_ButtonDown;element[OxO87c9[68]]=CuteEditor_ButtonUp;Element_SetUnselectable(element);element[OxO87c9[64]]=true;} ;element[OxO87c9[69]]=true;element[OxO87c9[70]]=OxO87c9[71];} ;function CuteEditor_ButtonOut(){var element=this;element[OxO87c9[70]]=OxO87c9[72];element[OxO87c9[69]]=false;} ;function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this;element[OxO87c9[70]]=OxO87c9[73];} ;function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxO87c9[69]]){element[OxO87c9[70]]=OxO87c9[71];} else {element[OxO87c9[70]]=OxO87c9[74];} ;} ;function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxO87c9[64]]){element[OxO87c9[65]]=Event_CancelEvent;element[OxO87c9[66]]=CuteEditor_ColorPicker_ButtonOut;element[OxO87c9[67]]=CuteEditor_ColorPicker_ButtonDown;Element_SetUnselectable(element);element[OxO87c9[64]]=true;} ;element[OxO87c9[69]]=true;element[OxO87c9[76]][OxO87c9[75]]=OxO87c9[77];element[OxO87c9[76]][OxO87c9[78]]=OxO87c9[79];element[OxO87c9[76]][OxO87c9[80]]=OxO87c9[81];} ;function CuteEditor_ColorPicker_ButtonOut(){var element=this;element[OxO87c9[69]]=false;element[OxO87c9[76]][OxO87c9[75]]=OxO87c9[82];element[OxO87c9[76]][OxO87c9[78]]=OxO87c9[16];element[OxO87c9[76]][OxO87c9[80]]=OxO87c9[81];} ;function CuteEditor_ColorPicker_ButtonDown(){var element=this;element[OxO87c9[76]][OxO87c9[75]]=OxO87c9[83];element[OxO87c9[76]][OxO87c9[78]]=OxO87c9[16];element[OxO87c9[76]][OxO87c9[80]]=OxO87c9[81];} ;function CuteEditor_ButtonCommandOver(element){element[OxO87c9[69]]=true;if(element[OxO87c9[84]]){element[OxO87c9[70]]=OxO87c9[85];} else {element[OxO87c9[70]]=OxO87c9[71];} ;} ;function CuteEditor_ButtonCommandOut(element){element[OxO87c9[69]]=false;if(element[OxO87c9[86]]){element[OxO87c9[70]]=OxO87c9[87];} else {if(element[OxO87c9[84]]){element[OxO87c9[70]]=OxO87c9[85];} else {element[OxO87c9[70]]=OxO87c9[72];} ;} ;} ;function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ;element[OxO87c9[70]]=OxO87c9[73];} ;function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxO87c9[84]]){element[OxO87c9[70]]=OxO87c9[85];return ;} ;if(element[OxO87c9[69]]){element[OxO87c9[70]]=OxO87c9[71];} else {if(element[OxO87c9[86]]){element[OxO87c9[70]]=OxO87c9[87];} else {element[OxO87c9[70]]=OxO87c9[72];} ;} ;} [CuteEditor_ButtonOver,CuteEditor_ColorPicker_ButtonOver];[Window_GetDialogArguments,Window_SetDialogReturnValue,Window_CloseDialog,Window_GetElement];function CancelEventIfNotDigit(){var Ox269=Event_GetKeyCode();if(Browser_IsWinIE()){if((Ox269>=48)&&(Ox269<=57)){return true;} ;} else {if((Ox269<48||Ox269>57)&&Ox269!=8&&(Ox269<35||Ox269>37)&&Ox269!=39&&Ox269!=46){} else {return true;} ;} ;return Event_CancelEvent();} ;window[OxO87c9[88]]=function window_onerror(Oxee,b,Ox217){if(!__ISDEBUG){return false;} ;alert(Oxee+OxO87c9[22]+b+OxO87c9[22]+Ox217+OxO87c9[89]+GetStackTrace());return true;} ;function DialogHandleDblClick(){if(Event_IsCtrlKey()){window[OxO87c9[91]][OxO87c9[90]]=OxO87c9[92]+window[OxO87c9[91]][OxO87c9[90]]+OxO87c9[93]+ new Date().getTime();} ;if(Event_IsShiftKey()){window.open(window[OxO87c9[91]].href,OxO87c9[94]);} ;} ;function DialogHandleKeyDown(){var Ox26d=Event_GetKeyCode();if(Ox26d==116){window[OxO87c9[91]].reload();} ;if(Ox26d==27){Window_SetDialogReturnValue(window,false);Window_CloseDialog(window);} ;} ;Event_Attach(document,OxO87c9[95],DialogHandleDblClick);Event_Attach(document,OxO87c9[96],DialogHandleKeyDown);function Debug_ReportElements(Ox26f){var Ox270={};var Ox271=[];function Ox272(Ox9a){if(!Ox9a){return ;} ;if(Ox270[Ox9a]){Ox271.push(OxO87c9[97]);} ;Ox270[Ox9a]=true;Ox271.push(OxO87c9[98]);Ox271.push(Ox9a);Ox271.push(OxO87c9[99]);Ox271.push(Ox9a);Ox271.push(OxO87c9[100]);Ox271.push(OxO87c9[22]);} ;var arr=Element_GetAllElements(Ox26f);for(var i=0;i<arr[OxO87c9[31]];i++){var Ox43=arr[i];Ox272(Ox43.id);} ;var Ox201=Ox271.join(OxO87c9[16]);window[OxO87c9[102]].setData(OxO87c9[101],Ox201);} ;if(document[OxO87c9[103]]){var rowprops=[OxO87c9[104],OxO87c9[105],OxO87c9[106],OxO87c9[107]];for(var rowpropi=0;rowpropi<rowprops[OxO87c9[31]];rowpropi++){try{HTMLElement[OxO87c9[110]].__defineGetter__(rowprops[rowpropi], new Function(OxO87c9[108]+rowprops[rowpropi]+OxO87c9[109]));} catch(x){} ;} ;} ;function outerHTML(element){var attr;var Ox277=element[OxO87c9[111]];var Ox24=OxO87c9[112]+element[OxO87c9[113]];for(var i=0;i<Ox277[OxO87c9[31]];i++){attr=Ox277[i];if(attr[OxO87c9[114]]){Ox24+=OxO87c9[115]+attr[OxO87c9[116]]+OxO87c9[117]+attr[OxO87c9[118]]+OxO87c9[119];} ;} ;if(!canHaveChildren(element)){return Ox24+OxO87c9[120];} ;return Ox24+OxO87c9[120]+element[OxO87c9[121]]+OxO87c9[122]+element[OxO87c9[113]]+OxO87c9[120];} ;function canHaveChildren(element){switch(element[OxO87c9[113]]){case OxO87c9[123]:;case OxO87c9[124]:;case OxO87c9[125]:;case OxO87c9[126]:;case OxO87c9[127]:;case OxO87c9[128]:;case OxO87c9[129]:;case OxO87c9[130]:;case OxO87c9[131]:;case OxO87c9[132]:;case OxO87c9[133]:;case OxO87c9[134]:;case OxO87c9[135]:return false;;} ;return true;} ;function RGBtoHex(Ox27a,Ox27b,Ox27c){return toHex(Ox27a)+toHex(Ox27b)+toHex(Ox27c);} ;function toHex(Ox27e){if(Ox27e==null){return OxO87c9[136];} ;Ox27e=parseInt(Ox27e);if(Ox27e==0||isNaN(Ox27e)){return OxO87c9[136];} ;Ox27e=Math.max(0,Ox27e);Ox27e=Math.min(Ox27e,255);Ox27e=Math.round(Ox27e);return OxO87c9[137].charAt((Ox27e-Ox27e%16)/16)+OxO87c9[137].charAt(Ox27e%16);} ;var dec_pattern=/rgb\((\d{1,3})[,]\s*(\d{1,3})[,]\s*(\d{1,3})\)/gi;function revertColor(Ox281){if(Ox281.match(dec_pattern)){var Ox282=Ox281.replace(dec_pattern,function (Ox24,p1,Ox72,Ox283){return (OxO87c9[138]+RGBtoHex(p1,Ox72,Ox283)).toLowerCase();} );return Ox282;} ;return Ox281;} ;function isNull(Oxee){return  typeof Oxee==OxO87c9[139]&&!Oxee;} ;function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxO87c9[140]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxO87c9[140]){return  new ActiveXObject(OxO87c9[141]);} ;} catch(x){return null;} ;} ;function include(Oxc9,Ox287){var Ox288=document.getElementsByTagName(OxO87c9[142]).item(0);var Ox289=document.getElementById(Oxc9);if(Ox289){Ox288.removeChild(Ox289);} ;var Ox28a=document.createElement(OxO87c9[143]);Ox28a.setAttribute(OxO87c9[144],OxO87c9[145]);Ox28a.setAttribute(OxO87c9[146],OxO87c9[147]);Ox28a.setAttribute(OxO87c9[148],Ox287);Ox28a.setAttribute(OxO87c9[149],Oxc9);Ox288.appendChild(Ox28a);} ;function SelectColor(Ox28c,Ox28d){if(Ox28c.getAttribute(OxO87c9[150])==OxO87c9[151]){return ;} ;var Ox28e=editor.GetScriptProperty(OxO87c9[152])+OxO87c9[153];if(!window[OxO87c9[154]]){var Ox28f=CreateXMLHttpRequest();if(Ox28f){Ox28f.open(OxO87c9[155],Ox28e,true,null,null);Ox28f[OxO87c9[156]]=function (){if(Ox28f[OxO87c9[157]]<4){return ;} ;var Ox269=Ox28f[OxO87c9[158]];Ox28f=null;eval(Ox269+OxO87c9[159]);Ox290();} ;Ox28f.send(OxO87c9[16]);} else {include(OxO87c9[160],Ox28e);setTimeout(Ox290,100);} ;} else {Ox290();} ;function Ox290(){Ox28c.setAttribute(OxO87c9[150],OxO87c9[151]);Ox28c[OxO87c9[118]]=OxO87c9[16];window.CuteEditorColorPickerInitialize(Ox28c,window.editor);Ox28c[OxO87c9[161]]=function (Oxdc){if(Oxdc!=null&&Oxdc!==false){Ox28c[OxO87c9[118]]=Oxdc.toUpperCase();Ox28c[OxO87c9[76]][OxO87c9[78]]=Oxdc;if(Ox28d){Ox28d[OxO87c9[76]][OxO87c9[78]]=Oxdc;} ;if(window[OxO87c9[162]]){window.FireUIChanged();} ;} ;} ;Ox28c[OxO87c9[163]]=Ox28c[OxO87c9[164]];if(Ox28d){Ox28d[OxO87c9[163]]=function (){setTimeout(Ox28c.popupColorPicker,100);} ;} ;setTimeout(Ox28c.popupColorPicker,100);} ;} ;function row_click(src){} ;function do_Close(){Window_SetDialogReturnValue(window,null);Window_CloseDialog(window);} ;var isDemoMode=false;