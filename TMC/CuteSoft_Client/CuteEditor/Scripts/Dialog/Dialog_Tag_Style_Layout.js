var OxOceaa=["","sel_position","sel_display","sel_float","sel_clear","tb_top","sel_top_unit","tb_height","sel_height_unit","tb_left","sel_left_unit","tb_width","sel_width_unit","tb_cliptop","sel_cliptop_unit","tb_clipbottom","sel_clipbottom_unit","tb_clipleft","sel_clipleft_unit","tb_clipright","sel_clipright_unit","sel_overflow","tb_zindex","sel_pagebreakbefore","sel_pagebreakafter","outer","div_demo","cssText","style","value","position","display","styleFloat","cssFloat","clear","left","top","width","height","length","tb_","sel_","_unit","selectedIndex","options","right","bottom","clip","tb_clip","sel_clip","currentStyle","overflow","zIndex","pageBreakBefore","pageBreakAfter"];function ParseFloatToString(Ox24){var Ox8=parseFloat(Ox24);if(isNaN(Ox8)){return OxOceaa[0];} ;return Ox8+OxOceaa[0];} ;var sel_position=Window_GetElement(window,OxOceaa[1],true);var sel_display=Window_GetElement(window,OxOceaa[2],true);var sel_float=Window_GetElement(window,OxOceaa[3],true);var sel_clear=Window_GetElement(window,OxOceaa[4],true);var tb_top=Window_GetElement(window,OxOceaa[5],true);var sel_top_unit=Window_GetElement(window,OxOceaa[6],true);var tb_height=Window_GetElement(window,OxOceaa[7],true);var sel_height_unit=Window_GetElement(window,OxOceaa[8],true);var tb_left=Window_GetElement(window,OxOceaa[9],true);var sel_left_unit=Window_GetElement(window,OxOceaa[10],true);var tb_width=Window_GetElement(window,OxOceaa[11],true);var sel_width_unit=Window_GetElement(window,OxOceaa[12],true);var tb_cliptop=Window_GetElement(window,OxOceaa[13],true);var sel_cliptop_unit=Window_GetElement(window,OxOceaa[14],true);var tb_clipbottom=Window_GetElement(window,OxOceaa[15],true);var sel_clipbottom_unit=Window_GetElement(window,OxOceaa[16],true);var tb_clipleft=Window_GetElement(window,OxOceaa[17],true);var sel_clipleft_unit=Window_GetElement(window,OxOceaa[18],true);var tb_clipright=Window_GetElement(window,OxOceaa[19],true);var sel_clipright_unit=Window_GetElement(window,OxOceaa[20],true);var sel_overflow=Window_GetElement(window,OxOceaa[21],true);var tb_zindex=Window_GetElement(window,OxOceaa[22],true);var sel_pagebreakbefore=Window_GetElement(window,OxOceaa[23],true);var sel_pagebreakafter=Window_GetElement(window,OxOceaa[24],true);var outer=Window_GetElement(window,OxOceaa[25],true);var div_demo=Window_GetElement(window,OxOceaa[26],true);UpdateState=function UpdateState_Layout(){div_demo[OxOceaa[28]][OxOceaa[27]]=element[OxOceaa[28]][OxOceaa[27]];} ;SyncToView=function SyncToView_Layout(){sel_position[OxOceaa[29]]=element[OxOceaa[28]][OxOceaa[30]];sel_display[OxOceaa[29]]=element[OxOceaa[28]][OxOceaa[31]];if(Browser_IsWinIE()){sel_float[OxOceaa[29]]=element[OxOceaa[28]][OxOceaa[32]];} else {sel_float[OxOceaa[29]]=element[OxOceaa[28]][OxOceaa[33]];} ;sel_clear[OxOceaa[29]]=element[OxOceaa[28]][OxOceaa[34]];var arr=[OxOceaa[35],OxOceaa[36],OxOceaa[37],OxOceaa[38]];for(var Ox1fc=0;Ox1fc<arr[OxOceaa[39]];Ox1fc++){var Ox27=arr[Ox1fc];var Ox43=document.getElementById(OxOceaa[40]+Ox27);var Ox120=document.getElementById(OxOceaa[41]+Ox27+OxOceaa[42]);Ox120[OxOceaa[43]]=0;if(ParseFloatToString(element[OxOceaa[28]][Ox27])){Ox43[OxOceaa[29]]=ParseFloatToString(element[OxOceaa[28]][Ox27]);for(var i=0;i<Ox120[OxOceaa[44]][OxOceaa[39]];i++){var Ox142=Ox120[OxOceaa[44]][i][OxOceaa[29]];if(Ox142&&element[OxOceaa[28]][Ox27].indexOf(Ox142)!=-1){Ox120[OxOceaa[43]]=i;break ;} ;} ;} ;} ;var arr=[OxOceaa[35],OxOceaa[36],OxOceaa[45],OxOceaa[46]];for(var Ox1fc=0;Ox1fc<arr[OxOceaa[39]];Ox1fc++){var Ox27=arr[Ox1fc];var Ox5fe=OxOceaa[47]+Ox27.charAt(0).toUpperCase()+Ox27.substring(1);var Ox43=document.getElementById(OxOceaa[48]+Ox27);var Ox120=document.getElementById(OxOceaa[49]+Ox27+OxOceaa[42]);Ox120[OxOceaa[43]]=0;var Ox5ff;if(Browser_IsWinIE()){Ox5ff=element[OxOceaa[50]][Ox5fe];} else {Ox5ff=element[OxOceaa[28]][Ox5fe];} ;if(ParseFloatToString(Ox5ff)){Ox43[OxOceaa[29]]=ParseFloatToString(Ox5ff);for(var i=0;i<Ox120[OxOceaa[44]][OxOceaa[39]];i++){var Ox142=Ox120[OxOceaa[44]][i][OxOceaa[29]];if(Ox142&&Ox5ff.indexOf(Ox142)!=-1){Ox120[OxOceaa[43]]=i;break ;} ;} ;} ;} ;sel_overflow[OxOceaa[29]]=element[OxOceaa[28]][OxOceaa[51]];tb_zindex[OxOceaa[29]]=element[OxOceaa[28]][OxOceaa[52]];sel_pagebreakbefore[OxOceaa[29]]=element[OxOceaa[28]][OxOceaa[53]];sel_pagebreakafter[OxOceaa[29]]=element[OxOceaa[28]][OxOceaa[54]];} ;SyncTo=function SyncTo_Layout(element){element[OxOceaa[28]][OxOceaa[30]]=sel_position[OxOceaa[29]];element[OxOceaa[28]][OxOceaa[31]]=sel_display[OxOceaa[29]];if(Browser_IsWinIE()){element[OxOceaa[28]][OxOceaa[32]]=sel_float[OxOceaa[29]];} else {element[OxOceaa[28]][OxOceaa[33]]=sel_float[OxOceaa[29]];} ;element[OxOceaa[28]][OxOceaa[34]]=sel_clear[OxOceaa[29]];var arr=[OxOceaa[35],OxOceaa[36],OxOceaa[37],OxOceaa[38]];for(var Ox1fc=0;Ox1fc<arr[OxOceaa[39]];Ox1fc++){var Ox27=arr[Ox1fc];var Ox43=document.getElementById(OxOceaa[40]+Ox27);if(ParseFloatToString(Ox43.value)){element[OxOceaa[28]][Ox27]=ParseFloatToString(Ox43.value)+document.all(OxOceaa[41]+Ox27+OxOceaa[42])[OxOceaa[29]];} else {element[OxOceaa[28]][Ox27]=OxOceaa[0];} ;} ;var arr=[OxOceaa[35],OxOceaa[36],OxOceaa[45],OxOceaa[46]];for(var Ox1fc=0;Ox1fc<arr[OxOceaa[39]];Ox1fc++){var Ox27=arr[Ox1fc];var Ox5fe=OxOceaa[47]+Ox27.charAt(0).toUpperCase()+Ox27.substring(1);var Ox43=document.getElementById(OxOceaa[48]+Ox27);if(ParseFloatToString(Ox43.value)){element[OxOceaa[28]][Ox5fe]=ParseFloatToString(Ox43.value)+document.all(OxOceaa[49]+Ox27+OxOceaa[42])[OxOceaa[29]];} else {element[OxOceaa[28]][Ox5fe]=OxOceaa[0];} ;} ;element[OxOceaa[28]][OxOceaa[51]]=sel_overflow[OxOceaa[29]];element[OxOceaa[28]][OxOceaa[52]]=ParseFloatToString(tb_zindex.value);element[OxOceaa[28]][OxOceaa[53]]=sel_pagebreakbefore[OxOceaa[29]];element[OxOceaa[28]][OxOceaa[54]]=sel_pagebreakafter[OxOceaa[29]];} ;