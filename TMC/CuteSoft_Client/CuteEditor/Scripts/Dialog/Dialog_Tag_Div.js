var OxOe870=["SetStyle","length","","GetStyle","GetText",":",";","cssText","tblBorderStyle","sel_style","sel_border","sel_part","bordercolor","bordercolor_Preview","inp_color","inp_color_Preview","inp_shade","inp_shade_Preview","inp_MarginLeft","inp_MarginRight","inp_MarginTop","inp_MarginBottom","inp_PaddingLeft","inp_PaddingRight","inp_PaddingTop","inp_PaddingBottom","inp_width","sel_width_unit","inp_height","sel_height_unit","inp_id","inp_class","sel_align","sel_textalign","sel_float","inp_tooltip","value","borderColor","style"," ","backgroundColor","color","id","className","width","height","inp_","sel_","_unit","selectedIndex","options","align","styleFloat","cssFloat","textAlign","title","borderWidth","borderLeftWidth","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftStyle","borderTopStyle","borderRightStyle","borderBottomStyle","none","border","-","red","paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","[[ValidID]]","class","onclick"];function pause(Ox4a1){var Oxa8= new Date();var Ox4a2=Oxa8.getTime()+Ox4a1;while(true){Oxa8= new Date();if(Oxa8.getTime()>Ox4a2){return ;} ;} ;} ;function StyleClass(Ox201){var Ox4a4=[];var Ox4a5={};if(Ox201){Ox4aa();} ;this[OxOe870[0]]=function SetStyle(name,Ox4f,Ox4a7){name=name.toLowerCase();for(var i=0;i<Ox4a4[OxOe870[1]];i++){if(Ox4a4[i]==name){break ;} ;} ;Ox4a4[i]=name;Ox4a5[name]=Ox4f?(Ox4f+(Ox4a7||OxOe870[2])):OxOe870[2];} ;this[OxOe870[3]]=function GetStyle(name){name=name.toLowerCase();return Ox4a5[name]||OxOe870[2];} ;this[OxOe870[4]]=function Ox4a9(){var Ox201=OxOe870[2];for(var i=0;i<Ox4a4[OxOe870[1]];i++){var Ox27=Ox4a4[i];var p=Ox4a5[Ox27];if(p){Ox201+=Ox27+OxOe870[5]+p+OxOe870[6];} ;} ;return Ox201;} ;function Ox4aa(){var arr=Ox201.split(OxOe870[6]);for(var i=0;i<arr[OxOe870[1]];i++){var p=arr[i].split(OxOe870[5]);var Ox27=p[0].replace(/^\s+/g,OxOe870[2]).replace(/\s+$/g,OxOe870[2]).toLowerCase();Ox4a4[Ox4a4[OxOe870[1]]]=Ox27;Ox4a5[Ox27]=p[1];} ;} ;} ;function GetStyle(Ox137,name){return  new StyleClass(Ox137.cssText).GetStyle(name);} ;function SetStyle(Ox137,name,Ox4f,Ox4ab){var Ox4ac= new StyleClass(Ox137.cssText);Ox4ac.SetStyle(name,Ox4f,Ox4ab);Ox137[OxOe870[7]]=Ox4ac.GetText();} ;function ParseFloatToString(Ox24){if(!Ox24){return OxOe870[2];} ;var Ox8=parseFloat(Ox24);if(isNaN(Ox8)){return OxOe870[2];} ;return Ox8+OxOe870[2];} ;var tblBorderStyle=Window_GetElement(window,OxOe870[8],true);var sel_style=Window_GetElement(window,OxOe870[9],true);var sel_border=Window_GetElement(window,OxOe870[10],true);var sel_part=Window_GetElement(window,OxOe870[11],true);var bordercolor=Window_GetElement(window,OxOe870[12],true);var bordercolor_Preview=Window_GetElement(window,OxOe870[13],true);var inp_color=Window_GetElement(window,OxOe870[14],true);var inp_color_Preview=Window_GetElement(window,OxOe870[15],true);var inp_shade=Window_GetElement(window,OxOe870[16],true);var inp_shade_Preview=Window_GetElement(window,OxOe870[17],true);var inp_MarginLeft=Window_GetElement(window,OxOe870[18],true);var inp_MarginRight=Window_GetElement(window,OxOe870[19],true);var inp_MarginTop=Window_GetElement(window,OxOe870[20],true);var inp_MarginBottom=Window_GetElement(window,OxOe870[21],true);var inp_PaddingLeft=Window_GetElement(window,OxOe870[22],true);var inp_PaddingRight=Window_GetElement(window,OxOe870[23],true);var inp_PaddingTop=Window_GetElement(window,OxOe870[24],true);var inp_PaddingBottom=Window_GetElement(window,OxOe870[25],true);var inp_width=Window_GetElement(window,OxOe870[26],true);var sel_width_unit=Window_GetElement(window,OxOe870[27],true);var inp_height=Window_GetElement(window,OxOe870[28],true);var sel_height_unit=Window_GetElement(window,OxOe870[29],true);var inp_id=Window_GetElement(window,OxOe870[30],true);var inp_class=Window_GetElement(window,OxOe870[31],true);var sel_align=Window_GetElement(window,OxOe870[32],true);var sel_textalign=Window_GetElement(window,OxOe870[33],true);var sel_float=Window_GetElement(window,OxOe870[34],true);var inp_tooltip=Window_GetElement(window,OxOe870[35],true);UpdateState=function UpdateState_Div(){} ;function doBorderStyle(Ox120){sel_style[OxOe870[36]]=Ox120;} ;function doPart(Ox120){sel_part[OxOe870[36]]=Ox120;} ;function doWidth(Ox120){sel_border[OxOe870[36]]=Ox120;} ;SyncToView=function SyncToView_Div(){if(Browser_IsWinIE()){bordercolor[OxOe870[36]]=element[OxOe870[38]][OxOe870[37]];} else {var arr=revertColor(element[OxOe870[38]].borderColor).split(OxOe870[39]);bordercolor[OxOe870[36]]=arr[0];} ;bordercolor[OxOe870[38]][OxOe870[40]]=bordercolor[OxOe870[36]];bordercolor_Preview[OxOe870[38]][OxOe870[40]]=bordercolor[OxOe870[36]];inp_color[OxOe870[36]]=revertColor(element[OxOe870[38]].color);inp_color[OxOe870[38]][OxOe870[40]]=element[OxOe870[38]][OxOe870[41]];inp_color_Preview[OxOe870[38]][OxOe870[40]]=element[OxOe870[38]][OxOe870[41]];inp_shade[OxOe870[36]]=revertColor(element[OxOe870[38]].backgroundColor);inp_shade[OxOe870[38]][OxOe870[40]]=element[OxOe870[38]][OxOe870[40]];inp_shade_Preview[OxOe870[38]][OxOe870[40]]=element[OxOe870[38]][OxOe870[40]];inp_id[OxOe870[36]]=element[OxOe870[42]];if(ParseFloatToString(element[OxOe870[38]].marginLeft)){inp_MarginLeft[OxOe870[36]]=ParseFloatToString(element[OxOe870[38]].marginLeft);} ;if(ParseFloatToString(element[OxOe870[38]].marginRight)){inp_MarginRight[OxOe870[36]]=ParseFloatToString(element[OxOe870[38]].marginRight);} ;if(ParseFloatToString(element[OxOe870[38]].marginTop)){inp_MarginTop[OxOe870[36]]=ParseFloatToString(element[OxOe870[38]].marginTop);} ;if(ParseFloatToString(element[OxOe870[38]].marginBottom)){inp_MarginBottom[OxOe870[36]]=ParseFloatToString(element[OxOe870[38]].marginBottom);} ;if(ParseFloatToString(element[OxOe870[38]].paddingLeft)){inp_PaddingLeft[OxOe870[36]]=ParseFloatToString(element[OxOe870[38]].paddingLeft);} ;if(ParseFloatToString(element[OxOe870[38]].paddingRight)){inp_PaddingRight[OxOe870[36]]=ParseFloatToString(element[OxOe870[38]].paddingRight);} ;if(ParseFloatToString(element[OxOe870[38]].paddingTop)){inp_PaddingTop[OxOe870[36]]=ParseFloatToString(element[OxOe870[38]].paddingTop);} ;if(ParseFloatToString(element[OxOe870[38]].paddingBottom)){inp_PaddingBottom[OxOe870[36]]=ParseFloatToString(element[OxOe870[38]].paddingBottom);} ;inp_class[OxOe870[36]]=element[OxOe870[43]];var arr=[OxOe870[44],OxOe870[45]];for(var Ox1fc=0;Ox1fc<arr[OxOe870[1]];Ox1fc++){var Ox27=arr[Ox1fc];var Ox43=Window_GetElement(window,OxOe870[46]+Ox27,true);var Ox120=Window_GetElement(window,OxOe870[47]+Ox27+OxOe870[48],true);Ox120[OxOe870[49]]=0;if(ParseFloatToString(element[OxOe870[38]][Ox27])){Ox43[OxOe870[36]]=ParseFloatToString(element[OxOe870[38]][Ox27]);for(var i=0;i<Ox120[OxOe870[50]][OxOe870[1]];i++){var Ox142=Ox120[OxOe870[50]][i][OxOe870[36]];if(Ox142&&element[OxOe870[38]][Ox27].indexOf(Ox142)!=-1){Ox120[OxOe870[49]]=i;break ;} ;} ;} ;} ;sel_align[OxOe870[36]]=element[OxOe870[51]];if(Browser_IsWinIE()){sel_float[OxOe870[36]]=element[OxOe870[38]][OxOe870[52]];} else {sel_float[OxOe870[36]]=element[OxOe870[38]][OxOe870[53]];} ;sel_textalign[OxOe870[36]]=element[OxOe870[38]][OxOe870[54]];inp_tooltip[OxOe870[36]]=element[OxOe870[55]];try{sel_border[OxOe870[36]]=element[OxOe870[38]][OxOe870[56]];if(element[OxOe870[38]][OxOe870[57]]==element[OxOe870[38]][OxOe870[58]]&&element[OxOe870[38]][OxOe870[57]]==element[OxOe870[38]][OxOe870[59]]&&element[OxOe870[38]][OxOe870[57]]==element[OxOe870[38]][OxOe870[60]]){sel_border[OxOe870[36]]=element[OxOe870[38]][OxOe870[57]];} ;if(element[OxOe870[38]][OxOe870[61]]==element[OxOe870[38]][OxOe870[62]]&&element[OxOe870[38]][OxOe870[61]]==element[OxOe870[38]][OxOe870[63]]&&element[OxOe870[38]][OxOe870[61]]==element[OxOe870[38]][OxOe870[64]]){sel_style[OxOe870[36]]=element[OxOe870[38]][OxOe870[61]];} ;} catch(x){} ;} ;SyncTo=function SyncTo_Div(element){var Ox4c4=sel_part[OxOe870[36]];if(Ox4c4==OxOe870[65]){element[OxOe870[38]][OxOe870[66]]=OxOe870[65];} else {var Ox4c5=Ox4c4?OxOe870[67]+Ox4c4:Ox4c4;var Oxdc=OxOe870[68];var Ox137=sel_style[OxOe870[36]]||OxOe870[2];var Ox4c6=sel_border[OxOe870[36]];element[OxOe870[38]][OxOe870[66]]=OxOe870[65];if(Ox4c6||Ox137){SetStyle(element.style,OxOe870[66]+Ox4c5,Ox4c6+OxOe870[39]+Ox137+OxOe870[39]+Oxdc);} else {SetStyle(element.style,OxOe870[66]+Ox4c5,OxOe870[2]);} ;SetStyle(element.style,OxOe870[66]+Ox4c5,Ox4c6+OxOe870[39]+Ox137+OxOe870[39]+Oxdc);} ;try{element[OxOe870[38]][OxOe870[41]]=inp_color[OxOe870[36]]||OxOe870[2];} catch(x){element[OxOe870[38]][OxOe870[41]]=OxOe870[2];} ;try{element[OxOe870[38]][OxOe870[40]]=inp_shade[OxOe870[36]]||OxOe870[2];} catch(x){element[OxOe870[38]][OxOe870[40]]=OxOe870[2];} ;try{element[OxOe870[38]][OxOe870[37]]=bordercolor[OxOe870[36]]||OxOe870[2];} catch(x){element[OxOe870[38]][OxOe870[37]]=OxOe870[2];} ;element[OxOe870[38]][OxOe870[69]]=inp_PaddingLeft[OxOe870[36]];element[OxOe870[38]][OxOe870[70]]=inp_PaddingRight[OxOe870[36]];element[OxOe870[38]][OxOe870[71]]=inp_PaddingTop[OxOe870[36]];element[OxOe870[38]][OxOe870[72]]=inp_PaddingBottom[OxOe870[36]];element[OxOe870[38]][OxOe870[73]]=inp_MarginLeft[OxOe870[36]];element[OxOe870[38]][OxOe870[74]]=inp_MarginRight[OxOe870[36]];element[OxOe870[38]][OxOe870[75]]=inp_MarginTop[OxOe870[36]];element[OxOe870[38]][OxOe870[76]]=inp_MarginBottom[OxOe870[36]];element[OxOe870[43]]=inp_class[OxOe870[36]];var arr=[OxOe870[44],OxOe870[45]];for(var Ox1fc=0;Ox1fc<arr[OxOe870[1]];Ox1fc++){var Ox27=arr[Ox1fc];var Ox43=Window_GetElement(window,OxOe870[46]+Ox27,true);var Ox4c7=Window_GetElement(window,OxOe870[47]+Ox27+OxOe870[48],true);if(ParseFloatToString(Ox43.value)){element[OxOe870[38]][Ox27]=ParseFloatToString(Ox43.value)+Ox4c7[OxOe870[36]];} else {element[OxOe870[38]][Ox27]=OxOe870[2];} ;} ;var Ox375=/[^a-z\d]/i;if(Ox375.test(inp_id.value)){alert(OxOe870[77]);return ;} ;element[OxOe870[51]]=sel_align[OxOe870[36]];element[OxOe870[42]]=inp_id[OxOe870[36]];if(Browser_IsWinIE()){element[OxOe870[38]][OxOe870[52]]=sel_float[OxOe870[36]];} else {element[OxOe870[38]][OxOe870[53]]=sel_float[OxOe870[36]];} ;element[OxOe870[38]][OxOe870[54]]=sel_textalign[OxOe870[36]];element[OxOe870[55]]=inp_tooltip[OxOe870[36]];if(element[OxOe870[55]]==OxOe870[2]){element.removeAttribute(OxOe870[55]);} ;if(element[OxOe870[43]]==OxOe870[2]){element.removeAttribute(OxOe870[43]);} ;if(element[OxOe870[43]]==OxOe870[2]){element.removeAttribute(OxOe870[78]);} ;if(element[OxOe870[51]]==OxOe870[2]){element.removeAttribute(OxOe870[51]);} ;if(element[OxOe870[42]]==OxOe870[2]){element.removeAttribute(OxOe870[42]);} ;} ;bordercolor[OxOe870[79]]=bordercolor_Preview[OxOe870[79]]=function bordercolor_onclick(){SelectColor(bordercolor,bordercolor_Preview);} ;inp_color[OxOe870[79]]=inp_color_Preview[OxOe870[79]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;inp_shade[OxOe870[79]]=inp_shade_Preview[OxOe870[79]]=function inp_shade_onclick(){SelectColor(inp_shade,inp_shade_Preview);} ;