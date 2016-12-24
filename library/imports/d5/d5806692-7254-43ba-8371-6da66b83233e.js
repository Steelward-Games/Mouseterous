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