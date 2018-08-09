(function ($) {
 "use strict";
    
		//---------------------------------------------
		//Nivo slider
		//---------------------------------------------
			 $('#ensign-nivoslider').nivoSlider({
				effect: 'random',
				slices: 2,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
                //endSlide: 5,
                directionNav: true,
				controlNavThumbs: true,
				pauseOnHover: true,
				manualAdvance: true
			 });
    $('#ensign-nivoslider-2').nivoSlider({
				effect: 'random',
				slices: 2,
				boxCols: 5,
    				boxRows: 4,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				//endSlide: 5,
				directionNav: true,
				controlNavThumbs: false,
				pauseOnHover: true,
				manualAdvance: true
			 });

})(jQuery); 