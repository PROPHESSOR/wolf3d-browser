/*
 * ================================//
 * Интерпретатор языка JsMobileBasic
 * ~~~~~~~~~~by PROPHESSOR~~~~~~~~~~
 * ================================//
*/

var _0xc6ac=['\x44\x65\x62\x75\x67\x5f\x4d\x6f\x64\x65','\x25\x63\x20','\x65\x6e\x74\x65\x72\x46\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e','\x6c\x65\x61\x76\x65\x46\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e','\x69\x6e\x63\x6c\x75\x64\x65\x48\x54\x4d\x4c','\x6f\x6e\x4d\x6f\x75\x73\x65\x44\x6f\x77\x6e','\x6f\x6e\x4d\x6f\x75\x73\x65\x55\x70','\x6f\x6e\x4b\x65\x79\x44\x6f\x77\x6e','\x6f\x6e\x4b\x65\x79\x50\x72\x65\x73\x73','\x6f\x6e\x4b\x65\x79\x55\x70','\x6f\x6e\x52\x69\x67\x68\x74\x43\x6c\x69\x63\x6b','\x4c\x6f\x6f\x70','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x6d\x6f\x75\x73\x65\x6d\x6f\x76\x65','\x6f\x66\x66\x73\x65\x74\x58','\x6f\x66\x66\x73\x65\x74\x59','\x63\x6c\x69\x63\x6b','\x6d\x6f\x75\x73\x65\x75\x70','\x6b\x65\x79\x70\x72\x65\x73\x73','\x6b\x65\x79\x43\x6f\x64\x65','\x6b\x65\x79\x75\x70','\x6f\x6e\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75','\x72\x65\x71\x75\x65\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x46\x72\x61\x6d\x65','\x77\x65\x62\x6b\x69\x74\x52\x65\x71\x75\x65\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x46\x72\x61\x6d\x65','\x6d\x6f\x7a\x52\x65\x71\x75\x65\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x46\x72\x61\x6d\x65','\x6d\x73\x52\x65\x71\x75\x65\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x46\x72\x61\x6d\x65','\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74','\x4a\x73\x4d\x6f\x62\x69\x6c\x65\x42\x61\x73\x69\x63','\x41\x6c\x70\x68\x61\x20\x31\x31','\x50\x52\x4f\x50\x48\x45\x53\x53\x4f\x52','\x68\x74\x74\x70\x3a\x2f\x2f\x76\x6b\x2e\x63\x6f\x6d\x2f\x4a\x73\x4d\x6f\x62\x69\x6c\x65\x42\x61\x73\x69\x63','\x4d\x6f\x62\x69\x6c\x65','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x66\x75\x6e\x63\x74\x69\x6f\x6e','\x6e\x77\x2e\x67\x75\x69','\x23\x3d\x3d\x3d\x3d\x3d\x20\u0412\u043a\u043b\u044e\u0447\u0451\u043d\x20\u0440\u0435\u0436\u0438\u043c\x20\u043e\u0442\u043b\u0430\u0434\u043a\u0438\x20\x3d\x3d\x3d\x3d\x3d\x23','\x63\x6f\x6c\x6f\x72\x3a\x67\x72\x61\x79\x3b','\x6e\x61\x6d\x65','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x67\x72\x61\x79\x3b\x63\x6f\x6c\x6f\x72\x3a\x79\x65\x6c\x6c\x6f\x77\x3b','\x76\x2e\x20','\x62\x79\x20','\x61\x75\x74\x68\x6f\x72','\x75\x72\x6c','\x2f\x2f\x20\x3d\x3d\x3d\x3d\x3d\x3d\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f\x20\u0440\u0430\u0431\u043e\u0447\u0435\u0439\x20\u0441\u0440\u0435\u0434\u044b\x3d\x3d\x3d\x3d\x3d\x3d\x2f\x2f','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\u041d\u0435\x20\u043d\u0430\u0439\u0434\u0435\u043d\u0430\x20\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f\x20\u0432\x20\u0444\u0430\u0439\u043b\u0435\x20\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c\x21','\x74\x79\x70\x65','\x67\x72\x61\x70\x68\x69\x63','\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f\x20\u0433\u0440\u0430\u0444\u0438\u043a\u0430\x21','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x62\x6c\x61\x63\x6b\x3b\x63\x6f\x6c\x6f\x72\x3a\x79\x65\x6c\x6c\x6f\x77\x3b','\x24\x73\x74\x79\x6c\x65','\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c','\x68\x74\x6d\x6c\x7b\x6f\x76\x65\x72\x66\x6c\x6f\x77\x3a\x20\x68\x69\x64\x64\x65\x6e\x3b\x7d\x20\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x70\x61\x64\x64\x69\x6e\x67\x3a\x30\x3b\x7d','\x67\x65\x74\x43\x6f\x6e\x74\x65\x78\x74','\x63\x61\x6e\x76\x61\x73\x5f\x73\x69\x7a\x65','\x43\x61\x6e\x76\x61\x73\x20\u0440\u0430\u0441\u0442\u044f\u043d\u0443\u0442\x20\u043d\u0430\x20\u0432\u0435\u0441\u044c\x20\u044d\u043a\u0440\u0430\u043d','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x62\x6c\x61\x63\x6b\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x30\x30\x66\x66\x30\x30\x3b','\x68\x65\x69\x67\x68\x74','\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74','\x77\x69\x64\x74\x68','\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68','\x73\x74\x79\x6c\x65','\x64\x69\x73\x70\x6c\x61\x79\x3a\x62\x6c\x6f\x63\x6b\x3b\x20\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x20\x70\x61\x64\x64\x69\x6e\x67\x3a\x30\x3b\x20\x70\x6f\x73\x69\x74\x69\x6f\x6e\x3a\x66\x69\x78\x65\x64\x3b\x20\x74\x6f\x70\x3a\x30\x70\x78\x3b\x20\x6c\x65\x66\x74\x3a\x20\x30\x70\x78\x3b\x20\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x20\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b','\x62\x6f\x64\x79','\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65','\x74\x69\x74\x6c\x65','\u0418\u043c\u044f\x20\u043f\u0440\u043e\u0435\u043a\u0442\u0430\x3a\x20','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x62\x72\x6f\x77\x6e\x3b\x63\x6f\x6c\x6f\x72\x3a\x79\x65\x6c\x6c\x6f\x77\x3b','\x70\x6c\x61\x79\x65\x72\x30','\x2f\x2f\x20\x3d\x3d\x3d\x3d\x3d\x3d\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f\x20\u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0442\u043e\u0440\u0430\x3d\x3d\x3d\x3d\x3d\x3d\x2f\x2f','\x66\x69\x6c\x6c\x53\x74\x79\x6c\x65','\x73\x74\x72\x6f\x6b\x65\x53\x74\x79\x6c\x65','\x6c\x69\x6e\x65\x57\x69\x64\x74\x68','\x66\x69\x6c\x6c\x52\x65\x63\x74','\x72\x65\x73\x74\x6f\x72\x65','\x73\x74\x72\x6f\x6b\x65\x52\x65\x63\x74','\x63\x6c\x65\x61\x72\x52\x65\x63\x74','\x62\x65\x67\x69\x6e\x50\x61\x74\x68','\x6d\x6f\x76\x65\x54\x6f','\x6c\x69\x6e\x65\x54\x6f','\x73\x74\x72\x6f\x6b\x65','\x73\x71\x72\x74','\x61\x72\x63','\x66\x69\x6c\x6c','\x6c\x65\x6e\x67\x74\x68','\x66\x69\x6c\x6c\x54\x65\x78\x74','\x70\x78\x20','\x66\x61\x6d\x69\x6c\x79','\x66\x6f\x6e\x74','\x73\x69\x7a\x65','\x63\x72\x65\x61\x74\x65\x4c\x69\x6e\x65\x61\x72\x47\x72\x61\x64\x69\x65\x6e\x74','\x63\x72\x65\x61\x74\x65\x52\x61\x64\x69\x61\x6c\x47\x72\x61\x64\x69\x65\x6e\x74','\x61\x64\x64\x43\x6f\x6c\x6f\x72\x53\x74\x6f\x70','\x72\x67\x62\x28','\x72\x67\x62\x61\x28','\x73\x72\x63','\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435\x21\x20\u0424\u0443\u043d\u043a\u0446\u0438\u044f\x20\x73\x70\x72\x69\x74\x65\x47\x65\x6c\x20\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442\x20\u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\x21\x20\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435\u0441\u044c\x20\u0434\u043e\x20\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439\x20\u0432\u0435\u0440\u0441\u0438\u0438\x21','\x72\x65\x73\x69\x7a\x65','\x64\x72\x61\x77\x49\x6d\x61\x67\x65','\x63\x72\x65\x61\x74\x65\x50\x61\x74\x74\x65\x72\x6e','\x70\x6f\x73\x69\x74\x69\x6f\x6e\x3a\x66\x69\x78\x65\x64\x3b\x74\x6f\x70\x3a\x30\x70\x78\x3b\x6c\x65\x66\x74\x3a\x30\x70\x78\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x2d\x77\x65\x62\x6b\x69\x74\x2d\x75\x73\x65\x72\x2d\x73\x65\x6c\x65\x63\x74\x3a\x6e\x6f\x6e\x65\x3b','\x3c\x62\x72\x2f\x3e','\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74','\x70\x6c\x61\x79\x65\x72','\x61\x75\x64\x69\x6f','\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64','\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65','\x6c\x6f\x6f\x70','\x70\x6c\x61\x79','\x70\x61\x75\x73\x65','\u041d\u0430\x20\u0434\u0430\u043d\u043d\u043e\u043c\x20\u043a\u0430\u043d\u0430\u043b\u0435\x20\u043d\u0435\u0442\x20\u043f\u043b\u0435\u0435\u0440\u0430','\x72\x61\x6e\x64\x6f\x6d','\x73\x69\x6e','\x63\x6f\x73','\x74\x61\x6e','\x61\x73\x69\x6e','\x61\x63\x6f\x73','\x61\x74\x61\x6e','\x61\x62\x73','\x70\x6f\x77','\x6c\x6f\x67','\x65\x78\x70','\x6d\x69\x6e','\x6d\x61\x78','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x73\x75\x62\x73\x74\x72','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x73\x70\x6c\x69\x74','\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65','\x67\x65\x74\x49\x74\x65\x6d','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x4d\x65\x6e\x75','\x4d\x65\x6e\x75\x49\x74\x65\x6d','\x73\x75\x62\x4d\x65\x6e\x75','\x61\x70\x70\x65\x6e\x64','\x63\x68\x65\x63\x6b\x62\x6f\x78','\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435\x20\u043c\u0435\u043d\u044e\x20\u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\x21','\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\x20\u043c\u0435\u043d\u044e\x20\u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\x21','\x73\x65\x70\x61\x72\x61\x74\x6f\x72','\x24\x42\x61\x72','\x6d\x65\x6e\x75\x62\x61\x72','\x57\x69\x6e\x64\x6f\x77','\x67\x65\x74','\x6d\x65\x6e\x75','\x74\x65\x78\x74','\x43\x6c\x69\x70\x62\x6f\x61\x72\x64','\u0420\u0430\u0431\u043e\u0442\u0430\x20\u0441\x20\u0431\u0443\u0444\u0435\u0440\u043e\u043c\x20\u043e\u0431\u043c\u0435\u043d\u0430\x20\u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430\x21','\x63\x6c\x65\x61\x72','\x54\x72\x61\x79','\u0420\u0430\u0431\u043e\u0442\u0430\x20\u0441\x20\u0442\u0440\u0435\u0435\u043c\x20\u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430\x21','\x73\x63\x72\x69\x70\x74','\x74\x65\x78\x74\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74','\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e','\x76\x65\x72\x73\x69\x6f\x6e','\x63\x61\x6e\x76\x61\x73','\x6c\x63\x6f\x75\x6e\x74','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x20\x62\x6c\x61\x63\x6b\x3b\x20\x63\x6f\x6c\x6f\x72\x3a\x20\x72\x65\x64\x3b'];(function(a,c){var b=function(b){while(--b){a['push'](a['shift']());}};b(++c);}(_0xc6ac,0x15b));var _0xcc6a=function(a,c){a=a-0x0;var b=_0xc6ac[a];return b;};'use strict';const $JsMobileBasic={'name':_0xcc6a('0x0'),'version':_0xcc6a('0x1'),'author':_0xcc6a('0x2'),'url':_0xcc6a('0x3'),'Mobile':$Config[_0xcc6a('0x4')],'Debug':!![],'canvas':document[_0xcc6a('0x5')]('\x63'),'graphic':![]};let $NW,$Path,$Proc;if(typeof require===_0xcc6a('0x6')&&require(_0xcc6a('0x7'))){$NW=require(_0xcc6a('0x7'));}else $NW=null;debug(_0xcc6a('0x8'),_0xcc6a('0x9'));debug($JsMobileBasic[_0xcc6a('0xa')],_0xcc6a('0xb'));debug(_0xcc6a('0xc')+$JsMobileBasic['\x76\x65\x72\x73\x69\x6f\x6e'],_0xcc6a('0xb'));debug(_0xcc6a('0xd')+$JsMobileBasic[_0xcc6a('0xe')],'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x67\x72\x61\x79\x3b\x63\x6f\x6c\x6f\x72\x3a\x79\x65\x6c\x6c\x6f\x77\x3b');debug($JsMobileBasic[_0xcc6a('0xf')],_0xcc6a('0xb'));debug(_0xcc6a('0x10'),_0xcc6a('0x9'));if(typeof $Config==_0xcc6a('0x11')){console['\x65\x72\x72\x6f\x72'](_0xcc6a('0x12'));}if($Config[_0xcc6a('0x13')]==_0xcc6a('0x14')){$JsMobileBasic['\x67\x72\x61\x70\x68\x69\x63']=!![];debug(_0xcc6a('0x15'),_0xcc6a('0x16'));$JsMobileBasic[_0xcc6a('0x17')]=document['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74']('\x73\x74\x79\x6c\x65');$JsMobileBasic[_0xcc6a('0x17')][_0xcc6a('0x18')]=_0xcc6a('0x19');document['\x68\x65\x61\x64']['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64']($JsMobileBasic[_0xcc6a('0x17')]);var c=document[_0xcc6a('0x5')]('\x63');var ctx=c[_0xcc6a('0x1a')]('\x32\x64');if($Config[_0xcc6a('0x1b')][0x0]=='\x2a'&&$Config[_0xcc6a('0x1b')][0x1]=='\x2a'){debug(_0xcc6a('0x1c'),_0xcc6a('0x1d'));if(!$JsMobileBasic[_0xcc6a('0x4')]){$Config['\x63\x61\x6e\x76\x61\x73\x5f\x73\x69\x7a\x65'][0x2]?debug('\u0412\u043c\u0435\u0449\u0435\u043d\u0438\u0435\x20\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e'):debug('\u0412\u043c\u0435\u0449\u0435\u043d\u0438\u0435\x20\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e');}c[_0xcc6a('0x1e')]=window[_0xcc6a('0x1f')];c[_0xcc6a('0x20')]=window[_0xcc6a('0x21')];if($Config[_0xcc6a('0x1b')][0x2]){c[_0xcc6a('0x22')]=_0xcc6a('0x23');}}else{c[_0xcc6a('0x1e')]=$Config[_0xcc6a('0x1b')][0x1];c[_0xcc6a('0x20')]=$Config[_0xcc6a('0x1b')][0x0];}}else{debug('\u0413\u0440\u0430\u0444\u0438\u043a\u0430\x20\u043d\u0435\x20\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f\x21',_0xcc6a('0x16'));var c=window;var ctx=![];if(document[_0xcc6a('0x5')]('\x63')!=undefined)document[_0xcc6a('0x24')][_0xcc6a('0x25')](document[_0xcc6a('0x5')]('\x63'));}document[_0xcc6a('0x26')](_0xcc6a('0x27'))[0x0][_0xcc6a('0x18')]=$Config[_0xcc6a('0xa')];debug(_0xcc6a('0x28')+$Config[_0xcc6a('0xa')],_0xcc6a('0x29'));var $Player=[document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0xcc6a('0x2a'))];debug(_0xcc6a('0x2b'),_0xcc6a('0x9'));var $Mouse={'x':0x0,'y':0x0,'lcount':0x0,'rcount':0x0};var $Gel={'$Sprite':{}};var $Font={'family':'\x61\x72\x69\x61\x6c','size':'\x31\x30'};var $Element={};var $Menu={'$Bar':{}};const PI=Math['\x50\x49'];const G=9.8;const RAD2DEG=0xb4/PI;const DEG2RAD=PI/0xb4;function setColor(a){ctx[_0xcc6a('0x2c')]=a;ctx[_0xcc6a('0x2d')]=a;return!![];};function setLineWidth(a){ctx[_0xcc6a('0x2e')]=a;return!![];}function fillRect(a,b,c,d){ctx[_0xcc6a('0x2f')](a,b,c,d);return!![];}function cls(){clearRect(0x0,0x0,screenWidth(),screenHeight());document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x70')[_0xcc6a('0x18')]='';return!![];}function fillScreen(a){ctx['\x73\x61\x76\x65']();setColor(a);fillRect(0x0,0x0,screenWidth(),screenHeight());ctx[_0xcc6a('0x30')]();return!![];}function drawRect(a,b,c,d){ctx[_0xcc6a('0x31')](a,b,c,d);return!![];}function drawPlot(a,b){ctx['\x73\x61\x76\x65']();setLineWidth(0x1);drawLine(a,b,a+0x1,b+0x1);ctx[_0xcc6a('0x30')]();return!![];}function clearRect(a,b,c,d){ctx[_0xcc6a('0x32')](a,b,c,d);return!![];}function drawLine(a,b,c,d){ctx[_0xcc6a('0x33')]();ctx[_0xcc6a('0x34')](a,b);ctx[_0xcc6a('0x35')](c,d);ctx[_0xcc6a('0x36')]();return!![];}function drawCube(a,b,d,e,c){ctx[_0xcc6a('0x31')](a,b,d,e);ctx[_0xcc6a('0x31')](a+c/Math[_0xcc6a('0x37')](0x2),b+c/Math[_0xcc6a('0x37')](0x2),d,e);drawLine(a,b,a+c/Math[_0xcc6a('0x37')](0x2),b+c/Math[_0xcc6a('0x37')](0x2));drawLine(a+d,b,a+d+c/Math[_0xcc6a('0x37')](0x2),b+c/Math['\x73\x71\x72\x74'](0x2));drawLine(a,b+e,a+c/Math[_0xcc6a('0x37')](0x2),b+e+c/Math['\x73\x71\x72\x74'](0x2));drawLine(a+d,b+e,a+d+c/Math['\x73\x71\x72\x74'](0x2),b+e+c/Math['\x73\x71\x72\x74'](0x2));return!![];}function drawArc(a,b,c,_0xe213b3=0xf*Math['\x50\x49']/0x7,_0x1dc64f=0xd*Math['\x50\x49']/0x2,_0x5856af=![]){ctx['\x62\x65\x67\x69\x6e\x50\x61\x74\x68']();ctx[_0xcc6a('0x38')](a,b,c,_0xe213b3,_0x1dc64f,_0x5856af);ctx[_0xcc6a('0x36')]();return!![];}function fillArc(a,b,c,_0x2207df=0xf*Math['\x50\x49']/0x7,_0x7449c1=0xd*Math['\x50\x49']/0x2,_0xa326b2=![]){ctx[_0xcc6a('0x33')]();ctx[_0xcc6a('0x38')](a,b,c,_0x2207df,_0x7449c1,_0xa326b2);ctx[_0xcc6a('0x39')]();return!![];}function fillRect4(f,c,d,e,j,g,h,i){var b=[[f,c],[d,e],[j,g],[h,i]];ctx[_0xcc6a('0x33')]();for(var a=0x0;a<b['\x6c\x65\x6e\x67\x74\x68'];a++){if(a==0x0)ctx['\x6d\x6f\x76\x65\x54\x6f'](b[a][0x0],b[a][0x1]);else ctx[_0xcc6a('0x35')](b[a][0x0],b[a][0x1]);}ctx[_0xcc6a('0x39')]();return!![];}function drawRect4(f,c,d,e,j,g,h,i){var b=[[f,c],[d,e],[j,g],[h,i]];ctx['\x62\x65\x67\x69\x6e\x50\x61\x74\x68']();for(var a=0x0;a<b['\x6c\x65\x6e\x67\x74\x68'];a++){if(a==0x0)ctx[_0xcc6a('0x34')](b[a][0x0],b[a][0x1]);else ctx[_0xcc6a('0x35')](b[a][0x0],b[a][0x1]);}ctx[_0xcc6a('0x36')]();return!![];}function fillTriangle(c,d,e,f,g,h){var b=[[c,d],[e,f],[g,h]];ctx[_0xcc6a('0x33')]();for(var a=0x0;a<b['\x6c\x65\x6e\x67\x74\x68'];a++){if(a==0x0)ctx[_0xcc6a('0x34')](b[a][0x0],b[a][0x1]);else ctx[_0xcc6a('0x35')](b[a][0x0],b[a][0x1]);}ctx[_0xcc6a('0x39')]();return!![];}function drawTriangle(c,d,e,f,g,h){var b=[[c,d],[e,f],[g,h]];ctx['\x62\x65\x67\x69\x6e\x50\x61\x74\x68']();for(var a=0x0;a<b[_0xcc6a('0x3a')];a++){if(a==0x0)ctx[_0xcc6a('0x34')](b[a][0x0],b[a][0x1]);else ctx['\x6c\x69\x6e\x65\x54\x6f'](b[a][0x0],b[a][0x1]);}ctx['\x73\x74\x72\x6f\x6b\x65']();return!![];}function drawString(a,b,c){ctx[_0xcc6a('0x3b')](a,b,c);return!![];};function setFontSize(a){ctx['\x66\x6f\x6e\x74']=a+_0xcc6a('0x3c')+$Font[_0xcc6a('0x3d')];$Font['\x73\x69\x7a\x65']=a;return!![];}function setFont(a){ctx[_0xcc6a('0x3e')]=$Font[_0xcc6a('0x3f')]+_0xcc6a('0x3c')+a;$Font[_0xcc6a('0x3d')]=a;return!![];}function makeLinearGradient(a,b,c,d){return ctx[_0xcc6a('0x40')](a,b,c,d);}function makeRadialGradient(a,b,c,d,e,f){return ctx[_0xcc6a('0x41')](a,b,c,d,e,f);}function setGradientColor(a,b,c){a[_0xcc6a('0x42')](b,c);return!![];}function rgb(_0x3687b1=0x0,_0x47b175=0x0,_0x1a3b82=0x0){return _0xcc6a('0x43')+_0x3687b1+'\x2c'+_0x47b175+'\x2c'+_0x1a3b82+'\x29';}function rgba(_0x681e75=0x0,_0x180ab3=0x0,_0xdce772=0x0,_0x362bf6=0x0){return _0xcc6a('0x44')+_0x681e75+'\x2c'+_0x180ab3+'\x2c'+_0xdce772+'\x2c'+_0x362bf6+'\x29';}function gelLoad(b,a){$Gel[a]=new Image();$Gel[a][_0xcc6a('0x45')]=b;return!![];}function spriteGel(a,b){debug(_0xcc6a('0x46'));return![];}function drawGel(a,b,c){if($Gel[a][_0xcc6a('0x47')]==!![]){ctx['\x64\x72\x61\x77\x49\x6d\x61\x67\x65']($Gel[a],b,c,$Gel[a]['\x77'],$Gel[a]['\x68']);}else{ctx['\x64\x72\x61\x77\x49\x6d\x61\x67\x65']($Gel[a],b,c);}return!![];}function drawSprite(a,b,c){return![];}function gelSize(a,b,c){$Gel[a][_0xcc6a('0x47')]=!![];$Gel[a]['\x77']=b;$Gel[a]['\x68']=c;return!![];}function drawGelFragment(a,b,c,d,e,f,g,_0x1b1f9e=_0x68b823,_0x48eed9=_0x27b074){ctx[_0xcc6a('0x48')]($Gel[a],b,c,d,e,f,g,_0x1b1f9e,_0x48eed9);return!![];}function makeTexture(a,_0x22acfb='\x72\x65\x70\x65\x61\x74'){return ctx[_0xcc6a('0x49')]($Gel[a],_0x22acfb);}function input(a){return prompt(a);}function println(..._0x27905a){var a=document[_0xcc6a('0x5')]('\x70');a[_0xcc6a('0x22')]=_0xcc6a('0x4a');a[_0xcc6a('0x18')]+=_0x27905a+_0xcc6a('0x4b');return!![];}function playSound(b,c,_0x11459f=0x0){if($Player[_0x11459f]===undefined){var a=document[_0xcc6a('0x4c')]('\x61\x75\x64\x69\x6f');a['\x69\x64']=_0xcc6a('0x4d')+_0x11459f;document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0xcc6a('0x4e'))[_0xcc6a('0x4f')](a);$Player[_0x11459f]=document[_0xcc6a('0x5')]('\x70\x6c\x61\x79\x65\x72'+_0x11459f);}$Player[_0x11459f][_0xcc6a('0x50')]('\x73\x72\x63',b);if(!c){$Player[_0x11459f]['\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65'](_0xcc6a('0x51'),'\x30');$Player[_0x11459f][_0xcc6a('0x52')]();}else{$Player[_0x11459f][_0xcc6a('0x50')](_0xcc6a('0x51'),'\x31');$Player[_0x11459f][_0xcc6a('0x52')]();}return!![];}function pauseSound(_0x1ce9ba=0x0){if(_0x1ce9ba==-0x1){for(var a in $Player){$Player[a][_0xcc6a('0x53')]();}return!![];}if($Player[_0x1ce9ba]===undefined){debug(_0xcc6a('0x54'));return![];}$Player[_0x1ce9ba][_0xcc6a('0x53')]();return!![];};const sqrt=Math[_0xcc6a('0x37')];const random=(_0x2ad9a6,_0x2cc561)=>Math['\x66\x6c\x6f\x6f\x72'](Math[_0xcc6a('0x55')]()*_0x2cc561-_0x2ad9a6)+_0x2ad9a6;const sin=Math[_0xcc6a('0x56')];const cos=Math[_0xcc6a('0x57')];const tan=Math[_0xcc6a('0x58')];const ctg=_0x503f4b=>0x1/Math[_0xcc6a('0x58')](_0x503f4b);const asin=Math[_0xcc6a('0x59')];const acos=Math[_0xcc6a('0x5a')];const atan=Math[_0xcc6a('0x5b')];const mod=(_0x20a16b,_0x19a578)=>_0x20a16b%_0x19a578;const abs=Math[_0xcc6a('0x5c')];const pow=Math[_0xcc6a('0x5d')];const ln=Math[_0xcc6a('0x5e')];const exp=Math[_0xcc6a('0x5f')];const limit=(_0x4c5e4e,_0x49f60a,_0x4fe041)=>_0x4c5e4e<=_0x49f60a?_0x49f60a:_0x4fe041;const min=Math[_0xcc6a('0x60')];const max=Math[_0xcc6a('0x61')];const rad=_0x9c444=>{if(_0x9c444===0x5a)return PI/0x2;if(_0x9c444===0x10e)return 0x3*PI/0x2;return _0x9c444*DEG2RAD;};const deg=_0x4a9f34=>_0x4a9f34*RAD2DEG;const len=_0x2f7787=>_0x2f7787[_0xcc6a('0x3a')];const str=_0x140bdf=>_0x140bdf[_0xcc6a('0x62')]();const val=_0x5e1c69=>Number(_0x5e1c69);const int=val;const upper=_0x481d25=>_0x481d25[_0xcc6a('0x63')]();const lower=_0x41527b=>_0x41527b[_0xcc6a('0x64')]();const mid=(_0x386a74,_0x4a01fd,_0x33cd69)=>_0x386a74[_0xcc6a('0x65')](_0x4a01fd,_0x33cd69);const chr=_0x458786=>String[_0xcc6a('0x66')](_0x458786);const asc=_0x3a0d36=>_0x3a0d36['\x63\x68\x61\x72\x43\x6f\x64\x65'];const split=(_0x59060c,_0x15c8b0)=>_0x59060c[_0xcc6a('0x67')](_0x15c8b0);const replace=(_0x2d9f02,_0x144495,_0x56a3a0)=>_0x2d9f02['\x72\x65\x70\x6c\x61\x63\x65'](_0x144495,_0x56a3a0);const float=_0x43827c=>parseFloat(_0x43827c);function localSaveData(c,a){const b=typeof a=='\x6f\x62\x6a\x65\x63\x74'?toJSON(a):a;window['\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65']['\x73\x65\x74\x49\x74\x65\x6d'](c,b);return!![];}function localReadData(a){try{return parseJSON(window[_0xcc6a('0x68')][_0xcc6a('0x69')](a));}catch(b){return window['\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65'][_0xcc6a('0x69')](a);}}const parseJSON=_0x2ddfe0=>{try{return JSON['\x70\x61\x72\x73\x65'](_0x2ddfe0);}catch(a){return null;}};const toJSON=(_0x5b61df,_0x3b4ce0=null,_0x4ca4ab=0x4)=>JSON[_0xcc6a('0x6a')](_0x5b61df,'',0x4);function menuAdd(a,b,c,d,e){if($NW){if($Menu[a]==undefined){$Menu[a]=new $NW[(_0xcc6a('0x6b'))]();}switch(d){case undefined:$Menu[a]['\x61\x70\x70\x65\x6e\x64'](new $NW[(_0xcc6a('0x6c'))]({'label':b,'click':c}));break;case _0xcc6a('0x6d'):$Menu[a][_0xcc6a('0x6e')](new $NW[(_0xcc6a('0x6c'))]({'label':b,'submenu':e}));break;case _0xcc6a('0x6f'):$Menu[a][_0xcc6a('0x6e')](new $NW['\x4d\x65\x6e\x75\x49\x74\x65\x6d']({'label':b,'type':_0xcc6a('0x6f'),'click':c}));break;}return!![];}else{debug(_0xcc6a('0x70'));return![];}}function menuShow(a,b,c){if($NW){$Menu[a]['\x70\x6f\x70\x75\x70'](b,c);return!![];}else{debug(_0xcc6a('0x71'));return![];}}function menuAddSeparator(a){if($NW){if($Menu[a]==undefined){$Menu[a]=new $NW['\x4d\x65\x6e\x75']();}$Menu[a]['\x61\x70\x70\x65\x6e\x64'](new $NW[(_0xcc6a('0x6c'))]({'type':_0xcc6a('0x72')}));return!![];}else{debug(_0xcc6a('0x70'));return![];}}function menuBarAdd(a,b,c){if($NW){if($Menu['\x24\x42\x61\x72'][a]==undefined){$Menu[_0xcc6a('0x73')][a]=new $NW[(_0xcc6a('0x6b'))]({'type':_0xcc6a('0x74'),'title':b});}$Menu[_0xcc6a('0x73')][a][_0xcc6a('0x6e')](new $NW[(_0xcc6a('0x6c'))]({'label':b,'submenu':$Menu[c]}));return!![];}else{debug('\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435\x20\u043c\u0435\u043d\u044e\x20\u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\x21');return![];}}function menuBarShow(a){if($NW){$NW[_0xcc6a('0x75')][_0xcc6a('0x76')]()[_0xcc6a('0x77')]=$Menu[_0xcc6a('0x73')][a];return!![];}else{debug(_0xcc6a('0x71'));return![];}}function getClipboard(_0x4664de=_0xcc6a('0x78')){if($NW){var a=$NW[_0xcc6a('0x79')][_0xcc6a('0x76')]();return a[_0xcc6a('0x76')](_0x4664de);}else{debug(_0xcc6a('0x7a'));return![];}}function setClipboard(b,_0x3aa2fc='\x74\x65\x78\x74'){if($NW){var a=$NW[_0xcc6a('0x79')][_0xcc6a('0x76')]();a['\x73\x65\x74'](b,_0x3aa2fc);return!![];}else{debug(_0xcc6a('0x7a'));return![];}}function clearClipboard(){if($NW){var a=$NW[_0xcc6a('0x79')][_0xcc6a('0x76')]();a[_0xcc6a('0x7b')]();return!![];}else{debug(_0xcc6a('0x7a'));return![];}}function menuTrayAdd(e,c,a,d){if($NW){var b=new $NW[(_0xcc6a('0x7c'))]({'title':c,'icon':a,'alticon':a});b[_0xcc6a('0x77')]=$Menu[d];return!![];}else{debug(_0xcc6a('0x7d'));return![];}}const include=_0x1b284d=>{const _0x5abd5c=document[_0xcc6a('0x4c')](_0xcc6a('0x7e'));_0x5abd5c[_0xcc6a('0x45')]=_0x1b284d;_0x5abd5c[_0xcc6a('0x13')]=_0xcc6a('0x7f');document[_0xcc6a('0x5')]('\x6d\x6f\x64\x75\x6c\x65\x73')['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](_0x5abd5c);return!![];};function getModuleName(a){return a['\x6e\x61\x6d\x65'];}function getModuleAuthor(a){return a[_0xcc6a('0xe')];}function getModuleDescription(a){return a[_0xcc6a('0x80')];}function getModuleUrl(a){return a[_0xcc6a('0xf')];}function getModuleVersion(a){return a[_0xcc6a('0x81')];}function screenWidth(){if($JsMobileBasic[_0xcc6a('0x14')]){return $JsMobileBasic[_0xcc6a('0x82')][_0xcc6a('0x20')];}else{return window[_0xcc6a('0x21')];}}function screenHeight(){if($JsMobileBasic['\x67\x72\x61\x70\x68\x69\x63']){return $JsMobileBasic[_0xcc6a('0x82')][_0xcc6a('0x1e')];}else{return window[_0xcc6a('0x1f')];}}function getMouseX(){return $Mouse['\x78'];}function getMouseY(){return $Mouse['\x79'];}function getLeftClicksCount(){return $Mouse[_0xcc6a('0x83')];}function getRightClicksCount(){return $Mouse['\x72\x63\x6f\x75\x6e\x74'];}function log(a){console['\x6c\x6f\x67'](a);return!![];}function debug(a,_0x2b25d7=_0xcc6a('0x84')){if($Config[_0xcc6a('0x85')]){if(!$JsMobileBasic[_0xcc6a('0x4')]){console[_0xcc6a('0x5e')](_0xcc6a('0x86')+a,_0x2b25d7);return!![];}else{alert(_0x2b25d7);return!![];}}else{return![];}}function exit(){window['\x63\x6c\x6f\x73\x65']();return!![];}function fullScreen(b){if($NW){if(b){var a=$NW[_0xcc6a('0x75')][_0xcc6a('0x76')]();a[_0xcc6a('0x87')]();}else{var a=$NW['\x57\x69\x6e\x64\x6f\x77'][_0xcc6a('0x76')]();a[_0xcc6a('0x88')]();}}else{debug('\u0420\u0430\u0431\u043e\u0442\u0430\x20\u0441\x20\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u043c\u0438\x20\u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430\x21');return![];}}function addElement(a,b){$Element[a]=document[_0xcc6a('0x4c')](b);document[_0xcc6a('0x5')](_0xcc6a('0x89'))[_0xcc6a('0x4f')](a);return $Element[a];}function _eventListeners(){window['\x6f\x6e\x43\x6c\x69\x63\x6b']=window[_0xcc6a('0x8a')]=window['\x6f\x6e\x4d\x6f\x75\x73\x65\x4d\x6f\x76\x65']=window[_0xcc6a('0x8b')]=window[_0xcc6a('0x8c')]=window[_0xcc6a('0x8d')]=window[_0xcc6a('0x8e')]=window[_0xcc6a('0x8f')]=window[_0xcc6a('0x90')]=()=>{};c[_0xcc6a('0x91')](_0xcc6a('0x92'),function(a){$Mouse['\x78']=a[_0xcc6a('0x93')];$Mouse['\x79']=a[_0xcc6a('0x94')];onMouseMove(a[_0xcc6a('0x93')],a['\x6f\x66\x66\x73\x65\x74\x59'],a);},![]);c[_0xcc6a('0x91')](_0xcc6a('0x95'),function(a){$Mouse[_0xcc6a('0x83')]++;onClick(a[_0xcc6a('0x93')],a[_0xcc6a('0x94')],a);},![]);c[_0xcc6a('0x91')]('\x6d\x6f\x75\x73\x65\x64\x6f\x77\x6e',function(a){onMouseDown(a[_0xcc6a('0x93')],a[_0xcc6a('0x94')],a);},![]);c[_0xcc6a('0x91')](_0xcc6a('0x96'),function(a){onMouseUp(a[_0xcc6a('0x93')],a[_0xcc6a('0x94')],a);},![]);c['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72']('\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75',function(a){$Mouse['\x72\x63\x6f\x75\x6e\x74']++;onRightClick(a[_0xcc6a('0x93')],a[_0xcc6a('0x94')],a);},![]);window[_0xcc6a('0x91')](_0xcc6a('0x97'),function(a){onKeyPress(a[_0xcc6a('0x98')],a);},![]);window[_0xcc6a('0x91')]('\x6b\x65\x79\x64\x6f\x77\x6e',function(a){onKeyDown(a['\x6b\x65\x79\x43\x6f\x64\x65'],a);},![]);window['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72'](_0xcc6a('0x99'),function(a){onKeyUp(a[_0xcc6a('0x98')],a);},![]);}c[_0xcc6a('0x9a')]=()=>![];debug('\x2f\x2f\x20\x3d\x3d\x3d\x3d\x3d\x3d\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f\x20\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430\x3d\x3d\x3d\x3d\x3d\x3d\x2f\x2f','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x62\x6c\x61\x63\x6b\x3b\x63\x6f\x6c\x6f\x72\x3a\x20\x23\x30\x30\x66\x66\x30\x30\x3b');onload=function(){_eventListeners();if(typeof Main===_0xcc6a('0x6'))Main();else throw new Error('\u0412\x20\u0444\u0430\u0439\u043b\u0435\x20\x41\x75\x74\x6f\x72\x75\x6e\x2e\x62\x61\x73\x20\u0434\u043e\u043b\u0436\u0435\u043d\x20\u0431\u044b\u0442\u044c\x20\u0445\u0443\u043a\x20\x4d\x61\x69\x6e\x28\x29\x21');if(typeof Loop===_0xcc6a('0x6')){if(!window[_0xcc6a('0x9b')]){window[_0xcc6a('0x9b')]=window[_0xcc6a('0x9c')]||window[_0xcc6a('0x9d')]||window[_0xcc6a('0x9e')]||window['\x6f\x52\x65\x71\x75\x65\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x46\x72\x61\x6d\x65']||function(a){return window[_0xcc6a('0x9f')](a,0x3e8/0x3c);};}function a(){window[_0xcc6a('0x9b')](a);Loop();}a();}};debug('\x2f\x2f\x20\x3d\x3d\x3d\x3d\x3d\x3d\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\x20\u043c\u043e\u0434\u0443\u043b\u0435\u0439\x2f\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\x3d\x3d\x3d\x3d\x3d\x3d\x2f\x2f',_0xcc6a('0x9'));
