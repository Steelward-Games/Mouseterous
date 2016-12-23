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
        tilePrefab: {
            'default': null,
            type: cc.Prefab
        },
        x0: -420,
        y0: -320
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.loadJson();
        this.createMap();
    },
    loadJson: function loadJson() {
        var url = cc.url.raw('resources/map/Map1.json');
        var myJSON = cc.loader.load(url);
        cc.log(JSON.stringify(myJSON));
    },
    createMap: function createMap() {
        var url = cc.url.raw('resources/map/Map1.json');
        cc.loader.load(url, function (err, res) {
            cc.log(cc.director.getScene());
            cc.log(res.width);
            var tileIDs = [];
            for (var exKey in res.tilesets[0].tiles) {
                tileIDs.push(res.tilesets[0].tiles[exKey].image);
            }

            for (var i = res.height - 1; i >= 0; i--) {
                for (var j = res.width - 1; j >= 0; j--) {
                    var newTile = cc.instantiate(cc.director.getScene().tilePrefab);
                    cc.director.getScene().addChild(newTile);
                    cc.director.getScene().updateTilePosition(i, j, newTile);
                }
            }
        });
    },
    updateTilePosition: function updateTilePosition(xPos, yPos, tile) {
        tile.setPosition(cc.p(xPos * 100 + this.x0, yPos * 100 + this.y0));
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9RdWljayBQbGF5L3NjcmlwdHMvTWFpbkdhbWVTY3JpcHQuanMiLCJhc3NldHMvTWFpbiBNZW51L3NjcmlwdHMvTWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdkNTgwNmFTY2xSRHVvTnhiYVpyZ3lNKycsICdNYWluR2FtZVNjcmlwdCcpO1xuLy8gUXVpY2sgUGxheVxcc2NyaXB0c1xcTWFpbkdhbWVTY3JpcHQuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgICB0aWxlUHJlZmFiOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgeDA6IC00MjAsXG4gICAgICAgIHkwOiAtMzIwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRKc29uKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWFwKCk7XG4gICAgfSxcbiAgICBsb2FkSnNvbjogZnVuY3Rpb24gbG9hZEpzb24oKSB7XG4gICAgICAgIHZhciB1cmwgPSBjYy51cmwucmF3KCdyZXNvdXJjZXMvbWFwL01hcDEuanNvbicpO1xuICAgICAgICB2YXIgbXlKU09OID0gY2MubG9hZGVyLmxvYWQodXJsKTtcbiAgICAgICAgY2MubG9nKEpTT04uc3RyaW5naWZ5KG15SlNPTikpO1xuICAgIH0sXG4gICAgY3JlYXRlTWFwOiBmdW5jdGlvbiBjcmVhdGVNYXAoKSB7XG4gICAgICAgIHZhciB1cmwgPSBjYy51cmwucmF3KCdyZXNvdXJjZXMvbWFwL01hcDEuanNvbicpO1xuICAgICAgICBjYy5sb2FkZXIubG9hZCh1cmwsIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICAgICAgY2MubG9nKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkpO1xuICAgICAgICAgICAgY2MubG9nKHJlcy53aWR0aCk7XG4gICAgICAgICAgICB2YXIgdGlsZUlEcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgZXhLZXkgaW4gcmVzLnRpbGVzZXRzWzBdLnRpbGVzKSB7XG4gICAgICAgICAgICAgICAgdGlsZUlEcy5wdXNoKHJlcy50aWxlc2V0c1swXS50aWxlc1tleEtleV0uaW1hZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gcmVzLmhlaWdodCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IHJlcy53aWR0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdUaWxlID0gY2MuaW5zdGFudGlhdGUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS50aWxlUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChuZXdUaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS51cGRhdGVUaWxlUG9zaXRpb24oaSwgaiwgbmV3VGlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHVwZGF0ZVRpbGVQb3NpdGlvbjogZnVuY3Rpb24gdXBkYXRlVGlsZVBvc2l0aW9uKHhQb3MsIHlQb3MsIHRpbGUpIHtcbiAgICAgICAgdGlsZS5zZXRQb3NpdGlvbihjYy5wKHhQb3MgKiAxMDAgKyB0aGlzLngwLCB5UG9zICogMTAwICsgdGhpcy55MCkpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzI2NWM4WGZFeWhGZUs4Q1pwTzVLRHl4JywgJ01lbnVCdXR0b24nKTtcbi8vIE1haW4gTWVudVxcc2NyaXB0c1xcTWVudUJ1dHRvbi5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHF1aWNrUGxheUJ1dHRvbjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBjYW1wYWlnbkJ1dHRvbjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBiYXR0bGVCdXR0b246IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgY29PcEJ1dHRvbjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBob3RTZWF0QnV0dG9uOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIHF1aWNrUGxheU9wYWNpdHk6IDAsXG4gICAgICAgIGNhbXBhaWduT3BhY2l0eTogMCxcbiAgICAgICAgYmF0dGxlT3BhY2l0eTogMCxcbiAgICAgICAgY29PcE9wYWNpdHk6IDAsXG4gICAgICAgIGhvdFNlYXRPcGFjaXR5OiAwXG4gICAgfSxcblxuICAgIHNldE9wYWNpdHk6IGZ1bmN0aW9uIHNldE9wYWNpdHkoKSB7XG4gICAgICAgIHRoaXMucXVpY2tQbGF5QnV0dG9uLm9wYWNpdHkgPSB0aGlzLnF1aWNrUGxheU9wYWNpdHk7XG4gICAgICAgIHRoaXMuY2FtcGFpZ25CdXR0b24ub3BhY2l0eSA9IHRoaXMuY2FtcGFpZ25PcGFjaXR5O1xuICAgICAgICB0aGlzLmJhdHRsZUJ1dHRvbi5vcGFjaXR5ID0gdGhpcy5iYXR0bGVPcGFjaXR5O1xuICAgICAgICB0aGlzLmNvT3BCdXR0b24ub3BhY2l0eSA9IHRoaXMuY29PcE9wYWNpdHk7XG4gICAgICAgIHRoaXMuaG90U2VhdEJ1dHRvbi5vcGFjaXR5ID0gdGhpcy5ob3RTZWF0T3BhY2l0eTtcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2V0T3BhY2l0eSgpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxuXG4gICAgc2luZ2xlcGxheWVyQ2xpY2s6IGZ1bmN0aW9uIHNpbmdsZXBsYXllckNsaWNrKCkge1xuICAgICAgICB0aGlzLnF1aWNrUGxheU9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMuY2FtcGFpZ25PcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLmJhdHRsZU9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmNvT3BPcGFjaXR5ID0gMCwgdGhpcy5ob3RTZWF0T3BhY2l0eSA9IDAsIHRoaXMuc2V0T3BhY2l0eSgpO1xuICAgIH0sXG5cbiAgICBtdWx0aXBsYXllckNsaWNrOiBmdW5jdGlvbiBtdWx0aXBsYXllckNsaWNrKCkge1xuICAgICAgICB0aGlzLnF1aWNrUGxheU9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmNhbXBhaWduT3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuYmF0dGxlT3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5jb09wT3BhY2l0eSA9IDI1NSwgdGhpcy5ob3RTZWF0T3BhY2l0eSA9IDI1NSwgdGhpcy5zZXRPcGFjaXR5KCk7XG4gICAgfSxcbiAgICBxdWlja1BsYXlDbGljazogZnVuY3Rpb24gcXVpY2tQbGF5Q2xpY2soKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnUXVpY2tQbGF5Jyk7XG4gICAgfSxcbiAgICBjYW1wYWlnbkNsaWNrOiBmdW5jdGlvbiBjYW1wYWlnbkNsaWNrKCkge31cblxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
