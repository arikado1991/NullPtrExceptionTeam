﻿#pragma strict
enum EdibleType {PIZZA, DEST};
class Edible extends SpaceBox{
	var eType: EdibleType;
	function Edible(grid: Grid, type: EdibleType ){
		super(grid);
		this.type = SType.EDIBLE;
		this.eType = type;
	}
	
};