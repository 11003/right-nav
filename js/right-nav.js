(function($) {
    // 获取H标签
    $("#article-content").children().each(function(index, element) {
        var tagName = $(this).get(0).tagName;
        if (tagName.substr(0, 1).toUpperCase() == "H") {
            var substrTagName = tagName.substr(1, 1);
            var dis = HContentPaddingLeft(substrTagName);
            var tagContent = $(this).text(); //获取内容
            if (tagContent != '') {
                var navId = "nav-" + tagName + "-" + index.toString();
                $(this).attr("id", navId); //为当前h标签设置id
                $(".right-nav").append("<li class='item "+ navId +"'><a style='padding-left: " + dis + "px' href='#" + navId + "'>" + tagContent + "</a></li>").show(); //在目标DIV中添加内容
            }
        }
    });

    // 滚动
    var header_wrap = $("#header").outerHeight() + 50;//头部的距离
    var rightNav = $("#right-nav-box");
    $(window).on('scroll',function() {
        var cur_pos = $(this).scrollTop();
        $(":header").each(function() {
            var top = $(this).offset().top - header_wrap,
            bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                rightNav.find('li').removeClass('active');
                rightNav.find('a[href="#' + $(this).attr('id') + '"]').parent("li").addClass('active');
            }
        });
    });
    // 添加active
    $(".right-nav li [href!='#']").click(function() {
        var var_href = $(this).attr("href");
        $('.active').removeClass('active');
        $(this).parent('li').addClass('active');
    });
    // 设置padding
    function HContentPaddingLeft(tagName) {
        switch (tagName) {
        case "2":
            tagName = "40"
            break;
        case "3":
            tagName = "65"
            break;
        case "4":
            tagName = "75"
            break;
        case "5":
            tagName = "88"
            break;
        case "6":
            tagName = "95"
            break;
        case "7":
            tagName = "100"
            break;
        default:
            tagName = "20"
        }
        return tagName;
    }
})(jQuery);
