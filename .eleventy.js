const { DateTime } = require("luxon");

module.exports = (function(eleventyConfig) {
    //ページ内の日付フィルター
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj).setLocale('ja').toFormat("yyyy'年'MM'月'dd'日'HH'時'mm'分'ss'秒'");
    });
    //サイトマップの日付フィルター
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj).setLocale('ja').toFormat("yyyy-LL-dd'T'HH:mm:ss'+09:00'");
    });
    //_src/cssにファイルが更新されたら、_site/cssにコピーします
    eleventyConfig.addPassthroughCopy({"_src/css": "css"});
    //_src/imgにファイルが更新されたら、_site/imgにコピーします
    eleventyConfig.addPassthroughCopy({"_src/img": "img"});
    return {
        dir: {
            input: "_src",
            output: "_site",
            data: "_data",
            includes: "_includes"
        }
    };
});
