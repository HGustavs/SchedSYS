// For each study program, and in each program we list course instances by study period
var data=[
	{prognamn:"WEBUG",x:0,y:0,years:3,year:[
			{			// Year 1
						"4":[{"name":"Datorgrafik","hp":"7.5","spd":0.5,"code":"IT118G"},{"name":"Webbplatsdesign",hp:"7.5","spd":0.5,"code":"IT108G"}],
						"5":[{"name":"Grundläggande programmering med C++","hp":"7.5","spd":0.5,"code":"IT120G"},{"name":"User Experience Design",hp:"7.5","spd":0.5, "code":"IT111G"}],
						"1":[{"name":"Databassystem","hp":"7.5","spd":0.5, "code":"IT121G"},{"name":"Webbutveckling - mobilapplikationsdesign",hp:"7.5","spd":0.5,"code":"IT331G"}],
						"2":[{"name":"Webbutveckling - Programmering av mobila applikationer","hp":"7.5","spd":0.5,"code":"IT351G"},{"name":"Webbutveckling - XML API",hp:"7.5","spd":0.5,"code":"IT385G"}]		
			},
			{			// Year 2
						"4":[{"name":"IT i organisationer - introduktion","hp":"7.5","spd":0.5,"code":"IT110G"},{"name":"Databaskonstruktion",hp:"7.5","spd":0.5, "code":"IT315G"}],
						"5":[{"name":"Datakommunikation - Introduktion","hp":"7.5","spd":0.5,"code":"IT119G"},{"name":"Webbprogrammering",hp:"7.5","spd":0.5, "code":"IT311G"}],
						"1":[{"name":"Objektorienterad programmering","hp":"7.5","spd":0.5,"code":"IT366G"},{"name":"Software Engineering",hp:"7.5","spd":0.5,"code":"IT386G"}],
						"2":[{"name":"Projekt i software engineering","hp":"15.0","spd":1, "code":"IT350G"}]		
			},
			{			// Year 3
						"4":[{"name":"Operativsystem","hp":"7.5","spd":0.5, "code":"IT391G"},{"name":"Webbutveckling - content management och drift",hp:"7.5","spd":0.5,"code":"IT509G"}],
						"5":[{"name":"Webbteknologi - forskning och utveckling","hp":"7.5","spd":0.5,"code":"IT515G"},{"name":"Informationssäkerhet - Introduktion",hp:"7.5","spd":0.5,"code":"IT139G"}],
						"1":[{"name":"Examensarbete i informationsteknologi med inriktning mot webbprogrammering",hp:"30",spd:1.0,"code":"IT391G"}],
						"2":[]		
			}
	]},
	{prognamn:"DVSUG",x:620,y:0,years:3,year:[
			{			// Year 1
						"4":[],
						"5":[],
						"1":[],
						"2":[]		
			},
			{			// Year 2
						"4":[],
						"5":[],
						"1":[],
						"2":[]		
			},
			{			// Year 3
						"4":[],
						"5":[],
						"1":[],
						"2":[]		
			}		
	]},
	{prognamn:"SVEIG",x:0,y:460,years:3,year:[
			{			// Year 1
						"4":[],
						"5":[],
						"1":[],
						"2":[]		
			},
			{			// Year 2
						"4":[],
						"5":[],
						"1":[],
						"2":[]		
			},
			{			// Year 3
						"4":[],
						"5":[],
						"1":[],
						"2":[]		
			}		
	]
	}
];

var forrk={
	"IT118G":[],
	"IT108G":[],
	"IT120G":[],
	"IT111G":[],
  "IT121G":[],
	"IT331G":[[{"type":"course","code":"IT108G","credits":7.5}]],
	"IT351G":[[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],
	"IT385G":[[{"type":"course","code":"IT120G","credits":7.5}],[{"type":"course","code":"IT121G","credits":7.5}]],
	"IT110G":[],
	"IT315G":[[{"type":"course","code":"IT121G","credits":7.5}],[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],
	"IT119G":[],
	"IT311G":[[{"type":"course","code":"IT331G","credits":7.5}],[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT108G","credits":7.5}]],
	"IT366G":[[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],
	"IT386G":[[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],
	"IT350G":[[{"type":"course","code":"IT386G","credits":7.5}],[{"type":"course","code":"IT311G","credits":7.5},{"type":"course","code":"IT366G","credits":7.5}]],
	"IT391G":[[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],
	"IT509G":[[{"type":"course","code":"IT350G","credits":15}]],
	"IT515G":[[{"type":"course","code":"IT350G","credits":15}],[{"type":"course","code":"IT315G","credits":7.5}]],	
	"IT139G":[],
	"IT391G":[[{"type":"course","code":"IT515G","credits":7.5}],[{"type":"course","code":"IT509G","credits":7.5}]],
};
