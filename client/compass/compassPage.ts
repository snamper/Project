/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, Inject} from 'angular2/core'

import {TranslatePipe} from 'client/allgemein/translatePipe'
import {GlobalSetting} from  'client/globalsetting'

import {CompassView} from "./compass";

declare var jQuery:any;

@Component({
    selector: "compass-page",
    directives: [CompassView],
    pipes:[TranslatePipe],
    template: `<div>
                <div class="ui top attached menu">
                    <div class="ui animated fade primary button item" (click)="showMenu()">
                        <div class="visible content">
                            <i class="sidebar icon"></i>
                        </div>
                        <div class="hidden content">
                            {{'菜单' | tran:glsetting.lang}}
                        </div>
                    </div>
                </div>
                <compass-view></compass-view>
               </div>`,
})

export class CompassPage{
    glsetting:GlobalSetting;
    constructor(@Inject(GlobalSetting) glsetting:GlobalSetting) {
        this.glsetting = glsetting;
    }
    
    showMenu(hide) {
        if(hide === true){
            jQuery(document).find('.ui.labeled.sidebar').sidebar('hide')
        }else{
            jQuery(document).find('.ui.labeled.sidebar').sidebar('toggle');
        }
    } 
    
    ngOnInit() {
        let hideMenu = true;
        this.showMenu(hideMenu);
    }
}