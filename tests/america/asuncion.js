var moment = require("../../moment-timezone");

exports.rules = {
	"America/Asuncion 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Asuncion").zone(), 180, "2013-01-01T00:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-03-24T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2013-03-24T02:59:59+00:00 should be 180 minutes offset");
		test.equal(moment("2013-03-24T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2013-03-24T03:00:00+00:00 should be 240 minutes offset");
		test.equal(moment("2013-10-06T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2013-10-06T03:59:59+00:00 should be 240 minutes offset");
		test.equal(moment("2013-10-06T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2013-10-06T04:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Asuncion").zone(), 180, "2013-12-31T23:59:59+00:00 should be 180 minutes offset");

		test.done();
	},

	"America/Asuncion 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Asuncion").format("HH:mm"), "21:00", "2013-01-01T00:00:00+00:00 should be 21:00 in America/Asuncion");
		test.equal(moment("2013-03-24T02:59:59+00:00").tz("America/Asuncion").format("HH:mm"), "23:59", "2013-03-24T02:59:59+00:00 should be 23:59 in America/Asuncion");
		test.equal(moment("2013-03-24T03:00:00+00:00").tz("America/Asuncion").format("HH:mm"), "23:00", "2013-03-24T03:00:00+00:00 should be 23:00 in America/Asuncion");
		test.equal(moment("2013-10-06T03:59:59+00:00").tz("America/Asuncion").format("HH:mm"), "23:59", "2013-10-06T03:59:59+00:00 should be 23:59 in America/Asuncion");
		test.equal(moment("2013-10-06T04:00:00+00:00").tz("America/Asuncion").format("HH:mm"), "01:00", "2013-10-06T04:00:00+00:00 should be 01:00 in America/Asuncion");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Asuncion").format("HH:mm"), "20:59", "2013-12-31T23:59:59+00:00 should be 20:59 in America/Asuncion");

		test.done();
	}
};