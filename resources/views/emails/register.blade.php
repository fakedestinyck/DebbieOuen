<!DOCTYPE html>
<html>
<head>

    <title>Push Email</title>
    <link rel="shortcut icon" href="favicon.ico">

    <style type="text/css">
        table[name="blk_permission"], table[name="blk_footer"] {
            display: none;
        }
    </style>

    <meta name="googlebot" content="noindex"/>
    <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW"/>
    <link rel="stylesheet" href="/style/dhtmlwindow.css" type="text/css"/>
    <script type="text/javascript" src="/script/dhtmlwindow.js">
        /***********************************************
         * DHTML Window Widget- © Dynamic Drive (www.dynamicdrive.com)
         * This notice must stay intact for legal use.
         * Visit www.dynamicdrive.com for full source code
         ***********************************************/
    </script>
    <link rel="stylesheet" href="/style/modal.css" type="text/css"/>
    <script type="text/javascript" src="/script/modal.js"></script>
    <script type="text/javascript">
        function show_popup(popup_name, popup_url, popup_title, width, height) {
            var widthpx = width + "px";
            var heightpx = height + "px";
            emailwindow = dhtmlmodal.open(popup_name, 'iframe', popup_url, popup_title, 'width=' + widthpx + ',height=' + heightpx + ',center=1,resize=0,scrolling=1');
        }

        function show_modal(popup_name, popup_url, popup_title, width, height) {
            var widthpx = width + "px";
            var heightpx = height + "px";
            emailwindow = dhtmlmodal.open(popup_name, 'iframe', popup_url, popup_title, 'width=' + widthpx + ',height=' + heightpx + ',modal=1,center=1,resize=0,scrolling=1');
        }

        var popUpWin = 0;

        function popUpWindow(URLStr, PopUpName, width, height) {
            if (popUpWin) {
                if (!popUpWin.closed) popUpWin.close();
            }
            var left = (screen.width - width) / 2;
            var top = (screen.height - height) / 2;
            popUpWin = open(URLStr, PopUpName, 'toolbar=0,location=0,directories=0,status=0,menub	ar=0,scrollbar=0,resizable=0,copyhistory=yes,width=' + width + ',height=' + height + ',left=' + left + ', 	top=' + top + ',screenX=' + left + ',screenY=' + top + '');
        }
    </script>

    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <style type="text/css">
        /*** BMEMBF Start ***/
        [name=bmeMainBody] {
            min-height: 1000px;
        }

        @media only screen and (max-width: 480px) {
            table.blk, table.tblText, .bmeHolder, .bmeHolder1, table.bmeMainColumn {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable td.tblCell {
                padding: 0px 20px 20px 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td.tblCell {
                padding: 20px 20px 0 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeCaptionTable td.tblCell {
                padding: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.tblGtr {
                padding-bottom: 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.blk_container, .blk_parent, .bmeLeftColumn, .bmeRightColumn, .bmeColumn1, .bmeColumn2, .bmeColumn3, .bmeBody {
                display: table !important;
                max-width: 600px !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.container-table, .bmeheadertext, .container-table {
                width: 95% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .mobile-footer, .mobile-footer a {
                font-size: 13px !important;
                line-height: 18px !important;
            }

            .mobile-footer {
                text-align: center !important;
            }

            table.share-tbl {
                padding-bottom: 15px;
                width: 100% !important;
            }

            table.share-tbl td {
                display: block !important;
                text-align: center !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.bmeShareTD, td.bmeSocialTD {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.tdBoxedTextBorder {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.blk, table[name=tblText], .bmeHolder, .bmeHolder1, table[name=bmeMainColumn] {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable td[name=tblCell] {
                padding: 0px 20px 20px 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td[name=tblCell] {
                padding: 20px 20px 0 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeCaptionTable td[name=tblCell] {
                padding: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table[name=tblGtr] {
                padding-bottom: 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.blk_container, .blk_parent, [name=bmeLeftColumn], [name=bmeRightColumn], [name=bmeColumn1], [name=bmeColumn2], [name=bmeColumn3], [name=bmeBody] {
                display: table !important;
                max-width: 600px !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table[class=container-table], .bmeheadertext, .container-table {
                width: 95% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .mobile-footer, .mobile-footer a {
                font-size: 13px !important;
                line-height: 18px !important;
            }

            .mobile-footer {
                text-align: center !important;
            }

            table[class="share-tbl"] {
                padding-bottom: 15px;
                width: 100% !important;
            }

            table[class="share-tbl"] td {
                display: block !important;
                text-align: center !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td[name=bmeShareTD], td[name=bmeSocialTD] {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td[name=tdBoxedTextBorder] {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeImageTable {
                height: auto !important;
                width: 100% !important;
                padding: 20px !important;
                clear: both;
                float: left !important;
                border-collapse: separate;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInline table.bmeImageTable {
                height: auto !important;
                width: 100% !important;
                padding: 10px !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInline table.bmeCaptionTable {
                width: 100% !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeImageTable {
                height: auto !important;
                width: 100% !important;
                padding: 10px !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeCaptionTable {
                width: 100% !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeImageContainer {
                width: 100% !important;
                clear: both;
                float: left !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeImageTable td {
                padding: 0px !important;
                height: auto;
            }
        }

        @media only screen and (max-width: 480px) {
            td.bmeImageContainerRow {
                padding: 0px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            img.mobile-img-large {
                width: 100% !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            img.bmeRSSImage {
                max-width: 320px;
                height: auto !important;
            }
        }

        @media only screen and (min-width: 640px) {
            img.bmeRSSImage {
                max-width: 600px !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .trMargin img {
                height: 10px;
            }
        }

        @media only screen and (max-width: 480px) {
            div.bmefooter, div.bmeheader {
                display: block !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart {
                width: 100% !important;
                clear: both;
                float: left !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.blk_parent1, table.tblPart {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tblLine {
                min-width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblCenter img {
                margin: 0 auto;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblCenter, .bmeMblCenter div, .bmeMblCenter span {
                text-align: center !important;
                text-align: -webkit-center !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeNoBr br, .bmeImageGutterRow, .bmeMblStackCenter .bmeShareItem .tdMblHide {
                display: none !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInline table.bmeImageTable, .bmeMblInline table.bmeCaptionTable, td.bmeMblInline {
                clear: none !important;
                width: 50% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInlineHide, .bmeShareItem .trMargin {
                display: none !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInline table.bmeImageTable img, .bmeMblShareCenter.tblContainer.mblSocialContain, .bmeMblFollowCenter.tblContainer.mblSocialContain {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStack > .bmeShareItem {
                width: 100% !important;
                clear: both !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeShareItem {
                padding-top: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart.bmeMblStackCenter, .bmeMblStackCenter .bmeFollowItemIcon {
                padding: 0px !important;
                text-align: center !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStackCenter > .bmeShareItem {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.bmeMblCenter {
                border: 0 none transparent !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeLinkTable.tdPart td {
                padding-left: 0px !important;
                padding-right: 0px !important;
                border: 0px none transparent !important;
                padding-bottom: 15px !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdMblHide {
                width: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeShareItemBtn {
                display: table !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStack td {
                text-align: left !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStack .bmeFollowItem {
                clear: both !important;
                padding-top: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStackCenter .bmeFollowItemText {
                padding-left: 5px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStackCenter .bmeFollowItem {
                clear: both !important;
                align-self: center;
                float: none !important;
                padding-top: 10px;
                margin: 0 auto;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart > table {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart > table.bmeLinkContainer {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart.mblStackCenter > table.bmeLinkContainer {
                width: 100% !important;
            }
        }

        .blk_parent:first-child, .blk_parent {
            float: left;
        }

        .blk_parent:last-child {
            float: right;
        }

        /*** BMEMBF END ***/

        table[name="bmeMainBody"], body {
            background-color: #ffffff;
        }

        td[name="bmePreHeader"] {
            background-color: #ffffff;
        }

        td[name="bmeHeader"] {
            background: #ffffff;
            background-color: #f5f2d0;
        }

        td[name="bmeBody"], table[name="bmeBody"] {
            background-color: #ffffff;
        }

        td[name="bmePreFooter"] {
            background-color: #ffffff;
        }

        td[name="bmeFooter"] {
            background-color: #ffffff;
        }

        td[name="tblCell"], .blk {
            font-family: initial;
            font-weight: normal;
            font-size: initial;
        }

        table[name="blk_blank"] td[name="tblCell"] {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
        }

        [name=bmeMainColumnParent] {
            border-color: transparent;
            border-width: 0px;
            border-style: none;
            border-radius: 0px;
            border-collapse: separate;
            border-spacing: 0px;
            overflow: visible;
        }

        [name=bmeMainContentParent] {
            border-color: transparent;
            border-width: 0px;
            border-style: none;
            border-radius: 0px;
            overflow: hidden;
        }

        [name=bmeMainContent] {
            border-color: transparent;
            border-width: 0px;
            border-style: none;
            border-radius: 0px;
            border-collapse: separate;
            border-spacing: 0px;
            overflow: visible;
        }

    </style>
</head>
<body marginheight=0 marginwidth=0 topmargin=0 leftmargin=0
      style="height: 100% !important; margin: 0; padding: 0; width: 100% !important;min-width: 100%;">

<table width="100%" cellspacing="0" cellpadding="0" border="0" name="bmeMainBody"
       style="background-color: rgb(255, 255, 255);" bgcolor="#ffffff">
    <tbody>
    <tr>
        <td width="100%" valign="top" align="center">
            <table cellspacing="0" cellpadding="0" border="0" name="bmeMainColumnParentTable" width="100%">
                <tbody>
                <tr>
                    <td name="bmeMainColumnParent"
                        style="border: 0px none transparent; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible;">
                        <table name="bmeMainColumn" class="bmeMainColumn" style="max-width: 100%; overflow: visible;"
                               cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tbody>
                            <tr>
                                <td width="100%" class="blk_container bmeHolder" name="bmePreHeader" valign="top"
                                    align="center"
                                    style="color: rgb(102, 102, 102); border: 0px none transparent; background-color: rgb(255, 255, 255);"
                                    bgcolor="#ffffff"></td>
                            </tr>
                            <tr>
                                <td width="100%" class="bmeHolder" valign="top" align="center"
                                    name="bmeMainContentParent"
                                    style="border: 0px none transparent; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: hidden;">
                                    <table name="bmeMainContent"
                                           style="border-radius: 0px; border-collapse: separate; border-spacing: 0px; border: 0px none transparent; overflow: visible;"
                                           width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                        <tbody>

                                        <tr>
                                            <td width="100%" class="blk_container bmeHolder bmeBody" name="bmeBody"
                                                valign="top" align="center"
                                                style="color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(255, 255, 255);"
                                                bgcolor="#ffffff">
                                                <div id="dv_13" class="blk_wrapper">
                                                    <table width="600" cellspacing="0" cellpadding="0" border="0"
                                                           class="blk" name="blk_divider" style="">
                                                        <tbody>
                                                        <tr>
                                                            <td class="tblCellMain" style="padding: 15px 20px;">
                                                                <table class="tblLine" cellspacing="0" cellpadding="0"
                                                                       border="0" width="100%"
                                                                       style="border-top-width: 0px; border-top-style: none; min-width: 1px;">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td><span></span></td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div id="dv_12" class="blk_wrapper">
                                                    <table width="600" cellspacing="0" cellpadding="0" border="0"
                                                           class="blk" name="blk_button" style="">
                                                        <tbody>
                                                        <tr>
                                                            <td width="20"></td>
                                                            <td align="center">
                                                                <table class="tblContainer" cellspacing="0"
                                                                       cellpadding="0" border="0" width="100%">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td height="20"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center">
                                                                            <table cellspacing="0" cellpadding="0"
                                                                                   border="0" class="bmeButton"
                                                                                   align="center"
                                                                                   style="border-collapse: separate;">
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td style="border-radius: 0px; border: 2px solid #60dcff; text-align: center; font-family: Arial, Helvetica, sans-serif; font-size: 14px; padding: 15px 40px; font-weight: normal; border-collapse: separate;"
                                                                                        class="bmeButtonText"><span
                                                                                                style="font-family: 'Arial Narrow', 'Arial MT Condensed Light', sans-serif; font-size: 24px; color: rgb(236, 127, 232);">
                                                                                            <p style="color: #60dcff;text-decoration: none;white-space: pre-wrap;word-break: break-all;line-height: 0.8em;">蒋申粉丝俱乐部
                                                                                                铭牌激活通知</p></span></td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="20"></td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td width="20"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div id="dv_14" class="blk_wrapper">
                                                    <table width="600" cellspacing="0" cellpadding="0" border="0"
                                                           class="blk" name="blk_text">
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <table cellpadding="0" cellspacing="0" border="0"
                                                                       width="100%" class="bmeContainerRow">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td class="tdPart" valign="top" align="center">
                                                                            <table cellspacing="0" cellpadding="0"
                                                                                   border="0" width="600" name="tblText"
                                                                                   style="float:left; background-color:transparent;"
                                                                                   align="left" class="tblText">
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td valign="top" align="left"
                                                                                        name="tblCell"
                                                                                        style="padding: 10px 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; color: rgb(56, 56, 56); text-align: left;"
                                                                                        class="tblCell">
                                                                                        <div style="line-height: 200%; text-align: center;">
                                                                                            <p style="font-size: 14px;font-family: Arial, Helvetica, sans-serif;color: #000000;line-height: 1.5em;white-space: pre-wrap;">亲爱的护申符，感谢你在这次生日应援活动中的支持。现在开始发放蒋申粉丝俱乐部(FanClub)的粉丝铭牌，具体领取方式如下：
浏览器打开 https://debbie.jiangshen.club/fc/register
使用用户名：<span style="font-weight: bolder;font-style: italic;">{{ $args['qqid'] }}@qq.com</span>
和密码： <span style="font-weight: bolder;font-style: italic;">{{ $args['pwd'] }}</span>
登陆
填写你铭牌上想要显示的id(昵称)和希望的粉丝编号 （注意id和编号独一无二，且目前填写后均无法更改，请慎重填写）
接着就可以看到你的专属粉丝铭牌啦~
北京时间12:00准时开始抢注哦~
再次感谢您对蒋申和蒋申后援会的支持！</p>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div id="dv_6" class="blk_wrapper">
                                                    <table class="blk" name="blk_button" width="600" border="0"
                                                           cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                        <tr>
                                                            <td width="20"></td>
                                                            <td align="center">
                                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                                       border="0" class="tblContainer">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td height="20"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center">
                                                                            <table cellspacing="0" cellpadding="0"
                                                                                   border="0" align="center"
                                                                                   class="bmeButton"
                                                                                   style="border-collapse: separate;">
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td class="bmeButtonText"
                                                                                        style="border-radius: 0px; border: 0px none transparent; text-align: center; padding: 20px 40px; font-weight: normal; font-family: Arial, Helvetica, sans-serif; font-size: 14px; background-color: #60dcff;"><span
                                                                                                style="font-family: 'Arial Narrow', 'Arial MT Condensed Light', sans-serif; font-size: 20px; color: #60dcff;">
                                                                                            <a href="https://debbie.jiangshen.club/fc/register" target="_blank" style="color:#FFFFFF;text-decoration:none;">前往激活</a></span></td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="20"></td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td width="20"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td width="100%" class="blk_container bmeHolder" name="bmeFooter" valign="top"
                                    align="center"
                                    style="color: rgb(102, 102, 102); border: 0px none transparent; background-color: rgb(255, 255, 255);"
                                    bgcolor="#ffffff">
                                    <div id="dv_5" class="blk_wrapper">
                                        <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk"
                                               name="blk_permission" style="">
                                            <tbody>
                                            <tr>
                                                <td name="tblCell" class="tblCell" style="padding:20px;" valign="top"
                                                    align="left">
                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td name="bmePermissionText" style="text-align:left;"
                                                                align="left"><span
                                                                        style="font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px;line-height: 140%;">
                                                                    <a style="color: #16a7e0;" target="_new"
                                                                       href="http://benchmarkemail.benchurl.com/c/v?e=8E4B52&c=91CEA&t=1&l=7889F345&email=hL2iimIGZvj2QooSzVze1t7P%2FZjRPRKrj2c0%2B7DqUhU%3D">View this email in your browser</a>
                                                                </span></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="dv_7" class="blk_wrapper">
                                        <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk"
                                               name="blk_footer" style="">
                                            <tbody>
                                            <tr>
                                                <td name="tblCell" class="tblCell" style="padding:20px;" valign="top"
                                                    align="left">
                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td name="bmeBadgeText"
                                                                style="text-align:left; word-break: break-word;"
                                                                align="left"><span id="spnFooterText"
                                                                                   style="font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px; line-height: 140%;">This message was sent to amilcar.cruz@benchmarkemail.com by benchmarkdesignsystem.gmail.com@email.benchmarkapps.com
                                                                    <br>10621 Calle Lee, Building 141, Los Alamitos, CA, 90720</span>
                                                                <br>
                                                                <br><span
                                                                        style="font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px; line-height: 140%;"><span
                                                                            href=http://benchmarkemail.benchurl.com/c/su?e=8E4B52&c=91CEA&t=1&l=7889F345&email=hL2iimIGZvj2QooSzVze1t7P%2FZjRPRKrj2c0%2B7DqUhU%3D&relid=><img
                                                                                src="https://www.benchmarkemail.com/images/verified.png"
                                                                                alt="Unsubscribe from all mailings"
                                                                                title="Unsubscribe from all mailings"
                                                                                border="0"></span>
                                                                    <a class=bmefootertext target=_new
                                                                       href="http://benchmarkemail.benchurl.com/c/su?e=8E4B52&c=91CEA&t=1&l=7889F345&email=hL2iimIGZvj2QooSzVze1t7P%2FZjRPRKrj2c0%2B7DqUhU%3D&relid="
                                                                       style="color:inherit;text-decoration:underline;">Unsubscribe</a>   |
                                                                    <a class=bmefootertext target=_new
                                                                       href="http://benchmarkemail.benchurl.com/c/s?e=8E4B52&c=91CEA&t=1&l=7889F345&email=hL2iimIGZvj2QooSzVze1t7P%2FZjRPRKrj2c0%2B7DqUhU%3D&relid="
                                                                       style="color:inherit;text-decoration:underline;">Manage Subscription</a>   |
                                                                    <a class=bmefootertext target=_new
                                                                       href="http://benchmarkemail.benchurl.com/c/f?e=8E4B52&c=91CEA&t=1&l=7889F345&email=hL2iimIGZvj2QooSzVze1t7P%2FZjRPRKrj2c0%2B7DqUhU%3D&relid="
                                                                       style="color:inherit;text-decoration:underline;">Forward Email</a>  |
                                                                    <a class=bmefootertext target=_new
                                                                       href="http://benchmarkemail.benchurl.com/Abuse?e=8E4B52&c=91CEA&t=1&l=7889F345&email=hL2iimIGZvj2QooSzVze1t7P%2FZjRPRKrj2c0%2B7DqUhU%3D&relid="
                                                                       style="color:inherit;text-decoration:underline;">Report Abuse</a>
                                                                    <br></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td name="bmeBadgeImage"
                                                                style="text-align: left; padding-top: 20px; word-break: break-word;"
                                                                align="left">
                                                                <a href="http://www.benchmarkemail.com?p=500289"
                                                                   target="_new"><img
                                                                            src="https://www.benchmarkemail.com/images/web4/misc/emailfooter/opt12.png"
                                                                            style="max-width:144px;" border=0/></a></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
</body>
</html>

