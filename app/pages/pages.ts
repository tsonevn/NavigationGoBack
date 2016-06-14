import {topmost} from "ui/frame";
import {EventData} from "data/observable"



export function onLoaded(args:EventData){
    // topmost().navigate({
    //     moduleName:'main-page'
    // });
}

export function onTap(args:EventData){
    topmost().navigate({
        moduleName:'main-page'
    });
}
export function goBack(args:EventData){
    console.log("click back function");
    setTimeout(() => {
        //topmost().goBack();
    }, 10);
    
}


export function secondTap(args:EventData){
    topmost().goBack();
}

export function goNextPage(args: EventData){
    topmost().navigate({moduleName:"/pages/page2"});
}