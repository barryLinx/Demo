
var app = new Vue({
  el: '#app',
  data: {
    records:[],
    currentPage:0,
    Locations:[],
    currentLocation:'',
    pages: 0,
  },
  methods: {
    getUniqueList(){
      const vm = this;
      const locations = new Set(); //陣列內容不得重複 new Set()唯一值     
      vm.records.forEach((item,i)=>{      
        locations.add(item.Zone)
      });    
      vm.Locations = Array.from(locations);  
      //console.log(locations); 
    }
  },
  computed: {
    filterData(){
      const newData = [];
      const vm = this;
      //先過濾
      let items = [];
      if (vm.currentLocation !== '' ) {
        items = vm.records.filter((item, i) => item.Zone === vm.currentLocation)
      }else{
        items = vm.records;
      }


      //有幾頁
      //每頁多少資料
      //newData = [[1...],[2...],[3...]]     
      items.forEach((item,i) => {
       // console.log('i',i);
       // console.log('Mod',i % 10);
        if (i % 10 ===0) {
          newData.push([]);    
          // console.log('newData',newData);      
        }
         const page = parseInt(i/10);
        // console.log('page',page);
        // console.log('item',item);
         newData[page].push(item); //將物件推入
        // console.log('newData[page]=>',newData[page]);
      });
     // console.log('page',newData);
      return newData;
    }
  },
  created() {
    const vm = this;//指向 vue
    axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
    .then(function(response){
      console.log(response.data);
      vm.records = response.data.result.records;
      vm.getUniqueList();
      //console.log(this);//指向 windos
    })
    .catch(function(error){
      console.log(error);

    });
  },
})


// Add:
// "高雄市三民區建國二路318號"
// Changetime
// :
// "2015-06-10T15:40:33"
// Class1
// :
// "3"
// Class2
// :
// null
// Description
// :
// "高雄願景館的前身是日治時期興建的高雄市舊火車站，外觀是”和洋混合式建築”氣勢雄偉，內部則為西式的玄關及大廳。2002年為了配合鐵路、捷運、高鐵的三鐵共構，這棟老火車站建築物遷移到附近的空地上，並由市府規劃，以"數位博物館"的型式，其中歷史迴廊對於鐵道文化及往日風貌有一系列回顧，讓遊客可以重溫老車站的過往風華，而3D虛擬互動區則讓參觀者以虛擬實境的方式飛越高雄的重要景點並同時見證高雄的發展歷史。願景館是認識高雄過去與未來的最佳場所，而願景橋、鐵路文化棧道、風的祝福廣場…等公共藝術區也是遊客們最愛駐足與拍照留念的美麗景點。"
// Gov
// :
// "397000000A"
// Id
// :
// "C1_397000000A_000009"
// Level
// :
// null
// Name
// :
// "高雄願景館"
// Opentime
// :
// "週二至週日10:00-18:00，每週一公休"
// Parkinginfo_px
// :
// "0"
// Parkinginfo_py
// :
// "0"
// Picdescribe1
// :
// "高雄願景館?"
// Picture1
// :
// "http://khh.travel/FileArtPic.ashx?id=705&w=1280&h=960"
// Px
// :
// "120.30211"
// Py
// :
// "22.63961"
// Remarks
// :
// ""
// Tel
// :
// "886-7-2363357"
// Ticketinfo
// :
// "免費參觀"
// Toldescribe
// :
// "高雄願景館的前身是日治時期興建的高雄市舊火車站，外觀是”和洋混合式建築”氣勢雄偉，內部則為西式的玄關及大廳。2002年為了配合鐵路、捷運、高鐵的三鐵共構，這棟老火車站建築物遷移到附近的空地上，並由市府規劃，以"數位博物館"的型式，其中歷史迴廊對於鐵道文化及往日風貌有一系列回顧，讓遊客可以重溫老車站的過往風華，而3D虛擬互動區則讓參觀者以虛擬實境的方式飛越高雄的重要景點並同時見證高雄的發展歷史。願景館是認識高雄過去與未來的最佳場所，而願景橋、鐵路文化棧道、風的祝福廣場…等公共藝術區也是遊客們最愛駐足與拍照留念的美麗景點。"
// Travellinginfo
// :
// ""
// Website
// :
// ""
// Zone
// :
// "三民區"
// _id
// :
// 1