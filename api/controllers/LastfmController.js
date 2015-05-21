/**
 * LastfmController
 *
 * @description :: Server-side logic for managing lastfms
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `LastfmController.crawl()`
   */
  crawl: function (req, res) {
    var request = require('request');

    request('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=thmmrs2298&api_key=36ca02e767da5319c71abe6f2ee4437f&format=json', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('get recent tracks success!');
        tracks = body;
        res.send(tracks);
      }
    });

    // return res.json({
    //   todo: 'crawl() is not implemented yet!'
    // });

    
  }
};

