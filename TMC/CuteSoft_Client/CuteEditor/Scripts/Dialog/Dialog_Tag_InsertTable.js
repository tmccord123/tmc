var OxO7e9c=["rowSpan","removeNode","parentNode","firstChild","colSpan","nodeName","TABLE","Map","rowIndex","rows","length","cells","cellIndex","innerHTML","cell","\x26nbsp;","Can\x27t Get The Position ?","RowCount","ColCount","Unknown Error , pos ",":"," already have cell","Unknown Error , Unable to find bestpos","tbody","richDropDown","list_Templates","subcolumns","addcolumns","subcolspan","addcolspan","btn_row_dialog","btn_cell_dialog","inp_cell_width","inp_cell_height","btn_cell_editcell","tabledesign","subrows","addrows","subrowspan","addrowspan","display","style","none","disabled","value","width","height","[[ValidNumber]]","","\x3Ctable\x3E\x3Ctr\x3E\x3Ctd height=\x2224\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctable\x3E\x3Ctr\x3E\x3Ctd\x3E\x3C/td\x3E\x3Ctd\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctable\x3E\x3Ctr\x3E\x3Ctd\x3E\x3C/td\x3E\x3Ctd\x3E\x3C/td\x3E\x3Ctd\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctable border=\x220\x22 cellpadding=\x220\x22 cellspacing=\x220\x22\x3E\x3Ctr\x3E\x3Ctd valign=\x22top\x22 colspan=\x222\x22\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22 rowspan=\x222\x22\x3E\x3C/td\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3Ctd valign=\x22top\x22 rowspan=\x222\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3Ctr\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","\x3Ctable border=\x220\x22 cellpadding=\x220\x22 cellspacing=\x220\x22\x3E\x3Ctr\x3E\x3Ctd valign=\x22top\x22 colspan=\x223\x22\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3Ctd valign=\x22top\x22\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E\x3Ctd valign=\x22top\x22 colspan=\x223\x22\x3E\x3C/td\x3E\x3C/tr\x3E\x3C/table\x3E","DIV","onclick","bgColor","#d4d0c8","onmouseover","onmouseout","ondblclick","contains","ToggleBorder","backgroundColor","highlight","cssText","runtimeStyle","background-color:gray","onload","body","document","csstext","font:normal 11px Tahoma;background-color:windowtext;","isOpen"];function Table_GetCellFromMap(Ox50b,Ox50c,Ox50d){var Ox50e=Ox50b[Ox50c];if(Ox50e){return Ox50e[Ox50d];} ;} ;function Table_CanSubRowSpan(Ox396){return Ox396[OxO7e9c[0]]>1;} ;function Element_RemoveNode(element,Ox511){if(element[OxO7e9c[1]]){element.removeNode(Ox511);return ;} ;var p=element[OxO7e9c[2]];if(!p){return ;} ;if(Ox511){p.removeChild(element);return ;} ;while(true){var Ox217=element[OxO7e9c[3]];if(!Ox217){break ;} ;p.insertBefore(Ox217,element);} ;p.removeChild(element);} ;function Table_CanSubColSpan(Ox396){return Ox396[OxO7e9c[4]]>1;} ;function Table_GetTable(Ox43){for(;Ox43!=null;Ox43=Ox43[OxO7e9c[2]]){if(Ox43[OxO7e9c[5]]==OxO7e9c[6]){return Ox43;} ;} ;return null;} ;function Table_SubRowSpan(Ox396){var Ox394=Table_GetTable(Ox396);var Ox4=Table_CalculateTableInfo(Ox394);var Ox50b=Ox4[OxO7e9c[7]];var Ox126=Table_GetCellPositionFromMap(Ox50b,Ox396);var Ox515=Ox394[OxO7e9c[9]].item(Ox396[OxO7e9c[2]][OxO7e9c[8]]+Ox396[OxO7e9c[0]]-1);var Ox516=0;for(var i=0;i<Ox515[OxO7e9c[11]][OxO7e9c[10]];i++){var Ox517=Ox515[OxO7e9c[11]].item(i);var Ox518=Table_GetCellPositionFromMap(Ox50b,Ox517);if(Ox518[OxO7e9c[12]]<Ox126[OxO7e9c[12]]){Ox516=i+1;} ;} ;for(var i=0;i<Ox396[OxO7e9c[4]];i++){var Ox217=Ox515.insertCell(Ox516);if(Browser_IsOpera()){Ox217[OxO7e9c[13]]=OxO7e9c[14];} else {if(Browser_IsGecko()||Browser_IsSafari()){Ox217[OxO7e9c[13]]=OxO7e9c[15];} ;} ;} ;Ox396[OxO7e9c[0]]--;} ;function Table_GetCellPositionFromMap(Ox50b,Ox396){for(var y=0;y<Ox50b[OxO7e9c[10]];y++){var Ox50e=Ox50b[y];for(var x=0;x<Ox50e[OxO7e9c[10]];x++){if(Ox50e[x]==Ox396){return {rowIndex:y,cellIndex:x};} ;} ;} ;throw ( new Error(-1,OxO7e9c[16]));} ;function Table_GetCellMap(Ox394){return Table_CalculateTableInfo(Ox394)[OxO7e9c[7]];} ;function Table_GetRowCount(Ox43){return Table_CalculateTableInfo(Ox43)[OxO7e9c[17]];} ;function Table_GetColCount(Ox43){return Table_CalculateTableInfo(Ox43)[OxO7e9c[18]];} ;function Table_CalculateTableInfo(Ox43){var Ox394=Table_GetTable(Ox43);var Ox51e=Ox394[OxO7e9c[9]];for(var Oxa=Ox51e[OxO7e9c[10]]-1;Oxa>=0;Oxa--){var Ox386=Ox51e.item(Oxa);if(Ox386[OxO7e9c[11]][OxO7e9c[10]]==0){Element_RemoveNode(Ox386,true);continue ;} ;} ;var Ox51f=Ox51e[OxO7e9c[10]];var Ox520=0;var Ox521= new Array(Ox51e.length);for(var Ox522=0;Ox522<Ox51f;Ox522++){Ox521[Ox522]=[];} ;function Ox523(Oxa,Ox217,Ox396){while(Oxa>=Ox51f){Ox521[Ox51f]=[];Ox51f++;} ;var Ox524=Ox521[Oxa];if(Ox217>=Ox520){Ox520=Ox217+1;} ;if(Ox524[Ox217]!=null){throw ( new Error(-1,OxO7e9c[19]+Oxa+OxO7e9c[20]+Ox217+OxO7e9c[21]));} ;Ox524[Ox217]=Ox396;} ;function Ox525(Oxa,Ox217){var Ox524=Ox521[Oxa];if(Ox524){return Ox524[Ox217];} ;} ;for(var Ox522=0;Ox522<Ox51e[OxO7e9c[10]];Ox522++){var Ox386=Ox51e.item(Ox522);var Ox526=Ox386[OxO7e9c[11]];for(var Ox39a=0;Ox39a<Ox526[OxO7e9c[10]];Ox39a++){var Ox396=Ox526.item(Ox39a);var Ox527=Ox396[OxO7e9c[0]];var Ox528=Ox396[OxO7e9c[4]];var Ox524=Ox521[Ox522];var Ox529=-1;for(var Ox52a=0;Ox52a<Ox520+Ox528+1;Ox52a++){if(Ox527==1&&Ox528==1){if(Ox524[Ox52a]==null){Ox529=Ox52a;break ;} ;} else {var Ox52b=true;for(var Ox52c=0;Ox52c<Ox527;Ox52c++){for(var Ox52d=0;Ox52d<Ox528;Ox52d++){if(Ox525(Ox522+Ox52c,Ox52a+Ox52d)!=null){Ox52b=false;break ;} ;} ;} ;if(Ox52b){Ox529=Ox52a;break ;} ;} ;} ;if(Ox529==-1){throw ( new Error(-1,OxO7e9c[22]));} ;if(Ox527==1&&Ox528==1){Ox523(Ox522,Ox529,Ox396);} else {for(var Ox52c=0;Ox52c<Ox527;Ox52c++){for(var Ox52d=0;Ox52d<Ox528;Ox52d++){Ox523(Ox522+Ox52c,Ox529+Ox52d,Ox396);} ;} ;} ;} ;} ;var Ox13e={};Ox13e[OxO7e9c[17]]=Ox51f;Ox13e[OxO7e9c[18]]=Ox520;Ox13e[OxO7e9c[7]]=Ox521;for(var Oxa=0;Oxa<Ox51f;Oxa++){var Ox524=Ox521[Oxa];for(var Ox217=0;Ox217<Ox520;Ox217++){} ;} ;return Ox13e;} ;function Table_SubColSpan(Ox396){var Ox394=Table_GetTable(Ox396);Ox396[OxO7e9c[2]].insertCell(Ox396[OxO7e9c[12]]+1)[OxO7e9c[0]]=Ox396[OxO7e9c[0]];Ox396[OxO7e9c[4]]--;} ;function Table_CanAddRowSpan(Ox396){var Ox394=Table_GetTable(Ox396);var Ox4=Table_CalculateTableInfo(Ox394);var Ox50b=Ox4[OxO7e9c[7]];var Ox126=Table_GetCellPositionFromMap(Ox50b,Ox396);var Ox530=0;for(var Ox217=0;Ox217<Ox396[OxO7e9c[4]];Ox217++){var Ox531=Table_GetCellFromMap(Ox50b,Ox126[OxO7e9c[8]]+Ox396[OxO7e9c[0]],Ox126[OxO7e9c[12]]+Ox217);if(Ox531==null){return false;} ;if(Ox530!=0&&Ox530!=Ox531[OxO7e9c[0]]){return false;} ;Ox530=Ox531[OxO7e9c[0]];var Ox532=Table_GetCellPositionFromMap(Ox50b,Ox531);if(Ox532[OxO7e9c[12]]<Ox126[OxO7e9c[12]]){return false;} ;if(Ox532[OxO7e9c[12]]+Ox531[OxO7e9c[4]]>Ox126[OxO7e9c[12]]+Ox396[OxO7e9c[4]]){return false;} ;} ;return true;} ;function Table_AddRow(Ox396){var Ox394=Table_GetTable(Ox396);var Ox4=Table_CalculateTableInfo(Ox394);var Ox50b=Ox4[OxO7e9c[7]];var Ox520=Ox4[OxO7e9c[18]];var Ox51f=Ox4[OxO7e9c[17]];var Ox386;if(!Browser_IsSafari()){Ox386=Ox394.insertRow(-1);} else {var Ox224=document.createElement(OxO7e9c[23]);Ox394.appendChild(Ox224);Ox386=Ox224.insertRow(-1);} ;for(var i=0;i<Ox520;i++){var Ox217=Ox386.insertCell(-1);if(Browser_IsOpera()){Ox217[OxO7e9c[13]]=OxO7e9c[14];} else {if(Browser_IsGecko()||Browser_IsSafari()){Ox217[OxO7e9c[13]]=OxO7e9c[15];} ;} ;} ;} ;function Table_AddCol(Ox396){var Ox394=Table_GetTable(Ox396);for(var Oxa=0;Oxa<Ox394[OxO7e9c[9]][OxO7e9c[10]];Oxa++){var Ox386=Ox394[OxO7e9c[9]].item(Oxa);var Ox217=Ox386.insertCell(-1);if(Browser_IsOpera()){Ox217[OxO7e9c[13]]=OxO7e9c[14];} else {if(Browser_IsGecko()||Browser_IsSafari()){Ox217[OxO7e9c[13]]=OxO7e9c[15];} ;} ;} ;} ;function Table_CleanUpTableInfo(Ox394,Ox4){var Ox51e=Ox394[OxO7e9c[9]];for(var Oxa=Ox51e[OxO7e9c[10]]-1;Oxa>=0;Oxa--){var Ox386=Ox51e.item(Oxa);if(Ox386[OxO7e9c[11]][OxO7e9c[10]]==0){Element_RemoveNode(Ox386,true);continue ;} ;} ;var Ox50b=Ox4[OxO7e9c[7]];var Ox520=Ox4[OxO7e9c[18]];var Ox51f=Ox4[OxO7e9c[17]];for(var Ox522=1;Ox522<Ox51f;Ox522++){var Ox536=true;for(var Ox39a=0;Ox39a<Ox520;Ox39a++){if(Table_GetCellFromMap(Ox50b,Ox522-1,Ox39a)!=Table_GetCellFromMap(Ox50b,Ox522,Ox39a)){Ox536=false;break ;} ;} ;if(Ox536){for(var Ox39a=0;Ox39a<Ox520;Ox39a++){var Ox396=Table_GetCellFromMap(Ox50b,Ox522,Ox39a);if(Ox396){if(Ox396[OxO7e9c[0]]>1){Ox396[OxO7e9c[0]]=Ox396[OxO7e9c[0]]-1;} ;Ox39a+=Ox396[OxO7e9c[4]]-1;} ;} ;} ;} ;for(var Ox39a=1;Ox39a<Ox520;Ox39a++){var Ox536=true;for(var Ox522=0;Ox522<Ox51f;Ox522++){if(Table_GetCellFromMap(Ox50b,Ox522,Ox39a-1)!=Table_GetCellFromMap(Ox50b,Ox522,Ox39a)){Ox536=false;break ;} ;} ;if(Ox536){for(var Ox522=0;Ox522<Ox51f;Ox522++){var Ox396=Table_GetCellFromMap(Ox50b,Ox522,Ox39a);if(Ox396){if(Ox396[OxO7e9c[4]]>1){Ox396[OxO7e9c[4]]=Ox396[OxO7e9c[4]]-1;} ;Ox522+=Ox396[OxO7e9c[0]]-1;} ;} ;} ;} ;} ;function Table_SubRow(Ox396){var Ox394=Table_GetTable(Ox396);var Ox4=Table_CalculateTableInfo(Ox394);var Ox50b=Ox4[OxO7e9c[7]];var Ox520=Ox4[OxO7e9c[18]];var Ox51f=Ox4[OxO7e9c[17]];if(Ox51f==0){return ;} ;var Ox538={};var Ox522=Ox51f-1;for(var Ox39a=0;Ox39a<Ox520;Ox39a++){var Ox396=Table_GetCellFromMap(Ox50b,Ox522,Ox39a);if(Ox396){if(Ox396[OxO7e9c[2]]==null){continue ;} ;if(Ox396[OxO7e9c[0]]==1){Element_RemoveNode(Ox396,true);} else {Ox396[OxO7e9c[0]]=Ox396[OxO7e9c[0]]-1;} ;} ;} ;Ox4[OxO7e9c[17]]--;Table_CleanUpTableInfo(Ox394,Ox4);} ;function Table_CanAddColSpan(Ox396){var Ox394=Table_GetTable(Ox396);var Ox4=Table_CalculateTableInfo(Ox394);var Ox50b=Ox4[OxO7e9c[7]];var Ox126=Table_GetCellPositionFromMap(Ox50b,Ox396);var Ox53a=0;for(var Oxa=0;Oxa<Ox396[OxO7e9c[0]];Oxa++){var Ox531=Table_GetCellFromMap(Ox50b,Ox126[OxO7e9c[8]]+Oxa,Ox126[OxO7e9c[12]]+Ox396[OxO7e9c[4]]);if(Ox531==null){return false;} ;if(Ox53a!=0&&Ox53a!=Ox531[OxO7e9c[4]]){return false;} ;Ox53a=Ox531[OxO7e9c[4]];var Ox532=Table_GetCellPositionFromMap(Ox50b,Ox531);if(Ox532[OxO7e9c[8]]<Ox126[OxO7e9c[8]]){return false;} ;if(Ox532[OxO7e9c[8]]+Ox531[OxO7e9c[0]]>Ox126[OxO7e9c[8]]+Ox396[OxO7e9c[0]]){return false;} ;} ;return true;} ;function Table_AddRowSpan(Ox396){var Ox394=Table_GetTable(Ox396);var Ox4=Table_CalculateTableInfo(Ox394);var Ox50b=Ox4[OxO7e9c[7]];var Ox126=Table_GetCellPositionFromMap(Ox50b,Ox396);var Ox530=0;for(var Ox217=0;Ox217<Ox396[OxO7e9c[4]];Ox217++){var Ox531=Table_GetCellFromMap(Ox50b,Ox126[OxO7e9c[8]]+Ox396[OxO7e9c[0]],Ox126[OxO7e9c[12]]+Ox217);if(Ox530==0){Ox530=Ox531[OxO7e9c[0]];} ;Element_RemoveNode(Ox531,true);} ;Ox396[OxO7e9c[0]]=Ox396[OxO7e9c[0]]+Ox530;for(var Ox522=0;Ox522<Ox396[OxO7e9c[0]];Ox522++){for(var Ox39a=0;Ox39a<Ox396[OxO7e9c[4]];Ox39a++){Ox4[OxO7e9c[7]][Ox126[OxO7e9c[8]]+Ox522][Ox126[OxO7e9c[12]]+Ox39a]=Ox396;} ;} ;Table_CleanUpTableInfo(Ox394,Ox4);} ;function Table_AddColSpan(Ox396){var Ox394=Table_GetTable(Ox396);var Ox4=Table_CalculateTableInfo(Ox394);var Ox50b=Ox4[OxO7e9c[7]];var Ox126=Table_GetCellPositionFromMap(Ox50b,Ox396);var Ox53a=0;for(var Oxa=0;Oxa<Ox396[OxO7e9c[0]];Oxa++){var Ox531=Table_GetCellFromMap(Ox50b,Ox126[OxO7e9c[8]]+Oxa,Ox126[OxO7e9c[12]]+Ox396[OxO7e9c[4]]);if(Ox53a==0){Ox53a=Ox531[OxO7e9c[4]];} ;Element_RemoveNode(Ox531,true);} ;Ox396[OxO7e9c[4]]+=Ox53a;for(var Ox522=0;Ox522<Ox396[OxO7e9c[0]];Ox522++){for(var Ox39a=0;Ox39a<Ox396[OxO7e9c[4]];Ox39a++){Ox4[OxO7e9c[7]][Ox126[OxO7e9c[8]]+Ox522][Ox126[OxO7e9c[12]]+Ox39a]=Ox396;} ;} ;Table_CleanUpTableInfo(Ox394,Ox4);} ;function Table_SubCol(Ox396){var Ox394=Table_GetTable(Ox396);var Ox4=Table_CalculateTableInfo(Ox394);var Ox50b=Ox4[OxO7e9c[7]];var Ox520=Ox4[OxO7e9c[18]];var Ox51f=Ox4[OxO7e9c[17]];if(Ox51f==0){return ;} ;var Ox538={};var Ox39a=Ox520-1;for(var Ox522=0;Ox522<Ox51f;Ox522++){var Ox396=Table_GetCellFromMap(Ox50b,Ox522,Ox39a);if(Ox396[OxO7e9c[2]]==null){continue ;} ;if(Ox396[OxO7e9c[4]]==1){Element_RemoveNode(Ox396,true);} else {Ox396[OxO7e9c[4]]=Ox396[OxO7e9c[4]]-1;} ;} ;Ox4[OxO7e9c[18]]--;Table_CleanUpTableInfo(Ox394,Ox4);} ;var richDropDown=Window_GetElement(window,OxO7e9c[24],true);var list_Templates=Window_GetElement(window,OxO7e9c[25],true);var subcolumns=Window_GetElement(window,OxO7e9c[26],true);var addcolumns=Window_GetElement(window,OxO7e9c[27],true);var subcolspan=Window_GetElement(window,OxO7e9c[28],true);var addcolspan=Window_GetElement(window,OxO7e9c[29],true);var btn_row_dialog=Window_GetElement(window,OxO7e9c[30],true);var btn_cell_dialog=Window_GetElement(window,OxO7e9c[31],true);var inp_cell_width=Window_GetElement(window,OxO7e9c[32],true);var inp_cell_height=Window_GetElement(window,OxO7e9c[33],true);var btn_cell_editcell=Window_GetElement(window,OxO7e9c[34],true);var tabledesign=Window_GetElement(window,OxO7e9c[35],true);var subrows=Window_GetElement(window,OxO7e9c[36],true);var addrows=Window_GetElement(window,OxO7e9c[37],true);var subrowspan=Window_GetElement(window,OxO7e9c[38],true);var addrowspan=Window_GetElement(window,OxO7e9c[39],true);btn_cell_editcell[OxO7e9c[41]][OxO7e9c[40]]=OxO7e9c[42];UpdateState=function UpdateState_InsertTable(){btn_cell_editcell[OxO7e9c[43]]=btn_row_dialog[OxO7e9c[43]]=btn_cell_dialog[OxO7e9c[43]]=GetElementCell()==null;} ;SyncToView=function SyncToView_InsertTable(){var Ox550=GetElementCell();if(Ox550){inp_cell_width[OxO7e9c[44]]=Ox550[OxO7e9c[45]];inp_cell_height[OxO7e9c[44]]=Ox550[OxO7e9c[46]];} ;} ;SyncTo=function SyncTo_InsertTable(element){var Ox550=GetElementCell();if(Ox550){try{Ox550[OxO7e9c[45]]=inp_cell_width[OxO7e9c[44]];Ox550[OxO7e9c[46]]=inp_cell_height[OxO7e9c[44]];} catch(er){alert(OxO7e9c[47]);} ;} ;} ;function selectTemplate(Ox9a){var Ox553=OxO7e9c[48];switch(Ox9a){case 1:Ox553=OxO7e9c[49];break ;;case 2:Ox553=OxO7e9c[50];break ;;case 3:Ox553=OxO7e9c[51];break ;;case 4:Ox553=OxO7e9c[52];Ox553=Ox553+OxO7e9c[53];Ox553=Ox553+OxO7e9c[54];break ;;case 5:Ox553=OxO7e9c[52];Ox553=Ox553+OxO7e9c[55];break ;;case 6:Ox553=OxO7e9c[56];Ox553=Ox553+OxO7e9c[57];Ox553=Ox553+OxO7e9c[58];break ;;default:break ;;} ;try{var Ox7c=document.createElement(OxO7e9c[59]);Ox7c[OxO7e9c[13]]=Ox553;var Ox394=Ox7c.children(0);ApplyTable(Ox394,element);ApplyTable(Ox394,tabledesign);HandleTableChanged();hidePopup();} catch(x){} ;} ;subcolumns[OxO7e9c[60]]=function subcolumns_onclick(){Table_SubCol(GetElementCell());Table_SubCol(currentcell);HandleTableChanged();} ;addcolumns[OxO7e9c[60]]=function addcolumns_onclick(){Table_AddCol(GetElementCell());Table_AddCol(currentcell);HandleTableChanged();} ;subrows[OxO7e9c[60]]=function subrows_onclick(){Table_SubRow(GetElementCell());Table_SubRow(currentcell);HandleTableChanged();} ;addrows[OxO7e9c[60]]=function addrows_onclick(){Table_AddRow(currentcell);Table_AddRow(GetElementCell());HandleTableChanged();} ;subcolspan[OxO7e9c[60]]=function subcolspan_onclick(){Table_SubColSpan(GetElementCell());Table_SubColSpan(currentcell);HandleTableChanged();} ;addcolspan[OxO7e9c[60]]=function addcolspan_onclick(){Table_AddColSpan(GetElementCell());Table_AddColSpan(currentcell);HandleTableChanged();} ;subrowspan[OxO7e9c[60]]=function subrowspan_onclick(){Table_SubRowSpan(GetElementCell());Table_SubRowSpan(currentcell);HandleTableChanged();} ;addrowspan[OxO7e9c[60]]=function addrowspan_onclick(){Table_AddRowSpan(GetElementCell());Table_AddRowSpan(currentcell);HandleTableChanged();} ;function InitDesignTableCells(){for(var Oxa=0;Oxa<tabledesign[OxO7e9c[9]][OxO7e9c[10]];Oxa++){var Ox386=tabledesign[OxO7e9c[9]][Oxa];for(var Ox217=0;Ox217<Ox386[OxO7e9c[11]][OxO7e9c[10]];Ox217++){var Ox396=Ox386[OxO7e9c[11]][Ox217];Ox396.removeAttribute(OxO7e9c[45]);Ox396.removeAttribute(OxO7e9c[46]);Ox396[OxO7e9c[45]]=OxO7e9c[48];Ox396[OxO7e9c[46]]=OxO7e9c[48];Ox396[OxO7e9c[61]]=OxO7e9c[62];Ox396[OxO7e9c[63]]=cell_mouseover;Ox396[OxO7e9c[64]]=cell_mouseout;Ox396[OxO7e9c[60]]=cell_click;Ox396[OxO7e9c[65]]=cell_dblclick;} ;} ;} ;function Element_Contains(element,Ox183){if(!Browser_IsOpera()){if(element[OxO7e9c[66]]){return element.contains(Ox183);} ;} ;for(;Ox183!=null;Ox183=Ox183[OxO7e9c[2]]){if(element==Ox183){return true;} ;} ;return false;} ;function HandleTableChanged(){if(!Element_Contains(tabledesign,currentcell)){SetCurrentCell(tabledesign.rows(0).cells(0));} ;InitDesignTableCells();UpdateButtonStates();editor.ExecCommand(OxO7e9c[67]);editor.ExecCommand(OxO7e9c[67]);} ;function cell_mouseover(){var Ox396=this;Ox396[OxO7e9c[41]][OxO7e9c[68]]=OxO7e9c[69];} ;function cell_mouseout(){var Ox396=this;Ox396[OxO7e9c[41]][OxO7e9c[68]]=OxO7e9c[62];} ;function cell_click(){var Ox396=this;SetCurrentCell(Ox396);} ;function cell_dblclick(){var Ox396=this;SetCurrentCell(Ox396);} ;btn_cell_editcell[OxO7e9c[60]]=function btn_cell_editcell_onclick(){var Ox396=GetElementCell();var Ox281=editor.EditInWindow(Ox396.innerHTML,window);if(Ox281!=null&&Ox281!==false){Ox396[OxO7e9c[13]]=Ox281;} ;} ;btn_cell_dialog[OxO7e9c[60]]=function btn_cell_dialog_onclick(){editor.SetNextDialogWindow(window);editor.ShowTagDialogWithNoCancellable(GetElementCell());} ;btn_row_dialog[OxO7e9c[60]]=function btn_row_dialog_onclick(){editor.SetNextDialogWindow(window);editor.ShowTagDialogWithNoCancellable(GetElementCell().parentNode);} ;var currentcell=null;function GetElementCell(){if(currentcell==null){return null;} ;return element[OxO7e9c[9]][currentcell[OxO7e9c[2]][OxO7e9c[8]]][OxO7e9c[11]][currentcell[OxO7e9c[12]]];} ;function SetCurrentCell(Ox396){if(currentcell!=null){if(Browser_IsWinIE()){currentcell[OxO7e9c[71]][OxO7e9c[70]]=OxO7e9c[48];} else {currentcell[OxO7e9c[41]][OxO7e9c[70]]=OxO7e9c[48];} ;} ;currentcell=Ox396;if(Browser_IsWinIE()){currentcell[OxO7e9c[71]][OxO7e9c[70]]=OxO7e9c[72];} else {currentcell[OxO7e9c[41]][OxO7e9c[70]]=OxO7e9c[72];} ;UpdateButtonStates();SyncToViewInternal();} ;function UpdateButtonStates(){subcolspan[OxO7e9c[43]]=!Table_CanSubColSpan(currentcell);addcolspan[OxO7e9c[43]]=!Table_CanAddColSpan(currentcell);subrowspan[OxO7e9c[43]]=!Table_CanSubRowSpan(currentcell);addrowspan[OxO7e9c[43]]=!Table_CanAddRowSpan(currentcell);subrows[OxO7e9c[43]]=Table_GetRowCount(currentcell)<2;subcolumns[OxO7e9c[43]]=Table_GetColCount(currentcell)<2;} ;function ApplyTable(src,Ox56a){if(Browser_IsSafari()){Ox56a[OxO7e9c[41]][OxO7e9c[46]]=OxO7e9c[48];} ;for(var Oxa=Ox56a[OxO7e9c[9]][OxO7e9c[10]]-1;Oxa>=0;Oxa--){Ox56a[OxO7e9c[9]][Oxa].removeNode(true);} ;for(var Oxa=0;Oxa<src[OxO7e9c[9]][OxO7e9c[10]];Oxa++){var Ox56b=src[OxO7e9c[9]][Oxa];var Ox56c;if(!Browser_IsSafari()){Ox56c=Ox56a.insertRow(-1);} else {var Ox224=document.createElement(OxO7e9c[23]);Ox56a.appendChild(Ox224);Ox56c=Ox224.insertRow(-1);} ;Ox56c[OxO7e9c[41]][OxO7e9c[70]]=Ox56b[OxO7e9c[41]][OxO7e9c[70]];for(var Ox217=0;Ox217<Ox56b[OxO7e9c[11]][OxO7e9c[10]];Ox217++){var Ox56d=Ox56b[OxO7e9c[11]][Ox217];var Ox56e=Ox56c.insertCell(-1);Ox56e[OxO7e9c[0]]=Ox56d[OxO7e9c[0]];Ox56e[OxO7e9c[4]]=Ox56d[OxO7e9c[4]];Ox56e[OxO7e9c[41]][OxO7e9c[70]]=Ox56d[OxO7e9c[41]][OxO7e9c[70]];if(Browser_IsOpera()){Ox56e[OxO7e9c[13]]=OxO7e9c[14];} else {if(Browser_IsGecko()||Browser_IsSafari()){Ox56e[OxO7e9c[13]]=OxO7e9c[15];} ;} ;} ;} ;} ;window[OxO7e9c[73]]=function window_onload(){ApplyTable(element,tabledesign);InitDesignTableCells();SetCurrentCell(tabledesign[OxO7e9c[9]][0][OxO7e9c[11]][0]);} ;function updateList(){} ;var oPopup;if(Browser_IsWinIE()){oPopup=window.createPopup();} else {richDropDown[OxO7e9c[41]][OxO7e9c[40]]=OxO7e9c[42];} ;function selectTemplates(){if(Browser_IsWinIE()){oPopup[OxO7e9c[75]][OxO7e9c[74]][OxO7e9c[13]]=list_Templates[OxO7e9c[13]];oPopup[OxO7e9c[75]][OxO7e9c[74]][OxO7e9c[41]][OxO7e9c[76]]=OxO7e9c[77];oPopup.show(0,32,380,220,richDropDown);} ;} ;function hidePopup(){if(Browser_IsWinIE()){if(oPopup){if(oPopup[OxO7e9c[78]]){oPopup.hide();} ;} ;} ;} ;