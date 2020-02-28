/**
 * Fetches data on domains from GoDaddy.com
 *
 * @param {string} input The value of the domain you are searching.
 * @return data information on the domain
 * @customfunction
 */
function DOMAINPRICE(domain) {
  if (domain) {
    domain = domain;
    var url = "https://api.godaddy.com/v1/domains/available?domain="+domain;
    var options = {
      'method' : 'get',
      'headers': {
        'Authorization': 'sso-key e42iDGPv1Xvg_LGcP8ai1bjbsLDsFqKkH4y:FxppvYFh4hh9gh4eCTZDg5'
      }
    };
    var response = UrlFetchApp.fetch(url, options);
    var data = JSON.parse(response.getContentText());
    if (data.available) {
      let money = data.price.toString().substring(0,data.price.toString().length-4);
      money = money.substring(0,money.length-2)+"."+money.substring(money.length-2,money.length);
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(money);
    } else {
      return 'E/NA'
    }
  }
}
