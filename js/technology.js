function researchunlock(){


	if(bonus["science"]>=100 && unlocked[".tech_geology"]!=1){
		$(".tech_geology").show()
		unlocked[".tech_geology"]=1;
	}


	if(bonus["military"]>=100 && unlocked[".tech_tactics"]!=1){
		$(".tech_tactics").show()
		unlocked[".tech_tactics"]=1;
	}

	if(bonus["economy"]>=100 && unlocked[".tech_funding"]!=1){
		$(".tech_funding").show()
		unlocked[".tech_funding"]=1;
	}

	if(bonus["military"]>=500 && unlocked[".tech_healing"]!=1){
		$(".tech_healing").show()
		unlocked[".tech_healing"]=1;
	}

	if(bonus["economy"]>=500 && unlocked[".tech_savings"]!=1){
		$(".tech_savings").show()
		unlocked[".tech_savings"]=1;
	}

	if(bonus["science"]>=500 && unlocked[".tech_studies"]!=1){
		$(".tech_studies").show()
		unlocked[".tech_studies"]=1;
	}

	if((bonus["science"]>=1000 || bonus["economy"]>=1000 || bonus["military"]>=1000) && unlocked[".tech_organization"]!=1){
		$(".tech_organization").show()
		unlocked[".tech_organization"]=1;
	}

	if(bonus["economy"]>=1500 && unlocked[".tech_culturaltrade"]!=1){
		$(".tech_culturaltrade").show()
		unlocked[".tech_culturaltrade"]=1;
	}
	if(bonus["military"]>=1600 && unlocked[".tech_intelligence"]!=1){
		$(".tech_intelligence").show()
		unlocked[".tech_intelligence"]=1;
	}

	if(bonus["science"]>=1700 && unlocked[".tech_crushing"]!=1){
		$(".tech_crushing").show()
		unlocked[".tech_crushing"]=1;
	}

	if((bonus["science"]>=2000 || bonus["economy"]>=2000 || bonus["military"]>=2000) && unlocked[".tech_contracts"]!=1){
		$(".tech_contracts").show()
		unlocked[".tech_contracts"]=1;
	}
	
	if(bonus["science"]>=2200 && unlocked[".tech_floatglass"]!=1){
		$(".tech_floatglass").show()
		unlocked[".tech_floatglass"]=1;
	}
	if(bonus["economy"]>=2500 && unlocked[".tech_galleon"]!=1){
		$(".tech_galleon").show()
		unlocked[".tech_galleon"]=1;
	}

	if(bonus["military"]>=2200 && unlocked[".tech_canteen"]!=1){
		$(".tech_canteen").show()
		unlocked[".tech_canteen"]=1;
	}

	if(bonus["science"]>=2500 && unlocked[".tech_glassblowing"]!=1){
		$(".tech_glassblowing").show()
		unlocked[".tech_glassblowing"]=1;
	}

	if(bonus["military"]>=3000 && unlocked[".tech_rampage"]!=1){
		$(".tech_rampage").show()
		unlocked[".tech_rampage"]=1;
	}

	if(bonus["economy"]>=3200 && unlocked[".tech_risk"]!=1){
		$(".tech_risk").show()
		unlocked[".tech_risk"]=1;
	}

	if((bonus["science"]>=3500 || bonus["economy"]>=4000) && unlocked[".tech_construction"]!=1){
		$(".tech_construction").show()
		unlocked[".tech_construction"]=1;
	}

	if(bonus["military"]>=3800 && unlocked[".tech_domestication"]!=1){
		$(".tech_domestication").show()
		unlocked[".tech_domestication"]=1;
	}


	if((bonus["science"]>=4000 || bonus["economy"]>=4500 || bonus["military"]>=5000) && unlocked[".tech_architecture"]!=1){
		$(".tech_architecture").show()
		unlocked[".tech_architecture"]=1;
	}

	if((bonus["science"]>=4000 || bonus["economy"]>=4500 || bonus["military"]>=5000) && unlocked[".tech_undergroundstorage"]!=1){
		$(".tech_undergroundstorage").show()
		unlocked[".tech_undergroundstorage"]=1;
	}

	if(bonus["economy"]>=4200 && unlocked[".tech_investment"]!=1){
		$(".tech_investment").show()
		unlocked[".tech_investment"]=1;
	}
		
	if(bonus["science"]>=4500 && unlocked[".tech_chemistry"]!=1){
		$(".tech_chemistry").show()
		unlocked[".tech_chemistry"]=1;
	}

	if(bonus["military"]>=3800 && unlocked[".tech_elephantry"]!=1){
		$(".tech_elephantry").show()
		unlocked[".tech_elephantry"]=1;
	}

	if((bonus["military"]>=5000 && bonus["economy"]>=5000) && unlocked[".tech_wareconomy"]!=1){
		$(".tech_wareconomy").show()
		unlocked[".tech_wareconomy"]=1;
	}
	
	if((bonus["science"]>=6000 || bonus["economy"]>=6000 || bonus["military"]>=6000) && unlocked[".tech_expansion"]!=1){
		$(".tech_expansion").show()
		unlocked[".tech_expansion"]=1;
	}

	if(bonus["science"]>=6800 && unlocked[".tech_investigation"]!=1){
		$(".tech_investigation").show()
		unlocked[".tech_investigation"]=1;
	}

	if(bonus["economy"]>=6800 && unlocked[".tech_internationalization"]!=1){
		$(".tech_internationalization").show()
		unlocked[".tech_internationalization"]=1;
	}
	
	if(bonus["military"]>=6800 && unlocked[".tech_camps"]!=1){
		$(".tech_camps").show()
		unlocked[".tech_camps"]=1;
	}

	if(bonus["military"]>=7600 && unlocked[".tech_fireship"]!=1){
		$(".tech_fireship").show()
		unlocked[".tech_fireship"]=1;
	}

	if(bonus["science"]>=7500 && unlocked[".tech_careening"]!=1){
		$(".tech_careening").show()
		unlocked[".tech_careening"]=1;
	}

	if(bonus["economy"]>=7600 && unlocked[".tech_deals"]!=1){
		$(".tech_deals").show()
		unlocked[".tech_deals"]=1;
	}

	if(bonus["economy"]>=8500 && unlocked[".tech_commodities"]!=1){
		$(".tech_commodities").show()
		unlocked[".tech_commodities"]=1;
	}

	if(bonus["science"]>=8900 && unlocked[".tech_openmining"]!=1){
		$(".tech_openmining").show()
		unlocked[".tech_openmining"]=1;
	}

	if(bonus["military"]>=9000 && unlocked[".tech_finding"]!=1){
		$(".tech_finding").show()
		unlocked[".tech_finding"]=1;
	}

	if(bonus["economy"]>=9300 && unlocked[".tech_multitasking"]!=1){
		$(".tech_multitasking").show()
		unlocked[".tech_multitasking"]=1;
	}

	if((bonus["economy"]>=10000 || bonus["military"]>=10000) && unlocked[".tech_seacaptain"]!=1){
		$(".tech_seacaptain").show()
		unlocked[".tech_seacaptain"]=1;
	}

	if((bonus["economy"]>=10000 || bonus["science"]>=10000) && unlocked[".tech_woodwork"]!=1){
		$(".tech_woodwork").show()
		unlocked[".tech_woodwork"]=1;
	}

	if((bonus["science"]>=10000 || bonus["economy"]>=10000 || bonus["military"]>=10000) && unlocked[".tech_masonry"]!=1){
		$(".tech_masonry").show()
		unlocked[".tech_masonry"]=1;
	}
	if((bonus["science"]>=12000 || bonus["military"]>=12000) && unlocked[".tech_quenching"]!=1){
		$(".tech_quenching").show()
		unlocked[".tech_quenching"]=1;
	}

	if((bonus["science"]>=11000 || bonus["military"]>=15000 || bonus["economy"]>=13000) && unlocked[".tech_castiron"]!=1){
		$(".tech_castiron").show()
		unlocked[".tech_castiron"]=1;
	}

	if(bonus["economy"]>=11500 && unlocked[".tech_commerce"]!=1){
		$(".tech_commerce").show()
		unlocked[".tech_commerce"]=1;
	}

	if(bonus["science"]>=13500 && unlocked[".tech_insecticides"]!=1){
		$(".tech_insecticides").show()
		unlocked[".tech_insecticides"]=1;
	}

	if(bonus["military"]>=13500 && unlocked[".tech_explosives"]!=1){
		$(".tech_explosives").show()
		unlocked[".tech_explosives"]=1;
	}
	if(bonus["military"]>=16000 && unlocked[".tech_ammunition"]!=1){
		$(".tech_ammunition").show()
		unlocked[".tech_ammunition"]=1;
	}
	if(bonus["military"]>=18000 && unlocked[".tech_gunnery"]!=1){
		$(".tech_gunnery").show()
		unlocked[".tech_gunnery"]=1;
	}
	if(bonus["economy"]>=14000 && unlocked[".tech_safes"]!=1){
		$(".tech_safes").show()
		unlocked[".tech_safes"]=1;
	}

	if((bonus["science"]>=20000 || bonus["military"]>=20000 || bonus["economy"]>=20000) && unlocked[".tech_packaging"]!=1){
		$(".tech_packaging").show()
		unlocked[".tech_packaging"]=1;
	}

	if(bonus["science"]>=16000 && unlocked[".tech_wisdom"]!=1){
		$(".tech_wisdom").show()
		unlocked[".tech_wisdom"]=1;
	}

	if(bonus["science"]>=25000 && unlocked[".tech_windward"]!=1){
		$(".tech_windward").show()
		unlocked[".tech_windward"]=1;
	}

	if(bonus["military"]>=25000 && unlocked[".tech_carrying"]!=1){
		$(".tech_carrying").show()
		unlocked[".tech_carrying"]=1;
	}

	if(bonus["economy"]>=23000 && unlocked[".tech_shareholding"]!=1){
		$(".tech_shareholding").show()
		unlocked[".tech_shareholding"]=1;
	}
	
	if((bonus["science"]>=35000 || bonus["military"]>=35000 || bonus["economy"]>=35000) && unlocked[".tech_safestorage"]!=1){
		$(".tech_safestorage").show()
		unlocked[".tech_safestorage"]=1;
	}

	if((bonus["science"]>=40000 || bonus["military"]>=40000 || bonus["economy"]>=40000) && unlocked[".tech_metalwork"]!=1){
		$(".tech_metalwork").show()
		unlocked[".tech_metalwork"]=1;
	}

	if((bonus["science"]>=45000 || bonus["military"]>=45000 || bonus["economy"]>=45000) && unlocked[".tech_steamengine"]!=1){
		$(".tech_steamengine").show()
		unlocked[".tech_steamengine"]=1;
	}

	if(bonus["military"]>=50000 && unlocked[".tech_armoredcombat"]!=1){
		$(".tech_armoredcombat").show()
		unlocked[".tech_armoredcombat"]=1;
	}
	
	if(bonus["economy"]>=50000 && unlocked[".tech_railtransport"]!=1){
		$(".tech_railtransport").show()
		unlocked[".tech_railtransport"]=1;
	}

	if(bonus["science"]>=50000 && unlocked[".tech_industrialization"]!=1){
		$(".tech_industrialization").show()
		unlocked[".tech_industrialization"]=1;
	}
	if(bonus["science"]>=70000 && unlocked[".tech_academicpublishing"]!=1){
		$(".tech_academicpublishing").show()
		unlocked[".tech_academicpublishing"]=1;
	}

	if(bonus["science"]>=30000 && unlocked[".tech_mineralcoal"]!=1){
		$(".tech_mineralcoal").show()
		unlocked[".tech_mineralcoal"]=1;
	}

	if((bonus["science"]>=85000 || bonus["economy"]>=85000)&& unlocked[".tech_logistics"]!=1){
		$(".tech_logistics").show()
		unlocked[".tech_logistics"]=1;
	}

	if((bonus["science"]>=100000 || bonus["military"]>=100000 || bonus["economy"]>=100000) && unlocked[".tech_electricity"]!=1){
		$(".tech_electricity").show()
		unlocked[".tech_electricity"]=1;
	}

	if((bonus["science"]>=100000 && bonus["military"]>=100000 && bonus["economy"]>=100000) && unlocked[".tech_triforce"]!=1){
		$(".tech_triforce").show()
		unlocked[".tech_triforce"]=1;
	}
	if((bonus["science"]>=100000 && bonus["military"]>=100000 && bonus["economy"]>=100000) && unlocked[".tech_pyroprocessing"]!=1){
		$(".tech_pyroprocessing").show()
		unlocked[".tech_pyroprocessing"]=1;
	}

}


