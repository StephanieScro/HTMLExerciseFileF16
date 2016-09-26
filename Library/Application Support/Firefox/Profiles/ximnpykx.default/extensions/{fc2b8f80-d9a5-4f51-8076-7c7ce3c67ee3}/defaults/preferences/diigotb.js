
pref("extensions.diigotb.server", 'www');
// 2008-8-21 this isn't used. use version to check new intall/update
// pref("extensions.diigotb.firstRun", true); 
//2008-6-25 15:47:21 UTC
//deprecated. a user's setting will be overwritten each time we change the default value (e.g. when adding a button hidden by default)
//this default value will be kept unchanged forever in order not overwrite user's setting
pref("extensions.diigotb.toolbar.hiddenButtons","diigotb-tb-comment,diigotb-tb-message");
pref("extensions.diigotb.toolbar.showItems.diigotb-tb-highlight",true);
pref("extensions.diigotb.toolbar.showItems.diigotb-tb-comment",false);
pref("extensions.diigotb.toolbar.showItems.diigotb-tb-message",false);
pref("extensions.diigotb.toolbar.showItems.diigotb-tb-share",true);
pref("extensions.diigotb.toolbar.showItems.diigotb-tb-options",true);
pref("extensions.diigotb.toolbar.showItems.diigotb-tb-search",true);
pref("extensions.diigotb.toolbar.showItems.diigotb-tb-quickAccessFilter-item",true);
pref("extensions.diigotb.toolbar.showItems.diigotb-tb-options",true);
pref("extensions.diigotb.showToolbar",true);
//2008-7-11 4:16:28 UTC obsolete
pref("extensions.diigotb.toolbar.showItems.diigotb-tb-readitLater", true); 
pref("extensions.diigotb.curSearchEngine", 0);
pref("extensions.diigotb.insertSEs", true);
pref("extensions.diigotb.opensearchintab", false);
pref("extensions.diigotb.showimagepanel", true);
pref("extensions.diigotb.csm.enabled", false);
pref("extensions.diigotb.cm.insertAtTop", true);
pref("extensions.diigotb.hl.showNumbering", false);
pref("extensions.diigotb.hl.style", 'a_style');
pref("extensions.diigotb.hl.dontPaint", false); /*whether not to paint highlights on page*/
pref("extensions.diigotb.bookmark.privateByDefault", false);
//pref("extensions.diigotb.bookmark.otherServices", ''); /*1,2,3,4*/ //moved to server side
pref("extensions.diigotb.bookmark.bookmarkElsewhere", false);
pref("extensions.diigotb.bookmark.addToLocal", false);
pref("extensions.diigotb.bookmark.quickSaveTag", '');
pref("extensions.diigotb.bookmark.quickSaveUnread", true);
pref("extensions.diigotb.keys.sidebar.enabled", false); //toggle open sidebar
pref("extensions.diigotb.keys.sidebar.keys", 'control+alt+s');
pref("extensions.diigotb.keys.quickBookmark.enabled", false);
pref("extensions.diigotb.keys.quickBookmark.keys", 'control+q');
pref("extensions.diigotb.keys.bookmark.enabled", false);
pref("extensions.diigotb.keys.bookmark.keys", 'control+alt+d');
pref("extensions.diigotb.keys.floatNote.enabled", false);
pref("extensions.diigotb.keys.floatNote.keys", 'control+alt+f');
pref("extensions.diigotb.keys.capture.enabled", false);
pref("extensions.diigotb.keys.capture.keys", 'control+alt+p');
// 2007-12-02 06:07:01 UTC removed
pref("extensions.diigotb.share.includeAnnotations", true);
//2008-7-11 4:4:23 UTC obsolete whether to show the read later notice
//pref("extensions.diigotb.dontShowReadLaterNotice", false);
pref("extensions.diigotb.dontShowMarkAsReadNotice", false);
//send to window
pref("extensions.diigotb.send.private", true);
pref("extensions.diigotb.silentMode", false);
pref("extensions.diigotb.dontShowSilentMode", false);
pref("extensions.diigotb.filter", '_all');
pref("extensions.diigotb.penColor", 'yellow');
/*
pref("extensions.diigotb.version", 'fullVersion');
pref("extensions.diigotb.sidebar.selectedTab", 'tabName');
pref("extensions.diigotb.sidebar.selectedList", 'listId');
pref("extensions.diigotb.sidebar.searchTerm", 'searchTerm');
pref("extensions.diigotb.sidebar.searchTag", 'searchTag');
pref("extensions.diigotb.bookmark.selectedList", 'listId');
pref("extensions.diigotb.bookmark.selectedGroup", 'groupName');
//when did we last check for new messages
pref("extensions.diigotb.messageAlert.lastAlertTime", Date.now().toString()); 
pref("extensions.diigotb.bookmark.fanfou", false);
pref("extensions.diigotb.bmfilters", ''); //Quick Access Filters
*/
