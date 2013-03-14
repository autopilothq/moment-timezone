var moment = require("../../moment-timezone");

exports.rules = {
	"Africa/Maputo 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Africa/Maputo").zone(), -120, "2013-01-01T00:00:00+00:00 should be -120 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Africa/Maputo").zone(), -120, "2013-12-31T23:59:59+00:00 should be -120 minutes offset");

		test.done();
	},

	"Africa/Maputo 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Africa/Maputo").format("HH:mm"), "02:00", "2013-01-01T00:00:00+00:00 should be 02:00 in Africa/Maputo");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Africa/Maputo").format("HH:mm"), "01:59", "2013-12-31T23:59:59+00:00 should be 01:59 in Africa/Maputo");

		test.done();
	}
};