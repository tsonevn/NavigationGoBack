import { EventData } from "data/observable";
import { Page } from "ui/page";
import {topmost} from "ui/frame";
import {setTimeout} from "timer";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    
}

export function onTapMain(args:EventData){
    topmost().navigate({moduleName:"./pages/pages"});
}


export function onLoaded(args:EventData){
    topmost().navigate({moduleName:"./pages/pages"});
}

export function stackLoaded(args:EventData){
    //topmost().navigate({moduleName:"./pages/pages"});
}


export function buttonLaoded(args:EventData){
    //topmost().navigate({moduleName:"./pages/pages"});
}

