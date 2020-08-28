$(document).ready(function () {
    /* Gnb UI*/
    $('.menu>li').on({ // 마우스 오버시 gnb ui
        "mouseenter": function () {
            $(this).addClass("active").siblings().removeClass('active');
            $(this).find(".dep2").show();
            $(this).siblings().find(".dep2").hide();
            $("#header").addClass("active");
        }
    });

    $('.menu>li>a').on({ // 키보드 포커스시 gnb ui
        "focus": function () {
            $(this).parent().addClass("active").siblings().removeClass('active');
            $(this).next(".dep2").show();
            $(this).parent().siblings().find(".dep2").hide();
            $("#header").addClass("active");
        }
    });

    $("#header").on({ // gnb 마우스 포인터 빠졌을때 ui
        "mouseleave": function () {
            $('.menu>li').removeClass("active");
            $(this).find(".dep2").hide();
            $("#header").removeClass("active");
        }
    });

    /* 브레드크럼브 토글*/
    $(".breadcrumb .menuName span").on({
        "click": function () {
            $(this).next('ul').toggle();
        }
    });

    /* lnb 토글 */
    $(".lnbMenu>li.innerMenu").on({ //메뉴 클릭시 하위메뉴 노출
        "click": function (e) {
            $(this).toggleClass("active");
            if ($(this).hasClass("innerMenu")) {
                $(this).find("div").toggle();
            }
        }
    });
    $(".lnbMenu>li.innerMenu>a").on({ // 하위메뉴 있는 메뉴 클릭시 a 이벤트전파 차단
        "click": function (e) {
            e.preventDefault();
        }
    });

    /* .tab 탭 콘텐츠 전환 */
    $(".tab li").on({
        "click":function(){
            var idx = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(this).closest(".tabContWarp").find(">.tabContArea").eq(idx).show().siblings(".tabContArea").hide();
        }
    });

    /* 도움말 툴팁 */
    $(".icoQ").on({
        "mouseenter":function(){
            $(this).find(".desc").show();
        }
    });
    $(".icoQ .desc").on({
        "mouseleave":function(){
            $(this).hide();
        }
    });

    /* 오른쪽 사이드 유저클릭시 정보 */
    $(".userInfo").on({
        "click":function(){
            $(this).find(".userTooltip").toggle();
        }
    });
    $("#container").on({
        "click":function(){
            $(".userTooltip").hide();
        }
    });

    /* datePicker */
    $( ".cal" ).datepicker();

    /* 팝업 */
    $('.btnClose, .overlay').on({
        "click":function() {
            $('.popup').hide();
        }
    });
    $('.popup.layerPopup > .popupBox').draggable();

    //$("#lnb").height($("#content").height())

    /* 스크롤 */
    $(".mScroll").mCustomScrollbar();
    $(".mScrollxy").mCustomScrollbar({
        axis:"yx"
    });



});
