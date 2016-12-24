require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"MainGameScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'd5806aSclRDuoNxbaZrgyM+', 'MainGameScript');
// Quick Play\scripts\MainGameScript.js

cc.Class({
    'extends': cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        dirtTile1Prefab: {
            'default': null,
            type: cc.Prefab
        },
        dirtTile2Prefab: {
            'default': null,
            type: cc.Prefab
        },
        brickTile1Prefab: {
            'default': null,
            type: cc.Prefab
        },
        brickTile2Prefab: {
            'default': null,
            type: cc.Prefab
        },
        tileIDs: [],
        x0: -420,
        y0: -320
    },
    // use this for initialization
    onLoad: function onLoad() {
        this.tileIDs = [this.brickTile1Prefab, this.brickTile2Prefab, this.dirtTile1Prefab, this.dirtTile2Prefab];
        this.createMap();
    },

    createMap: function createMap() {
        var url = cc.url.raw('resources/map/Map1.json');
        var self = this;
        cc.loader.load(url, function (err, res) {
            cc.log(self.x0);
            cc.log(res.width);
            var counter = 0;
            for (var i = res.height - 1; i >= 0; i--) {
                for (var j = 0; j < res.width; j++) {
                    cc.log();
                    var newTile = cc.instantiate(self.tileIDs[res.layers[0].data[counter] - 1]);
                    self.node.addChild(newTile);
                    self.updateTilePosition(j, i, newTile);
                    counter++;
                }
            }
        });
    },

    updateTilePosition: function updateTilePosition(xPos, yPos, tile) {
        tile.setPosition(cc.p(xPos * 100 + this.x0, yPos * 100 + this.y0));
    }

});
// called every frame, uncomment this function to activate update callback
//update: function (dt) {
//    cc.log(cat)
//},

cc._RFpop();
},{}],"MenuButton":[function(require,module,exports){
"use strict";
cc._RFpush(module, '265c8XfEyhFeK8CZpO5KDyx', 'MenuButton');
// Main Menu\scripts\MenuButton.js

cc.Class({
    'extends': cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        quickPlayButton: {
            'default': null,
            type: cc.Node
        },
        campaignButton: {
            'default': null,
            type: cc.Node
        },
        battleButton: {
            'default': null,
            type: cc.Node
        },
        coOpButton: {
            'default': null,
            type: cc.Node
        },
        hotSeatButton: {
            'default': null,
            type: cc.Node
        },
        quickPlayOpacity: 0,
        campaignOpacity: 0,
        battleOpacity: 0,
        coOpOpacity: 0,
        hotSeatOpacity: 0
    },

    setOpacity: function setOpacity() {
        this.quickPlayButton.opacity = this.quickPlayOpacity;
        this.campaignButton.opacity = this.campaignOpacity;
        this.battleButton.opacity = this.battleOpacity;
        this.coOpButton.opacity = this.coOpOpacity;
        this.hotSeatButton.opacity = this.hotSeatOpacity;
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.setOpacity();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    singleplayerClick: function singleplayerClick() {
        this.quickPlayOpacity = 255;
        this.campaignOpacity = 255;
        this.battleOpacity = 0;
        this.coOpOpacity = 0, this.hotSeatOpacity = 0, this.setOpacity();
    },

    multiplayerClick: function multiplayerClick() {
        this.quickPlayOpacity = 0;
        this.campaignOpacity = 0;
        this.battleOpacity = 255;
        this.coOpOpacity = 255, this.hotSeatOpacity = 255, this.setOpacity();
    },
    quickPlayClick: function quickPlayClick() {
        cc.director.loadScene('QuickPlay');
    },
    campaignClick: function campaignClick() {}

});

cc._RFpop();
},{}]},{},["MenuButton","MainGameScript"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9RdWljayBQbGF5L3NjcmlwdHMvTWFpbkdhbWVTY3JpcHQuanMiLCJhc3NldHMvTWFpbiBNZW51L3NjcmlwdHMvTWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZDU4MDZhU2NsUkR1b054YmFacmd5TSsnLCAnTWFpbkdhbWVTY3JpcHQnKTtcbi8vIFF1aWNrIFBsYXlcXHNjcmlwdHNcXE1haW5HYW1lU2NyaXB0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgZGlydFRpbGUxUHJlZmFiOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgZGlydFRpbGUyUHJlZmFiOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgYnJpY2tUaWxlMVByZWZhYjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIGJyaWNrVGlsZTJQcmVmYWI6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICB0aWxlSURzOiBbXSxcbiAgICAgICAgeDA6IC00MjAsXG4gICAgICAgIHkwOiAtMzIwXG4gICAgfSxcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy50aWxlSURzID0gW3RoaXMuYnJpY2tUaWxlMVByZWZhYiwgdGhpcy5icmlja1RpbGUyUHJlZmFiLCB0aGlzLmRpcnRUaWxlMVByZWZhYiwgdGhpcy5kaXJ0VGlsZTJQcmVmYWJdO1xuICAgICAgICB0aGlzLmNyZWF0ZU1hcCgpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVNYXA6IGZ1bmN0aW9uIGNyZWF0ZU1hcCgpIHtcbiAgICAgICAgdmFyIHVybCA9IGNjLnVybC5yYXcoJ3Jlc291cmNlcy9tYXAvTWFwMS5qc29uJyk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MubG9hZGVyLmxvYWQodXJsLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgICAgIGNjLmxvZyhzZWxmLngwKTtcbiAgICAgICAgICAgIGNjLmxvZyhyZXMud2lkdGgpO1xuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHJlcy5oZWlnaHQgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVzLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdUaWxlID0gY2MuaW5zdGFudGlhdGUoc2VsZi50aWxlSURzW3Jlcy5sYXllcnNbMF0uZGF0YVtjb3VudGVyXSAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKG5ld1RpbGUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVRpbGVQb3NpdGlvbihqLCBpLCBuZXdUaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZVRpbGVQb3NpdGlvbjogZnVuY3Rpb24gdXBkYXRlVGlsZVBvc2l0aW9uKHhQb3MsIHlQb3MsIHRpbGUpIHtcbiAgICAgICAgdGlsZS5zZXRQb3NpdGlvbihjYy5wKHhQb3MgKiAxMDAgKyB0aGlzLngwLCB5UG9zICogMTAwICsgdGhpcy55MCkpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy91cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuLy8gICAgY2MubG9nKGNhdClcbi8vfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzI2NWM4WGZFeWhGZUs4Q1pwTzVLRHl4JywgJ01lbnVCdXR0b24nKTtcbi8vIE1haW4gTWVudVxcc2NyaXB0c1xcTWVudUJ1dHRvbi5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHF1aWNrUGxheUJ1dHRvbjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBjYW1wYWlnbkJ1dHRvbjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBiYXR0bGVCdXR0b246IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgY29PcEJ1dHRvbjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBob3RTZWF0QnV0dG9uOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIHF1aWNrUGxheU9wYWNpdHk6IDAsXG4gICAgICAgIGNhbXBhaWduT3BhY2l0eTogMCxcbiAgICAgICAgYmF0dGxlT3BhY2l0eTogMCxcbiAgICAgICAgY29PcE9wYWNpdHk6IDAsXG4gICAgICAgIGhvdFNlYXRPcGFjaXR5OiAwXG4gICAgfSxcblxuICAgIHNldE9wYWNpdHk6IGZ1bmN0aW9uIHNldE9wYWNpdHkoKSB7XG4gICAgICAgIHRoaXMucXVpY2tQbGF5QnV0dG9uLm9wYWNpdHkgPSB0aGlzLnF1aWNrUGxheU9wYWNpdHk7XG4gICAgICAgIHRoaXMuY2FtcGFpZ25CdXR0b24ub3BhY2l0eSA9IHRoaXMuY2FtcGFpZ25PcGFjaXR5O1xuICAgICAgICB0aGlzLmJhdHRsZUJ1dHRvbi5vcGFjaXR5ID0gdGhpcy5iYXR0bGVPcGFjaXR5O1xuICAgICAgICB0aGlzLmNvT3BCdXR0b24ub3BhY2l0eSA9IHRoaXMuY29PcE9wYWNpdHk7XG4gICAgICAgIHRoaXMuaG90U2VhdEJ1dHRvbi5vcGFjaXR5ID0gdGhpcy5ob3RTZWF0T3BhY2l0eTtcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2V0T3BhY2l0eSgpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxuXG4gICAgc2luZ2xlcGxheWVyQ2xpY2s6IGZ1bmN0aW9uIHNpbmdsZXBsYXllckNsaWNrKCkge1xuICAgICAgICB0aGlzLnF1aWNrUGxheU9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMuY2FtcGFpZ25PcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLmJhdHRsZU9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmNvT3BPcGFjaXR5ID0gMCwgdGhpcy5ob3RTZWF0T3BhY2l0eSA9IDAsIHRoaXMuc2V0T3BhY2l0eSgpO1xuICAgIH0sXG5cbiAgICBtdWx0aXBsYXllckNsaWNrOiBmdW5jdGlvbiBtdWx0aXBsYXllckNsaWNrKCkge1xuICAgICAgICB0aGlzLnF1aWNrUGxheU9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmNhbXBhaWduT3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuYmF0dGxlT3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5jb09wT3BhY2l0eSA9IDI1NSwgdGhpcy5ob3RTZWF0T3BhY2l0eSA9IDI1NSwgdGhpcy5zZXRPcGFjaXR5KCk7XG4gICAgfSxcbiAgICBxdWlja1BsYXlDbGljazogZnVuY3Rpb24gcXVpY2tQbGF5Q2xpY2soKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnUXVpY2tQbGF5Jyk7XG4gICAgfSxcbiAgICBjYW1wYWlnbkNsaWNrOiBmdW5jdGlvbiBjYW1wYWlnbkNsaWNrKCkge31cblxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
