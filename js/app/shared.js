define( [ 
	"jquery",
	"signals"
],
function ( $, signals ) {
	
	var _s = {};
	
	/*===================================================
	
	signals
	
	=====================================================*/
	
	_s.signals = {
		onResized: new signals.Signal()
	};
	
	/*===================================================
	
	dom elements
	
	=====================================================*/
	
	var _de = _s.domElements = {};
	
	_de.$window = $( window );
	_de.$document = $( document );
	_de.$body = _de.$document.find( "body" );
	_de.$scrollable = $( ".scrollable" );
	
	_de.$solarSystem = $( "#solar-system" );
	_de.$section = _de.$solarSystem.find( "section" );
	
	/*===================================================
	
	general
	
	=====================================================*/
	
	_s.timeDeltaExpected = 1000 / 60;
	_s.throttleTimeShort = _s.timeDeltaExpected * 3;
	_s.throttleTimeMedium = 100;
	_s.throttleTimeLong = 250;
	_s.throttleTimeLong = 250;
	
	_s.parallaxBackground = 1.15;
	_s.parallaxMiddleground = 1.35;
	_s.parallaxForeground = 2;
	
	_s.w = _de.$window.width();
    _s.h = _de.$window.height();
	
	return _s;
	
} );