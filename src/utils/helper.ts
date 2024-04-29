export const Helper = {
  removeAscent(str: string) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    return str;
  },

  slugUrl(title: string) {
    return Helper.removeAscent(title).replace(/\s/gi, '-');
  }

  // stripTags(html, max = 80) {
  //   if (!html) {
  //     return html;
  //   }
  //   html = html.replace(/<[^>]*>?/gm, "");
  //   return html.slice(0, max) + `...`;
  // },

  // getUrlQueryString(url) {
  //   if (!url) url = window.location.href;
  //   if (url.indexOf("?") < 0) {
  //     return "";
  //   }
  //   return url.substr(url.indexOf("?") + 1);
  // },

  // getUrlParameterByName(name, url) {
  //   if (!url) url = window.location.href;
  //   name = name.replace(/[[\]]/g, "\\$&");
  //   let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  //     results = regex.exec(url);
  //   if (!results) return null;
  //   if (!results[2]) return "";
  //   return decodeURIComponent(results[2].replace(/\+/g, " "));
  // },

  // parseQueryStringToObject(queryString) {
  //   if (queryString && queryString.indexOf("?") > -1) {
  //     queryString = queryString.replace("?", "");
  //   }

  //   let params = {},
  //     queries,
  //     temp,
  //     i,
  //     l;
  //   // Split into key/value pairs
  //   queries = queryString.split("&");
  //   // Convert the array of strings into an object
  //   for (i = 0, l = queries.length; i < l; i++) {
  //     temp = queries[i].split("=");
  //     params[temp[0]] = temp[1];
  //   }
  //   return params;
  // },

  // updateQueryStringParameter(uri, key, value) {
  //   if (uri === undefined || uri === null) return "";
  //   let re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  //   let separator = uri.indexOf("?") !== -1 ? "&" : "?";
  //   if (value === null) {
  //     return uri.replace(re, "$1" + "$2");
  //   }
  //   if (uri.match(re)) {
  //     return uri.replace(
  //       re,
  //       "$1" + key + "=" + encodeURIComponent(value) + "$2"
  //     );
  //   } else {
  //     return uri + separator + key + "=" + encodeURIComponent(value);
  //   }
  // },
};
